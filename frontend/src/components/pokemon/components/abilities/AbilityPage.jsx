export default function AbilityPage({ ability }) {
  return (
    <div className={"col-flex"}>
      <div>Name: {ability.name.english}</div>
      <div>Generation: {ability.generation}</div>
      <div>Short Effect: {ability.effect.shortEffect}</div>
      <div>Full Effect: {ability.effect.full}</div>
      <div>Pokemon With Ability</div>
      <div className={"row-flex"}>
        {ability.pokemonWithAbility.normal}
      </div>
      <div>Pokemon With Ability as Hidden Ability</div>
      <div className={"row-flex"}>
        {ability.pokemonWithAbility.hidden}
      </div>
    </div>
  );
}
