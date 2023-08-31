import { typeColors } from "@/components/variables/typeColors";

export default function DataRow({
  title,
  info,
  widthOne = "w-1/2",
  widthTwo = "w-1/2",
  type,
}) {
  return (
    <div className="flex flex-row p-1 border-b border-purple-300">
      <div className={`${widthOne} font-bold`}>{title}</div>
      {info && <div className={`${widthTwo}`}>{info}</div>}
      {type && <div className={`px-2 rounded font-bold ${typeColors[type.toLowerCase()]}`}>{type}</div>}
    </div>
  );
}
