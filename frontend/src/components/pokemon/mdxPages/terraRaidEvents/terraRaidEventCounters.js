export const greninjaCounters = [
  {
    id: 423,
    name: "Gastrodon",
    type: "Water/Ground",
    ability: "Storm Drain",
    terraType: "Ground",
    nature: "Calm",
    heldItem: "Cowards Cloak",
    role: "All around",
    moves: [
      { name: "Earth Power", type: "ground-bg" },
      { name: "Acid Armor", type: "poison-bg" },
      { name: "Clear Smog", type: "poison-bg" },
      { name: "Recover", type: "normal-bg" },
    ],
    otherMoves: [{ name: "Stockpile", type: "normal-bg" }],
    evs: [
      { name: "HP", value: 252 },
      { name: "SpD", value: 252 },
      { name: "Def", value: 4 },
    ],
    notes: `High Special defense protects you from Ice Beam, Acid armor is for all the physical attacks. Any Hydro Pumps boost special attack. Clear smog knocks Greninja's evasivness back down to 0. If Greninja doesn't use Hydro Pump boost your stats using a cheer then ground terra earht power your way after he clears all stats after turn 3.`,
  },
  {
    id: 980,
    name: "Clodsire",
    type: "Poison/Ground",
    ability: "Water Absorb",
    terraType: "Ground",
    nature: "Adamant",
    heldItem: "Leftovers",
    role: "Physical Attacker/Natural Defense",
    moves: [
      { name: "Earthquake", type: "ground-bg" },
      { name: "Curse", type: "ghost-bg" },
      { name: "Yawn", type: "normal-bg" },
      { name: "Recover", type: "normal-bg" },
    ],
    otherMoves: [
      { name: "Stockpile", type: "normal-bg" },
      { name: "Helping Hand", type: "normal-bg" },
    ],
    evs: [
      { name: "HP", value: 252 },
      { name: "Atk", value: 252 },
      { name: "SpD", value: 4 },
    ],
    notes: ``,
  },
];

export const pikachuCounters = [
  {
    id: 908,
    name: "Meowscarada",
    type: "Grass/Dark",
    ability: "Overgrow",
    terraType: "Grass",
    nature: "Modest",
    heldItem: "Life Orb",
    role: "Special Attacker",
    moves: [
      { name: "Knock Off", type: "dark-bg" },
      { name: "Giga Drain", type: "grass-bg" },
      { name: "Nasty Plot", type: "dark-bg" },
      { name: "Frenzy Plant", type: "grass-bg" },
    ],
    otherMoves: [],
    evs: [
      { name: "HP", value: 252 },
      { name: "SpA", value: 252 },
      { name: "Spd", value: 4 },
    ],
    notes: ``,
  },
  {
    id: 754,
    name: "Lurantis",
    type: "Grass",
    ability: "Contrary",
    terraType: "Grass",
    nature: "Modest",
    heldItem: "Shell Bell",
    role: "Special Attacker",
    // Type = type-bg
    moves: [
      { name: "Synthesis", type: "grass-bg" },
      { name: "Sunny Day", type: "fire-bg" },
      { name: "Solar Beam", type: "grass-bg" },
      { name: "Leaf Storm", type: "grass-bg" },
    ],
    otherMoves: [],
    // HP - Atk - Def - SpA - SpD - Spd
    evs: [
      { name: "HP", value: 252 },
      { name: "SpA", value: 252 },
      { name: "SpD", value: 4 },
    ],
    notes: ``,
  },
];

const blankEntry = {
  id: 0,
  name: "",
  type: "",
  ability: "",
  terraType: "",
  nature: "",
  heldItem: "",
  role: "",
  // Type = type-bg
  moves: [
    { name: "", type: "-bg" },
    { name: "", type: "-bg" },
    { name: "", type: "-bg" },
    { name: "", type: "-bg" },
  ],
  otherMoves: [{ name: "", type: "" }],
  // HP - Atk - Def - SpA - SpD - Spd
  evs: [
    { name: "", value: 0 },
    { name: "", value: 0 },
    { name: "", value: 0 },
  ],
  notes: ``,
};
