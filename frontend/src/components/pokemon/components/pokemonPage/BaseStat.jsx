import { tierColor } from "./helperFunctions";

export default function BaseStat({ title, stat, width }) {
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
  // Generation 3 onwards
  const hpFormula = (baseStat, IV, EV, level) => {
    return Math.floor(
      ((2 * baseStat + IV + EV / 4) * level) / 100 + level + 10
    );
  };
  const otherStat = (baseStat, IV, EV, level, nature) => {
    return Math.floor(
      (((2 * baseStat + IV + EV / 4) * level) / 100 + 5) * nature
    );
  };
  const forumlaStatMax = (title, stat) => {
    if (title === "hp") {
      return hpFormula(stat, 31, 252, 100);
    } else {
      return otherStat(stat, 31, 252, 100, 1.1);
    }
  };
  const forumlaStatMin = (title, stat) => {
    if (title === "hp") {
      return hpFormula(stat, 0, 0, 100);
    } else {
      return otherStat(stat, 0, 0, 100, 0.9);
    }
  };
  const statColor = tierColor(title, stat);

  return (
    <div className={"row-flex justify-between items-center"}>
      <div className="text-xxs phone:text-xs w-2/12">
        <div className={"label-purp px-1"}>
          {title.toUpperCase()}
        </div>
      </div>
      <div className={"w-10/12 space-y-1"}>
        <div className={"row-flex"}>
          <div className={`border border-green-600 w-1/6`}></div>
          <div className={`border border-green-400 w-1/6`}></div>
          <div className={`border border-green-300 w-1/6`}></div>
          <div className={`border border-sky-500 w-1/6`}></div>
          <div className={`border border-sky-300 w-1/6`}></div>
          <div className={`border border-purple-200 w-1/6`}></div>
        </div>
        <div className={`rounded-md ${statColor} ${width}`}>
          {stat}
        </div>
      </div>
    </div>
  );
}
