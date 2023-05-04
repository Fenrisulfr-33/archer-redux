  /**
   * HP - (255) 36 - 72 - 108 - 144 - 180 - 216 - 252 - 255
   * 
   * 255/12 21.25
   * Ex: 45 
   * tiers 1 2 3 4 5 6
   * 
   *
   * ATK - 180) 25 - 50 - 75 - 100 - 125 - 150 - 175 - 180
   * SPATK - (180) 25 - 50 - 75 - 100 - 125 - 150 - 175 - 180
   *
   * DEF - (230) 32 - 64 - 96 - 128 - 160 - 192 - 224 - 230
   * SPDEF - (230) 32 - 64 - 96 - 128 - 160 - 192 - 224 - 230
   *
   * SPD - (200) 28 - 56 - 84 - 112 - 140 - 168 - 196 - 200
   * TOTAL - (720)
   */
export const tierColor = (title, stat) => {
  let tierColor = '';
  const tier = {
    one: "bg-green-600",
    two: "bg-green-400",
    three: "bg-green-300",
    four: "bg-sky-500",
    five: "bg-sky-300",
    six: "bg-purple-200",
    seven: "bg-purple-50",
    seven: "bg-black",
  };

  if (title === 'hp'){
    if (stat > 0){ tierColor = tier.one };
    if (stat > 36){ tierColor = tier.two };
    if (stat > 72){ tierColor = tier.three };
    if (stat > 108){ tierColor = tier.four };
    if (stat > 144){ tierColor = tier.five };
    if (stat > 180){ tierColor = tier.six };
    if (stat > 216){ tierColor = tier.seven };
    if (stat > 255){ tierColor = tier.eight };
  } else if (title === 'atk' || title === 'spatk'){
    if (stat > 0){ tierColor = tier.one };
    if (stat > 25){ tierColor = tier.two };
    if (stat > 50){ tierColor = tier.three };
    if (stat > 75){ tierColor = tier.four };
    if (stat > 100){ tierColor = tier.five };
    if (stat > 125){ tierColor = tier.six };
    if (stat > 150){ tierColor = tier.seven };
    if (stat > 175){ tierColor = tier.eight };
  } else if (title === 'def' || title === 'spdef'){
    if (stat > 0){ tierColor = tier.one };
    if (stat > 32){ tierColor = tier.two };
    if (stat > 64){ tierColor = tier.three };
    if (stat > 96){ tierColor = tier.four };
    if (stat > 128){ tierColor = tier.five };
    if (stat > 160){ tierColor = tier.six };
    if (stat > 192){ tierColor = tier.seven };
    if (stat > 224){ tierColor = tier.eight };
  } else if (title === 'spd'){
    if (stat > 0){ tierColor = tier.one };
    if (stat > 28){ tierColor = tier.two };
    if (stat > 56){ tierColor = tier.three };
    if (stat > 84){ tierColor = tier.four };
    if (stat > 112){ tierColor = tier.five };
    if (stat > 140){ tierColor = tier.six };
    if (stat > 168){ tierColor = tier.seven };
    if (stat > 196){ tierColor = tier.eight };
  }
  return tierColor;
} 
export const statWidth = (title) => {
if (title === "hp") {
  return `w-16%`;
} else if (title === "atk" || title === "spatk") {
  return `w-16%`;
} else if (title === "def" || title === "spdef") {
  return `w-16%`;
} else if (title === "spd") {
  return `w-16%`;
}
}