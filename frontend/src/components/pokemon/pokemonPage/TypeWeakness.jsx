import { weaknesses } from "../variables/weaknesses";
import { colors } from "../variables/typeColors";

/**
 * Takes in a pokemons type/types and converts it into a JSX chart
 * @param {typeOne} string - needs to be lowerCase to work with the colors object
 * @param {typeTwo} string - needs to be lowerCase to work with the colors object if present
 * @returns a React container with a list of lists
 */
export default function TypeWeakness({ typeOne, typeTwo }) {
  const types = [
      "NOR",
      "FIR",
      "WAT",
      "ELE",
      "GRA",
      "ICE",
      "FIG",
      "POI",
      "GRO", // mid point
      "FLY",
      "PSY",
      "BUG",
      "ROC",
      "GHO",
      "DRA",
      "DAR",
      "STL",
      "FAI",
    ],
    rows = [];
  for (const [key, value] of Object.entries(
    weaknesses[typeOne.toLowerCase()]
  )) {
    const total = typeTwo
      ? value * weaknesses[typeTwo.toLowerCase()][key]
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
            {types.slice(0, 9).map((type) => (
              <th key={type} className="p-1">
                <div className={`rounded ${colors[type]}`}>{type}</div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {rows.slice(0, 9).map((row, index) => (
              <td key={index} className={`p-1`}>
                <div className={`rounded text-gray-900 ${row.color}`}>{row.total}</div>
              </td>
            ))}
          </tr>
        </tbody>
        <thead className="border-2 border-purple-50 bg-gray-700">
          <tr>
            {types.slice(9, 18).map((type) => (
              <th key={type} className="p-1">
                <div className={`rounded ${colors[type]}`}>{type}</div>
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
