export default function ArticlesTable() {

    const th = "border"
  return (
    <div className="border m-1 p-1 bg-gray-700 overflow-x-auto">
    <table>
      <tr className="space-x-2">
        <th className="border">Company</th>
        <th>Contact</th>
        <th>Country</th>
        <th>Country</th>
        <th>Country</th>
        <th>Country</th>
        <th>Country</th>
      </tr>
      <tr>
        <td>Alfreds Futterkiste</td>
        <td>Maria Anders</td>
        <td>Germany</td>
      </tr>
      <tr>
        <td>Centro comercial Moctezuma</td>
        <td>Francisco Chang</td>
        <td>Mexico</td>
      </tr>
    </table>
    </div>
  );
}
