import Pagination from "./Pagination";

export default function PaginationLayout({
  children,
  recordsPerPage,
  totalCount,
  paginate,
  currentPage,
}) {
  return (
    <>
      {totalCount > 0 ? (
        <Pagination
          recordsPerPage={recordsPerPage}
          totalCount={totalCount}
          paginate={paginate}
          currentPage={currentPage}
        />
      ) : null}

      {children}
      {totalCount > 15 ? (
        <Pagination
          recordsPerPage={recordsPerPage}
          totalCount={totalCount}
          paginate={paginate}
          currentPage={currentPage}
        />
      ) : null}
    </>
  );
}
