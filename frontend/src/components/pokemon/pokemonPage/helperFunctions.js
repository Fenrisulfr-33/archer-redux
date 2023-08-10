/**
 * HP - (255) 36 - 72 - 108 - 144 - 180 - 216 - 252 - 255
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
    if (stat > 42.5){ tierColor = tier.two };
    if (stat > 85){ tierColor = tier.three };
    if (stat > 127.5){ tierColor = tier.four };
    if (stat > 170){ tierColor = tier.five };
    if (stat > 212.5){ tierColor = tier.six };
  } else if (title === 'atk' || title === 'spatk'){
    if (stat > 0){ tierColor = tier.one };
    if (stat > 30){ tierColor = tier.two };
    if (stat > 60){ tierColor = tier.three };
    if (stat > 90){ tierColor = tier.four };
    if (stat > 120){ tierColor = tier.five };
    if (stat > 150){ tierColor = tier.six };
  } else if (title === 'def' || title === 'spdef'){
    if (stat > 0){ tierColor = tier.one };
    if (stat > 38.3){ tierColor = tier.two };
    if (stat > 76.6){ tierColor = tier.three };
    if (stat > 114.9){ tierColor = tier.four };
    if (stat > 153.2){ tierColor = tier.five };
    if (stat > 191.5){ tierColor = tier.six };
  } else if (title === 'spd'){
    if (stat > 0){ tierColor = tier.one };
    if (stat > 33.3){ tierColor = tier.two };
    if (stat > 66.6){ tierColor = tier.three };
    if (stat > 99.9){ tierColor = tier.four };
    if (stat > 133.2){ tierColor = tier.five };
    if (stat > 166.5){ tierColor = tier.six };
  }
  return tierColor;
} 


export const tierWidth = (title, stat) => {
  if (title === "hp") {
    const statRounded = Math.round([stat*100]/255);
    return statWidth(statRounded);
  } else if (title === "atk" || title === "spatk") {
    const statRounded = Math.round([stat*100]/180);
    return statWidth(statRounded);
  } else if (title === "def" || title === "spdef") {
    const statRounded = Math.round([stat*100]/230);
    return statWidth(statRounded);
  } else if (title === "spd") {
    const statRounded = Math.round([stat*100]/200);
    return statWidth(statRounded);
  }
}

export const statWidth = (width) => {
  let returnWidth = '';
  
  if (width === 0){
    returnWidth = 'w-[1px]'
  } else if (width <= 9){
    returnWidth = 'w-1/8';
  } else if(width <= 17){
    returnWidth = 'w-2/12';
  } else if(width <= 20){
    returnWidth = 'w-1/5';
  } else if(width <= 25){
    returnWidth = 'w-1/4';
  } else if(width <= 34){
    returnWidth = 'w-1/3';
  } else if(width <= 40){
    returnWidth = 'w-2/5';
  } else if(width <= 50){
    returnWidth = 'w-1/2';
  } else if(width <= 59){
    returnWidth = 'w-7/12';
  } else if(width <= 67){
    returnWidth = 'w-4/6';
  } else if(width <= 75){
    returnWidth = 'w-3/4';
  } else if(width <= 84){
    returnWidth = 'w-5/6';
  } else if(width < 17){
    returnWidth = 'w-2/12';
  } else if(width <= 91){
    returnWidth = 'w-11/12';
  } else if(width <= 100){
    returnWidth = 'w-full';
  }
  return returnWidth;
}