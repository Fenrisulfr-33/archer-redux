export default function BerryTable() {
    return (
      <div className={'bg-gray-800 border border-purple-100 rounded-lg overflow-x-auto scrollbar-hide px-2 w-fit'}>
      <table className={'text-center text-purple-200 w-full'}>
        <tr>
          <th className={'bg-gray-600 font-bold text-gray-300 rounded-tl-lg px-2'}>Attck</th>
          <td>Spicy</td>
        </tr>
        <tr>
          <th className={'bg-gray-600 text-gray-300'}>Defense</th>
          <td>Sour</td>
        </tr>
        <tr>
          <th className={'bg-gray-600 text-gray-300'}>Sp Attack</th>
          <td>Dry</td>
        </tr>
        <tr>
          <th className={'bg-gray-600 text-gray-300 px-2'}>Sp Defense</th>
          <td className={'px-2'}>Bitter</td>
        </tr>
        <tr>
          <th className={'bg-gray-600 text-gray-300 rounded-bl-lg'}>Speed</th>
          <td>Sweet</td>
        </tr>
      </table>
      </div>
    );
  }
  