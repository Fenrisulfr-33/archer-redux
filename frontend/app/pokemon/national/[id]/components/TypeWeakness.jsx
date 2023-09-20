import { typeWeaknessObj } from "@/constants/pokemonTypeWeaknessObj";
import { typeColors } from "@/constants/pokemonTypeColors";
import { typeWeaknesses } from "@/constants/pokemonHeaders";

export default function TypeWeakness({ typeOne, typeTwo }) {
  const rows = [];
  for (const [key, value] of Object.entries(
    typeWeaknessObj[typeOne.toLowerCase()]
  )) {
    const total = typeTwo
      ? value * typeWeaknessObj[typeTwo.toLowerCase()][key]
      : value;
    let color = "";
    if (total === 4) {
      color = "bg-green-500";
    } else if (total === 2) {
      color = "bg-green-300";
    } else if (total === 1) {
      color = "bg-neutral-300";
    } else if (total === 0.5) {
      color = "bg-red-300";
    } else if (total === 0.25) {
      color = "bg-red-500";
    } else if (total === 0) {
      color = "bg-black text-white";
    }
    rows.push({ total, color });
  }

  return (
    <div
      className={
        "bg-gray-600  rounded border-2 border-purple-100 overflow-x-auto scrollbar-hide"
      }
    >
      <div
        className={
          "bg-gradient-to-r from-purple-100 to-purple-600 rounded-tr w-full"
        }
      >
        <div className={"text-2xl text-left pl-2 font-extrabold break-normal"}>
          Type Weaknesses:
        </div>
      </div>

      <table className="min-w-full ">
        <thead className="border-2 border-purple-50 bg-gray-700">
          <tr>
            {typeWeaknesses.slice(0, 9).map((type) => (
              <th key={type} className="p-1">
                <div className={`rounded ${typeColors[type]}`}>{type}</div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {rows.slice(0, 9).map((row, index) => (
              <td key={index} className={`p-1`}>
                <div className={`rounded text-gray-900 ${row.color}`}>
                  {row.total}
                </div>
              </td>
            ))}
          </tr>
        </tbody>
        <thead className="border-2 border-purple-50 bg-gray-700">
          <tr>
            {typeWeaknesses.slice(9, 18).map((type) => (
              <th key={type} className="p-1">
                <div className={`rounded ${typeColors[type]}`}>{type}</div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className={"col-span-1"}>
          <tr>
            {rows.slice(9, 18).map((row, index) => (
              <td key={index} className="p-1">
                <div className={`rounded text-gray-900 ${row.color}`}>
                  {row.total}
                </div>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
