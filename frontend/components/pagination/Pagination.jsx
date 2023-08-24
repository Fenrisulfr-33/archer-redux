export default function Pagination({
    recordsPerPage,
    totalCount,
    paginate,
    currentPage,
  }) {
    const pageNumbers = [];
  
    for (let i = 1; i <= Math.ceil(totalCount / recordsPerPage); i++) {
      pageNumbers.push(i);
    }
  
    return (
      <div
        className={
          "flex flex-col space-y-2 p-2 bg-gray-700 m-2 rounded-lg border-2 border-purple-300"
        }
      >
        <nav className="flex flex-row space-x-2 overflow-x-auto scrollbar-hide">
          {pageNumbers.map((page) => (
            <button
              key={page}
              className={`bg-gray-900 rounded-lg py-2 px-4 m-1 text-purple-50
                ${page === currentPage
                  ? `border-2 border-purple-50 shadow-selected`
                  : "button"}
              `}
              onClick={() => paginate(page)}
            >
              {page}
            </button>
          ))}
        </nav>
      </div>
    );
  }
  