import { weaknesses } from "../variables/weaknesses";
import { colors } from "../variables/typeColors";

/**
 * Takes in a pokemons type/types and converts it into a JSX chart
 * @param {typeOne} string - needs to be lowerCase to work with the colors object 
 * @param {typeTwo} string - needs to be lowerCase to work with the colors object if present
 * @returns a React container with a list of lists
 */
export const TypeWeakness = ({ typeOne = '', typeTwo = '' }) => {
    const immune = [];
    const normal = [];
    const resistant = [];
    const doubleResistant = [];
    const weakness = [];
    const doubleWeakness = [];
    if (!typeTwo) {
        for (let [key, value] of Object.entries(weaknesses[typeOne.toLowerCase()])) {
            if (value === 0) {
                immune.push(key);
            } else if (value < 1) {
                resistant.push(key);
            } else if (value === 1) {
                normal.push(key);
            } else {
                weakness.push(key);
            }
        }
    } else {
        for (let [key, value] of Object.entries(weaknesses[typeOne.toLowerCase()])) {
            value = value * weaknesses[typeTwo.toLowerCase()][key];
            if (value === 0) {
                immune.push(key);
            } else if (value === 0.5) {
                resistant.push(key);
            } else if (value === 0.25) {
                doubleResistant.push(key);
            } else if (value === 1) {
                normal.push(key);
            } else if (value === 2) {
                weakness.push(key);
            } else {
                doubleWeakness.push(key);
            }
        }
    }

    const List = ({ types }) => {
        // takes in an array 
        const list = types.map((type, index) => <Type key={index} type={type} />)
        return (
            <div className="col-span-1">
                {list}
            </div>
        );
    }

    const Type = ({ type }) => {
        const color = colors[type];
        type = type.charAt(0).toUpperCase() + type.slice(1);
        return (
            <div className={`rounded-md mx-2 my-1 font-bold bg-opacity-75 ${color}`}>
                {type}
            </div>
        );
    }

    return (
        <div className="col-span-1 m-2 phone:col-span-4">
            <div className="grid grid-cols-1 phone:grid-cols-5 ">
                <div className="col-span-1 pb-2 phone:col-span-1">
                    <div className="col-span-1 text-center border-b-2 border-gray-400">Immunities</div>
                    <List types={immune} />
                </div>
                <div className="col-span-1 phone:col-span-2">
                    <div className="grid grid-cols-1 phone:grid-cols-2">
                        <div className="col-span-1 pb-2">
                            <div className="col-span-1 text-center border-b-2 border-gray-400">x0.25 Resistant</div>
                            <List types={doubleResistant} />
                        </div>
                        <div className="col-span-1 pb-2">
                            <div className="col-span-1 text-center border-b-2 border-gray-400">x0.5 Resistant</div>
                            <List types={resistant} />
                        </div>
                    </div>
                </div>
                <div className="col-span-1 phone:col-span-2">
                    <div className="grid grid-cols-1 phone:grid-cols-2">
                        <div className="col-span-1 pb-2">
                            <div className="col-span-1 text-center border-b-2 border-gray-400">x2 Weak</div>
                            <List types={weakness} />
                        </div>
                        <div className="col-span-1 pb-2">
                            <div className="col-span-1 text-center border-b-2 border-gray-400">x4 Weak</div>
                            <List types={doubleWeakness} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}