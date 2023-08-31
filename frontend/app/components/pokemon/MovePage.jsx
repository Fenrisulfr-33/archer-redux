'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import DataContainer from "@/components/pokemon/DataContainer";
import DataSection from "@/components/pokemon/DataSection";
import DataRow from "@/components/pokemon/DataRow";
import AddNewComponent from "@/components/pokemon/AddNewComponent";
import Image from "next/image";
import MoveGameDropDown from "./MovePageGameDropDownTest";
import { gameDropDown } from '../variables/pokemonDropDowns';

export default function MovePage({ move, game }) {
  const router = useRouter();
  const gameInitial = () => game ? gameDropDown[game] : move.gameDropDown[0];
  const [gameSelected, setGameSelected] = useState(() => gameInitial())
  const handleGameSelect = (event) => {
    router.push(`/pokemon/moves/${move._id}/${event.key}`);
  }

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
      <DataContainer title={`${move.name.english} [move]`}>
        <DataSection>
          {rows.map((row) => (
            <DataRow
              title={row.title}
              info={row.info}
              widthOne={"w-1/2 phone:w-1/4"}
              widthTwo={"w-1/2 phone:w-3/4"}
              type={row?.type}
            />
          ))}
        </DataSection>
      </DataContainer>
      <MoveGameDropDown list={move.gameDropDown} selected={gameSelected} setSelected={handleGameSelect} placeholder={'Select a Game'}/>
      <DataContainer title={"Pokemon that learn move from level-up"}>
        <DataSection>
          <div className="grid grid-cols-1 phone:grid-cols-2 tablet:grid-cols-4">
            {move.pokemonThatLearnMove["level-up"] &&
              move.pokemonThatLearnMove["level-up"].map((pokemon) => (
                <div className="flex flex-col border-2 border-purple-50 m-1 p-2 rounded col-span-1 text-white bg-gray-900">
                  <div className="flex justify-center">
                    <Image
                      src={`/sprites/gen_9/${pokemon.id}.png`}
                      alt={pokemon.name}
                      height={60}
                      width={60}
                    />
                  </div>
                  <DataRow title={'Nat No.'} info={pokemon.id} />
                  <DataRow title={'Name'} info={pokemon.name} />
                  <DataRow title={'Type 1'} type={pokemon.type.one} />
                  {pokemon.type.two && <DataRow title={'Nat No.'} type={pokemon.type.two} />}
                  <DataRow title={'Level'} type={pokemon.level} />
                </div>
              ))}
          </div>
        </DataSection>
      </DataContainer>
      <DataContainer title={"Pokemon that learn move from breeding"}>
        <DataSection>This section is in progress</DataSection>
      </DataContainer>
    </div>
  );
}
