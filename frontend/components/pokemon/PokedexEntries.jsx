import { gameColors } from "../variables/gameColors";

export default function PokedexEntries({ entries }) {
  const forms = [];
  for (const [form, desc] of Object.entries(entries)) {
    forms.push(
      <div className="m-2 p-2 bg-gray-700 rounded">
        <div
          className={
            "bg-gradient-to-r from-purple-100 to-purple-600 rounded w-full"
          }
        >
          <div className={"text-2xl pl-2 font-extrabold break-normal"}>
            {form}
          </div>
        </div>
        {desc.map((row) => (
          <div key={row.game} className="flex flex-row">
            <div
              className={`font-extrabold w-2/12 p-1 m-1 bg-opacity-80 rounded ${
                gameColors[row.game]
              }`}
            >
              {row.game}
            </div>
            <div className={"break-words w-10/12 p-1 m-1"}>{row.desc}</div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="col-flex space-y-2 bg-gray-600 rounded border-2 border-purple-100 text-left">
      <div
        className={
          "bg-gradient-to-r from-purple-100 to-purple-600 rounded-tr w-full"
        }
      >
        <div className={"text-2xl pl-2 font-extrabold break-normal"}>
          Pokédex entries:
        </div>
      </div>
      {forms.map((form) => form)}
    </div>
  );
}
