export default function EvolutionTree({ evolutionTree }) {
    // The Evolution tree should be an object if there is an evolution tree.
    // Else is will be just a number, or null.
    return <>{Object.keys(evolutionTree).length > 0 && <div>Evolution</div>}</>;
}
