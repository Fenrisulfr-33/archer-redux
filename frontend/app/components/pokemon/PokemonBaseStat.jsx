export default function BaseStat({ title, stat }) {
  return (
    <div className={"row-flex items-center"}>
      <div className="w-4/12 flex flex-row">
        <div className={"border w-1/4 m-1 rounded p-1 bg-purple-100"}>
          {title}
        </div>
        <div className={"border w-1/4 m-1 p-1 rounded"}>
          {stat.min}
        </div>
        <div className={"border w-1/4 m-1 p-1 rounded"}>
          {stat.base}
        </div>
        <div className={"border w-1/4 m-1 p-1 rounded"}>
          {stat.max}
        </div>
      </div>
      <div className={"w-8/12"}>
        <div className={`rounded-md h-full ${stat.tier}`} style={{ width: `${stat.width}%` }}>
        <span className="inline-block"></span>
        </div>
      </div>
    </div>
  );
}
