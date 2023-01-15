const style = {
  one: "w-1/6 bg-purple-900",
  two: "w-1/3 bg-purple-400",
  three: "w-1/2 bg-indigo-500",
  four: "w-2/3 bg-blue-400",
  five: "w-4/5 bg-green-600",
  six: "w-full bg-green-200",
};

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
      {entry: entries[form].lgplge, game: [`Let's Go Pikachu`, `Let's Go Eevee`], desc: entries[form].lgplge},
      {entry: entries[form].sw, game: ['Sword'], desc: entries[form].sw},
      {entry: entries[form].sh, game: ['Shield'], desc: entries[form].sh},
      {entry: entries[form].bdsp, game: ['BDSP'], desc: entries[form].bdsp},
      {entry: entries[form].la, game: ['Legends Arceus'], desc: entries[form].la},
    ];
    return (
      <div className='flex flex-col bg-gray-500 rounded-3xl p-3 text-xxs'>
        <h4 className={'text-left'}>{form}</h4>
        <br></br>
        {rows.map((row) => row.entry && (
          <div className='flex flex-row'>
            <div className={'w-auto flex-col'}>
              {row.game.map((game) => game)}
            </div>
            <p className={'w-auto text-right'}>{row.desc}</p>
          </div>
        ))}
      </div>
    );
  }
};
