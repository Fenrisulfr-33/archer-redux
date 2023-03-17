import { statWidth } from "./helpFunctions";

export default function BaseStat({ title, stat }) {
    // const checkStyle = Math.ceil((stat/2));
    let style = statWidth(stat)
  
    // Generation 3 onwards
    const hpFormula = (baseStat, IV, EV, level) => {
        return Math.floor(( ( ( (2 * baseStat) + IV +  (EV/4)) * level ) / 100) + level + 10);
    }
    const otherStat = (baseStat, IV, EV, level, nature) => {
        return Math.floor(( ( ( ((2 * baseStat) + IV + (EV/4)) * level) / 100 ) + 5 ) * nature);
    }   
    const forumlaStatMax = (title, stat) => {
        if (title === 'hp') {
            return hpFormula(stat, 31, 252, 100);
        } else {
            return otherStat(stat, 31, 252, 100, 1.1);
        }
    }
    const forumlaStatMin = (title, stat) => {
        if (title === 'hp') {
            return hpFormula(stat, 0, 0, 100);
        } else {
            return otherStat(stat, 0, 0, 100, 0.9);
        }
    }

  return (
    <div className={'row-flex justify-between'}>
      <div className="text-xxs phone:text-xs">
        <span className={'row-flex space-x-1'}>
            <div className={'label-purple px-1 phone:px-2 '}>
                {title.toUpperCase()}: {stat}
            </div>
            <div className={'hidden phone:flex px-2 label gray-border'}>
                Max: {forumlaStatMax(title, stat)}
            </div>
            <div className={'hidden phone:flex px-2 label gray-border'}>
                Min: {forumlaStatMin(title, stat)}
            </div>
        </span>
      </div>
      <div className={`mx-1 my-1.5 ${style} rounded-md`}></div>
    </div>
  );
}