export default function DataSection({ children }) {
  return (
    <div>
      <div
        className={"flex flex-col bg-gray-800 text-white rounded-md m-2 p-2"}
      >
        {children}
      </div>
    </div>
  );
}
