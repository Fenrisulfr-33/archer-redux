import Link from "next/link";
import TableLayout from "../tableLayout/tableLayout";

const styles = {
  th: "py-1 px-1 text-center",
  tablet: "tablet:py-2 tablet:px-4",
  laptop: "laptop:py-3 laptop:px-6",
};

const AbilitiesRow = ({ ability: { _id, name, effect } }) => {
  return (
    <tr className="text-center hover:bg-purple-200 hover:text-gray-900 hover:font-bold">
      <td>{_id}</td>
      <Link href={`/pokemon/abilities/${_id}`} passhref>
        {name.english}
      </Link>
      <td>{effect?.shortEffect}</td>
    </tr>
  );
};

const headers = [
  "No.",
  "Name",
  "Short Eff."
];

export default function AllAbilitiesList({ list }){
  return (
    <TableLayout
      thead={headers.map((header, index) => (
        <th key={index} className={styles.th}>
          {header}
        </th>
      ))}
      tbody={list.map((ability) => (
        <AbilitiesRow key={ability._id} ability={ability} />
      ))}
    />
  );
};