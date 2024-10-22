import React from "react";
import { ChevronIcon } from "@/assets/icons";
import { cn } from "@/utils";

interface PaginationProps {
  currentPage: number;
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalItems,
  itemsPerPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = 3;

    let startPage = Math.max(1, currentPage - 1);
    const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let index = startPage; index <= endPage; index++) {
      pageNumbers.push(
        <button
          key={index}
          onClick={() => onPageChange(index)}
          className={cn("size-9 rounded-md text-sm leading-3 text-grey-300", {
            "rounded-full bg-primary-200 text-white": currentPage === index,
          })}
        >
          {index}
        </button>,
      );
    }

    return pageNumbers;
  };

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-6">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="grid size-15 place-content-center rounded-md border bg-sidebar p-2 disabled:bg-grey-100"
        >
          <ChevronIcon variation="left" />
        </button>

        <span className="flex space-x-6">{renderPageNumbers()}</span>

        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="grid size-15 place-content-center rounded-md border bg-sidebar p-2 disabled:bg-grey-100"
        >
          <ChevronIcon variation="right" />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
