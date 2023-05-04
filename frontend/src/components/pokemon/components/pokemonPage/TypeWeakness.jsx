import { weaknesses } from "../../variables/weaknesses";
import { colors } from "../../variables/typeColors";

/**
 * Takes in a pokemons type/types and converts it into a JSX chart
 * @param {typeOne} string - needs to be lowerCase to work with the colors object
 * @param {typeTwo} string - needs to be lowerCase to work with the colors object if present
 * @returns a React container with a list of lists
 */
export default function TypeWeakness({ typeOne, typeTwo }){
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
    if (typeOne){
      for (let [key, value] of Object.entries(weaknesses[typeOne.toLowerCase()])) {
        const total = typeTwo ? value * weaknesses[typeTwo.toLowerCase()][key] : value;
        rows.push(total);
      }
    }

  return (
    <div className={'text-sm'}>
    <table className="min-w-full rounded-2xl">
      <thead> 
        <tr>{types.slice(0, 9).map((type) => (<th key={type} className={`${type}-bg`}>{type}</th>))}</tr>
      </thead>
      <tbody> 
        <tr>{rows.slice(0, 9).map((row, index) => (<td key={index} className={`bg-gray-600`}>{row}</td>))}</tr>
      </tbody>
      <thead className={'col-span-1'}> 
        <tr>{types.slice(9, 18).map((type) => (<th key={type} className={`${type}-bg`}>{type}</th>))}</tr>
      </thead>
      <tbody className={'col-span-1'}> 
        <tr>{rows.slice(9, 18).map((row, index) => (<td key={index} className={`bg-gray-600`}>{row}</td>))}</tr>
      </tbody>
    </table>
    </div>
  );
};
