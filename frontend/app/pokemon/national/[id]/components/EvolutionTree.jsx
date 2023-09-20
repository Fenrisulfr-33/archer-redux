import PokemonLinkCard from '@/components/pokemon/PokemonLinkCard';

export default function EvolutionTree({ evolutionTree }) {
    // needs a starting point
    return (
        <div className="col-flex">
            {evolutionTree.start && <PokemonLinkCard pokemon={evolutionTree.start}/>}
            {evolutionTree.start.how && <div>{evolutionTree.start.how}</div>}
            {evolutionTree.start.next && <PokemonLinkCard pokemon={evolutionTree.start.next} />}
            {evolutionTree.start.next.how && <div>{evolutionTree.start.next.how}</div>}
            {evolutionTree.start.next.next && <PokemonLinkCard pokemon={evolutionTree.start.next.next} />}
        </div>
    );
};