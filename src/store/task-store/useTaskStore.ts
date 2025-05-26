import { create } from "zustand";
import { devtools } from "zustand/middleware";

export interface Task {
  id: number;
  title: string;
  description?: string;
  completed: boolean;
}

interface TaskState {
  tasks: Task[];
  selectedTask: Task | null;
  setSelectedTask: (task: Task | null) => void;
  showCreateModal: boolean;

  fetchTasks: () => void;
  addTask: (task: Omit<Task, "id">) => void;
  updateTask: (id: number, updatedFields: Partial<Task>) => void;
  toggleComplete: (id: number) => void;
  deleteTask: (id: number) => void;
  setShowCreateModal: (value: boolean) => void;
}

const useTaskStore = create<TaskState>()(
  devtools((set, get) => ({
    tasks: [],
    showCreateModal: false,
    selectedTask: null,
    setSelectedTask: (task) => set({ selectedTask: task }),

    fetchTasks: async () => {
      const res = await fetch("http://localhost:5000/tasks");
      const data = await res.json();
      set({ tasks: data });
    },

    addTask: async (task) => {
      const res = await fetch("http://localhost:5000/tasks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...task, id: Date.now() }),
      });
      const newTask = await res.json();

      set((state) => ({
        tasks: [...state.tasks, newTask],
      }));
    },

    updateTask: async (id, updatedFields) => {
      await fetch(`http://localhost:5000/tasks/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedFields),
      });

      set((state) => ({
        tasks: state.tasks.map((t) =>
          t.id === id ? { ...t, ...updatedFields } : t
        ),
      }));
    },

    toggleComplete: async (id) => {
      const current = get().tasks.find((t) => t.id === id);
      if (!current) return;

      const updated = { completed: !current.completed };
      await fetch(`http://localhost:5000/tasks/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updated),
      });

      set((state) => ({
        tasks: state.tasks.map((t) => (t.id === id ? { ...t, ...updated } : t)),
      }));
    },

    deleteTask: async (id) => {
      await fetch(`http://localhost:5000/tasks/${id}`, {
        method: "DELETE",
      });

      set((state) => ({
        tasks: state.tasks.filter((t) => t.id !== id),
      }));
    },

    setShowCreateModal: (value) => set({ showCreateModal: value }),
  }))
);

export default useTaskStore;
