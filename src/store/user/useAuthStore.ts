import { create } from "zustand";
import { persist } from "zustand/middleware";
import { login as loginApi, LoginResponse, refreshTokenAsync } from "src/services/authService";
import { Roles } from "src/enums/Roles";

export interface AuthStore {
  isLoggedIn: boolean;
  firstName: string;
  lastName: string;
  email: string;
  
  login: (email: string, password: string) => Promise<void>;

  logout: () => void;
}

export const useAuthStore = create<AuthStore>()(
  persist(
      (set, get) => ({
        isLoggedIn: false,
        email: '',
        firstName: '',
        lastName: '',

        logout: () => set({
          isLoggedIn: false,
          email: '',
          firstName: '',
        }),

        login: async (email, password) => {
          try {
            const data = await loginApi(email, password);
            set({
              isLoggedIn: true,
              firstName: data.firstName,
              lastName: data.lastName,
              email,
            });
            
            return data;
          } catch (error) {
            console.error('Login failed:', error);
            throw error;
          }
        },

      }),
      { name: 'AuthStore' }

  )
);