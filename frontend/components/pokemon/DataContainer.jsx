export default function DataContainer({ title, children }) {
  return (
    <div className="col-flex m-2 space-y-2 bg-gray-600 rounded border-2 border-purple-100 text-left">
      <div
        className={
          "bg-gradient-to-r  from-purple-100 to-purple-600 rounded-tr w-full"
        }
      >
        <div className={"text-2xl text-white pl-2 font-extrabold break-normal"}>
          {title}:
        </div>
      </div>
      {children}
    </div>
  );
}
