export default function NatureTable() {
  return (
    <div className={'bg-gray-800 border border-purple-100 rounded-lg overflow-x-auto scrollbar-hide px-2'}>
    <table className={'text-center  text-purple-200 w-full'}>
      <tr className={'bg-gray-600 font-bold text-gray-300'}>
        <th className={'rounded-tl-lg'}></th>
        <th>-Attack</th>
        <th>-Defense</th>
        <th>-Sp. Atk</th>
        <th>-Sp. Def</th>
        <th className={'rounded-tr-lg'}>-Speed</th>
      </tr>
      <tr>
        <td className={'bg-gray-600 font-bold text-gray-300 px-2'}>+Attack</td>
        <td>Hardy</td>
        <td className={'px-2'}>Lonely</td>
        <td>Adamant</td>
        <td className={'px-2'}>Naughty</td>
        <td>Brave</td>
      </tr>
      <tr>
        <td className={'bg-gray-600 font-bold text-gray-300'}>+Defense</td>
        <td>Bold</td>
        <td>Docile</td>
        <td>Impish</td>
        <td>Lax</td>
        <td className={'px-2'}>Relaxed</td>
      </tr>
      <tr>
        <td className={'bg-gray-600 font-bold text-gray-300'}>+Sp. Atk</td>
        <td className={'px-2'}>Modest</td>
        <td>Mild</td>
        <td>Bashful</td>
        <td>Rash</td>
        <td>Quiet</td>
      </tr>
      <tr>
        <td className={'bg-gray-600 font-bold text-gray-300'}>+Sp. Def</td>
        <td>Calm</td>
        <td>Gentle</td>
        <td className={'px-2'}>Careful</td>
        <td>Quirky</td>
        <td>Sassy</td>
      </tr>
      <tr>
        <td className={'bg-gray-600 font-bold text-gray-300 rounded-bl-lg'}>+Speed</td>
        <td>Timid</td>
        <td>Hasty</td>
        <td>Jolly</td>
        <td>Naive</td>
        <td className={'px-2'}>Serious</td>
      </tr>
    </table>
    </div>
  );
}
