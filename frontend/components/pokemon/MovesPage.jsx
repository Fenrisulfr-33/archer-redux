import DataContainer from "@/components/pokemon/DataContainer";
import DataSection from "@/components/pokemon/DataSection";
import DataRow from "@/components/pokemon/DataRow";
import AddNewComponent from "@/components/pokemon/AddNewComponent";

export default function MovePage({ move }) {
  const rows = [
    { title: "Type", type: move.type },
    { title: "Category", info: move.category },
    { title: "Power", info: move.power },
    { title: "Accuracy", info: `${move.accuracy}%` },
    { title: "PP", info: `${move.pp} (max. ${move.pp * 1.6})` },
    { title: "Makes Contact?", info: move.contact ? move.contact : "--" },
    { title: "Introduced", info: `Generation ${move.generation}` },
    { title: "Short Effect", info: move.effect.shortEffect },
    { title: "Full Effect", info: move.effect.full },
  ];

  return (
    <div className="font-mono">
      <DataContainer title={move.name.english}>
        <DataSection>
          {rows.map((row) => (
            <DataRow
              title={row.title}
              info={row.info}
              widthOne={"w-1/4"}
              widthTwo={"w-3/4"}
              type={row?.type}
            />
          ))}
        </DataSection>
      </DataContainer>
      <AddNewComponent note={'Game drop down to select which game to use.'}/>
      <DataContainer title={"Pokemon that learn move from level-up"}>
        <DataSection>This section is in progress</DataSection>
      </DataContainer>
      <DataContainer title={"Pokemon that learn move from breeding"}>
        <DataSection>This section is in progress</DataSection>
      </DataContainer>
    </div>
  );
}
