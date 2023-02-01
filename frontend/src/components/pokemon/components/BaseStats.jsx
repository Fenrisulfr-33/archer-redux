export const BaseStat = ({ title, stat }) => {
  let style;
  const tier = {
    one: "w-1/6 bg-purple-900",
    two: "w-1/3 bg-purple-400",
    three: "w-1/2 bg-indigo-500",
    four: "w-2/3 bg-blue-400",
    five: "w-4/5 bg-green-600",
    six: "w-full bg-green-200",
  };

  /**
   * Health stat
   *
   * This is held by Blissey at 255
   */
  if (title === "hp") {
    if (stat <= 42) {
      style = tier.one;
    } else if (stat > 42 && stat <= 85) {
      style = tier.two;
    } else if (stat > 85 && stat <= 127) {
      style = tier.three;
    } else if (stat > 127 && stat <= 170) {
      style = tier.four;
    } else if (stat > 170 && stat <= 212) {
      style = tier.five;
    } else if (stat > 212) {
      style = tier.six;
    }
  } 

  /**
   * Attack is 5 - 190
   * Sp Attack is 10 - 194
   *  Attack is held by Mega Mewtwo X @ 190
   *  SpAttack is held by Mega Mewtwo Y @ 194
   */
   else if (title === "atk" || title === "spatk") {
    if (stat <= 32) {
      style = tier.one;
    } else if (stat > 32 && stat <= 64) {
      style = tier.two;
    } else if (stat > 64 && stat <= 96) {
      style = tier.three;
    } else if (stat > 96 && stat <= 127) {
      style = tier.four;
    } else if (stat > 127 && stat <= 159) {
      style = tier.five;
    } else if (stat > 159) {
      style = tier.six;
    }
  } else if (title === "def" || title === "spdef") {

  /**
   * Defense stat is 5 - 250
   * Sp Defsne stat is 20 - 250
   *  Defense && SpDefense is held by Eternatus Eternamax @ 250
   */
    if (stat <= 41) {
      style = tier.one;
    } else if (stat > 41 && stat <= 83) {
      style = tier.two;
    } else if (stat > 83 && stat <= 125) {
      style = tier.three;
    } else if (stat > 125 && stat <= 166) {
      style = tier.four;
    } else if (stat > 166 && stat <= 208) {
      style = tier.five;
    } else if (stat > 208) {
      style = tier.six;
    }
  } else if (title === "spd") {

  /**
   * Speed stat 5 - 200
   *  Speed is held by Regieleki @ 200
   */
    if (stat <= 33) {
      style = tier.one;
    } else if (stat > 33 && stat <= 66) {
      style = tier.two;
    } else if (stat > 66 && stat <= 99) {
      style = tier.three;
    } else if (stat > 99 && stat <= 133) {
      style = tier.four;
    } else if (stat > 133 && stat <= 166) {
      style = tier.five;
    } else if (stat > 166) {
      style = tier.six;
    }
  }

  return (
    <div className="flex flex-row justify-between">
      <h4 className="font-extrabold text-left bg-gray-800 rounded-md text-purple-600 px-1 mb-1">
        {title.toUpperCase()}:{stat}
      </h4>
      <div className={`mx-1 my-1.5 ${style} rounded-md`}></div>
    </div>
  );
};
