import { tierColor, tierWidth } from "./helperFunctions";

export default function BaseStat({ title, stat, width }) {
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
  const statWidth = tierWidth(title, stat);

  return (
    <div className={"row-flex items-center"}>
      <div className="w-4/12 flex flex-row">
        <div className={"border w-1/4 m-1 rounded p-1 bg-purple-100"}>
          {title.toUpperCase()}
        </div>
        <div className={"border w-1/4 m-1 p-1 rounded"}>
          {forumlaStatMin(title, stat)}
        </div>
        <div className={"border w-1/4 m-1 p-1 rounded"}>
          {stat}
        </div>
        <div className={"border w-1/4 m-1 p-1 rounded"}>
          {forumlaStatMax(title, stat)}
        </div>
      </div>
      <div className={"w-8/12"}>
        <div className={` rounded-md h-full ${statColor} ${statWidth}`}>
        <span className="inline-block"></span>
        </div>
      </div>
    </div>
  );
}
