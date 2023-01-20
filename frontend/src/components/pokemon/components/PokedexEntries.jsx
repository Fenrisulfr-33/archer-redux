const style = {
  one: "w-1/6 bg-purple-900",
  two: "w-1/3 bg-purple-400",
  three: "w-1/2 bg-indigo-500",
  four: "w-2/3 bg-blue-400",
  five: "w-4/5 bg-green-600",
  six: "w-full bg-green-200",
};

// const PokedexEntry = ({ form, rows }) => (
//   <div className='flex flex-col bg-gray-600 rounded-3xl p-3 text-xs'>
//     <h4 className={'font-extrabold bg-gray-800 rounded-md text-purple-600 px-1 text-left w-fit'}>{form}</h4>
//     <br></br>
//     {rows.map((row) => row.entry && (
//       <div className='flex flex-row text-xxs phone:text-xs desktop:text-base'>
//         <div className={' w-2/12 desktop:w-1/12 flex flex-col mb-2 border-r-2 border-gray-700'}>
//           {row.game.map((game) => (<span className={`text-right pr-1 text-${game.toLowerCase()}-200`}>{game}</span>))}
//         </div>
//         <p className={'w-10/12 desktop:w-11/12 pl-1 text-left break-words'}>{row.desc}</p>
//       </div>
//     ))
//   </div>
// )

export const PokedexEntries = ({ entries }) => {

  for (const form in entries) {
    const rows = [
      {entry: entries[form].rb, game: ['Red', 'Blue'], desc: entries[form].rb},
      {entry: entries[form].ye, game: ['Yellow'], desc: entries[form].ye},
      {entry: entries[form].g, game: ['Gold'], desc: entries[form].g},
      {entry: entries[form].s, game: ['Silver'], desc: entries[form].s},
      {entry: entries[form].c, game: ['Crystal'], desc: entries[form].c},
      {entry: entries[form].rse, game: ['Ruby', 'Shappire', 'Emerald'], desc: entries[form].rse},
      {entry: entries[form].dpp, game: ['Diamond', 'Pearl', 'Platinum'], desc: entries[form].dpp},
      {entry: entries[form].fr, game: ['FireRed'], desc: entries[form].fr},
      {entry: entries[form].lg, game: ['LeafGreen'], desc: entries[form].lg},
      {entry: entries[form].hg, game: ['HeartGold'], desc: entries[form].hg},
      {entry: entries[form].ss, game: ['SoulSilver'], desc: entries[form].ss},
      {entry: entries[form].bwb2w2, game: ['Black', 'White', 'Black 2', 'White 2'], desc: entries[form].bwb2w2},
      {entry: entries[form].x, game: ['X'], desc: entries[form].x},
      {entry: entries[form].y, game: ['Y'], desc: entries[form].y},
      {entry: entries[form].oras, game: ['Omega Ruby', 'Alpha Sapphire'], desc: entries[form].oras},
      {entry: entries[form].sun, game: ['Sun'], desc: entries[form].sun},
      {entry: entries[form].mo, game: ['Moon'], desc: entries[form].mo},
      {entry: entries[form].us, game: ['Ultra Sun'], desc: entries[form].us},
      {entry: entries[form].um, game: ['Ultra Moon'], desc: entries[form].um},
      {entry: entries[form].lgplge, game: [`Let's Go Pikachu`, `Let's Go Eevee`], desc: entries[form].lgplge},
      {entry: entries[form].sw, game: ['Sword'], desc: entries[form].sw},
      {entry: entries[form].sh, game: ['Shield'], desc: entries[form].sh},
      {entry: entries[form].bdsp, game: ['BDSP'], desc: entries[form].bdsp},
      {entry: entries[form].la, game: ['Legends Arceus'], desc: entries[form].la},
    ];
    return (
      <div className='flex flex-col bg-gray-600 rounded-3xl p-3 text-xs'>
        <h4 className={'font-extrabold bg-gray-800 rounded-md text-purple-600 px-1 text-left w-fit'}>{form}</h4>
        <br></br>
        {rows.map((row) => row.entry && (
          <div className='flex flex-row text-xxs phone:text-xs desktop:text-base'>
            <div className={' w-2/12 desktop:w-1/12 flex flex-col mb-2 border-r-2 border-gray-700'}>
              {row.game.map((game) => (<span className={`text-right pr-1 text-${game.toLowerCase()}-200`}>{game}</span>))}
            </div>
            <p className={'w-10/12 desktop:w-11/12 pl-1 text-left break-words'}>{row.desc}</p>
          </div>
        ))}
      </div>
    );
  }
};
