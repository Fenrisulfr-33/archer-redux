import { weaknesses } from "../variables/weaknesses";
import { colors } from "../variables/typeColors";

/**
 * Takes in a pokemons type/types and converts it into a JSX chart
 * @param {typeOne} string - needs to be lowerCase to work with the colors object
 * @param {typeTwo} string - needs to be lowerCase to work with the colors object if present
 * @returns a React container with a list of lists
 */
export const TypeWeakness = ({ typeOne, typeTwo }) => {
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
    <div className={'col=span-1 tablet:col-span-2 mt-2 text-sm'}>
    <table className="min-w-full rounded-2xl">
      <thead> 
        <tr>{types.slice(0, 8).map((type) => (<th className={`${colors[type]} bg-opacity-60`}>{type}</th>))}</tr>
      </thead>
      <tbody> 
        <tr>{rows.slice(0, 8).map(row => (<td className={`bg-gray-600`}>{row}</td>))}</tr>
      </tbody>
      <thead className={'col-span-1'}> 
        <tr>{types.slice(9, 17).map((type) => (<th className={`${colors[type]} bg-opacity-60`}>{type}</th>))}</tr>
      </thead>
      <tbody className={'col-span-1'}> 
        <tr>{rows.slice(9, 17).map(row => (<td className={`bg-gray-600`}>{row}</td>))}</tr>
      </tbody>
    </table>
    </div>
  );
};
