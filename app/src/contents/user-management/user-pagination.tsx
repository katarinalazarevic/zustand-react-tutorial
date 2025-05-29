import PrimaryPagination from "src/components/pagination/primary-pagination";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const UserPagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
  return (
    <PrimaryPagination
      currentPage={currentPage}
      totalPages={totalPages}
      onPageChange={onPageChange}
    />
  );
};

export default UserPagination;