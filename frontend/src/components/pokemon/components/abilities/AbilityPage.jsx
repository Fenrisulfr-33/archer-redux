import Image from "next/image";
import Link from "next/link";

const Container = ({ children }) => {
  return (
    <div className={"bg-gray-600 rounded-2xl border-2 border-purple-100"}>
      <div className={"m-2 bg-gray-700 rounded-lg"}>
        <div className={"p-2 col-flex space-y-2"}>{children}</div>
      </div>
    </div>
  );
};

const PokemonWithAbilities = ({ hidden, pokemon }) => {
  return (
    <Container>
    <div className={"w-full justify-center bg-gradient-to-r from-gray-500 to-purple-300 py-1 px-2 rounded border border-purple-100"}>
      <div className={"text-gray-900 font-bold"}>
        {hidden 
        ? 'Pokemon with Ability as Hidden'
        : 'Pokemon with Ability'}
      </div>
    </div>
    <div className={'grid grid-cols-2 tablet:grid-cols-4 wide:grid-cols-8 font-mono'}>
      {pokemon && pokemon.map((pokemon) => (
        <div className={'col-span-1 text-center'}>
          <div className={'flex flex-col space-y-1 items-center p-2'}>
            <Link href={`/pokemon/national/${pokemon.id}`} passHref className={'border-2 border-purple-300 text-gray-200 rounded-md p-2 bg-gray-600 hover:shadow-lg hover:shadow-purple-100 hover:bg-gray-500 hover:text-gray-900'}>
            <Image
              src={`/sprites/gen_9/${pokemon.id}.png`}
              alt={`${pokemon.name}`}
              height={100}
              width={100}
              className=""
            />
            <div className={'font-thin'}>Nat. #{pokemon.id}</div>
            <div className={'font-bold'}>{pokemon.name}</div>
            </Link>
          </div>
        </div>
      ))}
    </div>
  </Container>
  );
};

const ContainerRow = ({ title, value }) => {
  return(
    <div className={"row-flex space-x-2 bg-gradient-to-r from-gray-500 to-purple-300 py-1 px-2 rounded w-fit border border-purple-100"}>
      <div className={"text-gray-900 font-bold"}>{title}</div>
      <div className={"text-gray-100"}>{value}</div>
    </div>
  )
}

export default function AbilityPage({ ability }) {
  return (
    <div className={"m-2 col-flex space-y-2 font-mono"}>
      <Container>
        <ContainerRow title={'Name:'} value={ability?.name?.english} />
        <ContainerRow title={'Generation:'} value={ability?.generation} />
        <ContainerRow title={'Effect:'} value={ability?.description?.['sword-shield']} />
        <ContainerRow title={'Short Effect:'} value={ability?.effect?.shortEffect} />
        <ContainerRow title={'Full Effect:'} value={ability?.effect?.full} />
      </Container>
      <PokemonWithAbilities 
        hidden={false}
        pokemon={ability?.pokemonWithAbility?.normal}
      />
      <PokemonWithAbilities 
        hidden={true}
        pokemon={ability?.pokemonWithAbility?.hidden}
      />
    </div>
  );
}
