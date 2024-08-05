import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      {currentPage && totalPages > 1 && (
        <nav aria-label="Page navigation example">
          <ul className="flex flex-wrap justify-center space-x-1 lg:space-x-4 md:space-x-4">
            <li>
              <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-3 sm:px-1 text-[14px] lg:text-[18px] md:text-[16px] py-2 ml-0 leading-tight text-black rounded-lg bg-transparent hover:text-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Previous
              </button>
            </li>
            {pageNumbers.map((number) => (
              <li key={number}>
                <button
                  onClick={() => onPageChange(number)}
                  className={`px-3 sm:px-3 text-[14px] lg:text-[18px] md:text-[16px] py-2 leading-tight ${
                    currentPage === number
                      ? "text-black border border-black rounded-lg"
                      : "text-black bg-transparent"
                  }   border text-black rounded-lg`}
                >
                  {number}
                </button>
              </li>
            ))}
            <li>
              <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-3 sm:px-1 text-[14px] lg:text-[18px] md:text-[16px] py-2 ml-0 leading-tight text-black rounded-lg bg-transparent hover:text-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
};

export default Pagination;
