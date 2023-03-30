import Pagination from "../components/pagination/Pagination";

export default function PaginationLayout({
  children,
  recordsPerPage,
  totalCount,
  paginate,
  currentPage,
}) {
  return (
    <>
      <Pagination
        recordsPerPage={recordsPerPage}
        totalCount={totalCount}
        paginate={paginate}
        currentPage={currentPage}
      />
      {children}
      <Pagination
        recordsPerPage={recordsPerPage}
        totalCount={totalCount}
        paginate={paginate}
        currentPage={currentPage}
      />
    </>
  );
}
