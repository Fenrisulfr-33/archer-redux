export default function PokemonTableLayout({ thead, tbody }) {
    return (
      <div className="m-2 rounded border-4 border-purple-100 overflow-x-auto scrollbar-hide ">
        <div className="inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full font-mono text-sm phone:text-lg border-collapse">
              <thead className="p-2 text-center text-gray-300 font-extrabold font-mono bg-gray-900 border-b border-purple-50">
                <tr>{thead}</tr>
              </thead>
              <tbody className="bg-gray-700 text-gray-100 text-center">{tbody}</tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
  