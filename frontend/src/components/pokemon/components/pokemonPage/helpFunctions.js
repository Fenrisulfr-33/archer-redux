export const statWidth = (stat) => {
  const statDivded = Math.ceil(Number(stat) / 2);
  let style = "";
  const tier = {
    one: "bg-green-600 ",
    two: "bg-green-400 ",
    three: "bg-green-300 ",
    four: "bg-sky-500 ",
    five: "bg-sky-300 ",
    six: "bg-purp-200 ",
    seven: "bg-purp-50 ",
  };

  switch (statDivded) {
    case 83:
      style = tier.four + "w-42 phone:w-83";
      break;
    case 82:
      style = tier.four + "w-41 phone:w-82";
      break;
    case 81:
      style = tier.four + "w-41 phone:w-81";
      break;
    case 80:
      style = tier.four + "w-40 phone:w-80";
      break;
    case 79:
      style = tier.four + "w-40 phone:w-79";
      break;
    case 78:
      style = tier.four + "w-39 phone:w-78";
      break;
    case 77:
      style = tier.four + "w-39 phone:w-77";
      break;
    case 76:
      style = tier.four + "w-38 phone:w-76";
      break;
    case 75:
      style = tier.four + "w-38 phone:w-75";
      break;
    case 74:
      style = tier.four + "w-37 phone:w-74";
      break;
    case 73:
      style = tier.four + "w-37 phone:w-73";
      break;
    case 72:
      style = tier.four + "w-36 phone:w-72";
      break;
    case 71:
      style = tier.four + "w-36 phone:w-71";
      break;
    case 70:
      style = tier.four + "w-35 phone:w-70";
      break;
    case 69:
      style = tier.four + "w-35 phone:w-69";
      break;
    case 68:
      style = tier.four + "w-34 phone:w-68";
      break;
    case 67:
      style = tier.four + "w-34 phone:w-67";
      break;
    case 66:
      style = tier.four + "w-33 phone:w-66";
      break;
    case 65:
      style = tier.four + "w-33 phone:w-65";
      break;
    case 64:
      style = tier.four + "w-32 phone:w-64";
      break;
    case 63:
      style = tier.three + "w-32 phone:w-63";
      break;
    case 62:
      style = tier.three + "w-31 phone:w-62";
      break;
    case 61:
      style = tier.three + "w-31 phone:w-61";
      break;
    case 60:
      style = tier.three + "w-30 phone:w-60";
      break;
    case 59:
      style = tier.three + "w-30 phone:w-59";
      break;
    case 58:
      style = tier.three + "w-29 phone:w-58";
      break;
    case 57:
      style = tier.three + "w-29 phone:w-57";
      break;
    case 56:
      style = tier.three + "w-28 phone:w-56";
      break;
    case 55:
      style = tier.three + "w-28 phone:w-55";
      break;
    case 54:
      style = tier.three + "w-27 phone:w-54";
      break;
    case 53:
      style = tier.three + "w-27 phone:w-53";
      break;
    case 52:
      style = tier.three + "w-26 phone:w-52";
      break;
    case 51:
      style = tier.three + "w-26 phone:w-51";
      break;
    case 50:
      style = tier.three + "w-25 phone:w-50";
      break;
    case 49:
      style = tier.three + "w-25 phone:w-49";
      break;
    case 48:
      style = tier.three + "w-24 phone:w-48";
      break;
    case 47:
      style = tier.three + "w-24 phone:w-47";
      break;
    case 46:
      style = tier.three + "w-23 phone:w-46";
      break;
    case 45:
      style = tier.three + "w-23 phone:w-45";
      break;
    case 44:
      style = tier.three + "w-22 phone:w-44";
      break;
    case 43:
      style = tier.three + "w-22 phone:w-43";
      break;
    case 42:
      style = tier.two + "w-21 phone:w-42";
      break;
    case 41:
      style = tier.two + "w-21 phone:w-41";
      break;
    case 40:
      style = tier.two + "w-20 phone:w-40";
      break;
    case 39:
      style = tier.two + "w-20 phone:w-39";
      break;
    case 38:
      style = tier.two + "w-19 phone:w-38";
    case 37:
      style = tier.two + "w-19 phone:w-37";
      break;
    case 36:
      style = tier.two + "w-18 phone:w-36";
      break;
    case 35:
      style = tier.two + "w-18 phone:w-35";
      break;
    case 34:
      style = tier.two + "w-17 phone:w-34";
      break;
    case 33:
      style = tier.two + "w-17 phone:w-33";
    case 32:
      style = tier.two + "w-16 phone:w-32";
      break;
    case 31:
      style = tier.two + "w-16 phone:w-31";
      break;
    case 30:
      style = tier.two + "w-15 phone:w-30";
      break;
    case 29:
      style = tier.two + "w-15 phone:w-29";
      break;
    case 28:
      style = tier.two + "w-14 phone:w-28";
    case 27:
      style = tier.two + "w-14 phone:w-27";
      break;
    case 26:
      style = tier.two + "w-13 phone:w-26";
      break;
    case 25:
      style = tier.two + "w-13 phone:w-25";
      break;
    case 24:
      style = tier.two + "w-12 phone:w-24";
      break;
    case 23:
      style = tier.two + "w-12 phone:w-23";
      break;
    case 22:
      style = tier.two + "w-11 phone:w-22";
      break;
    case 21:
      style = tier.one + "w-11 phone:w-21";
      break;
    case 20:
      style = tier.one + "w-10 phone:w-20";
      break;
    case 19:
      style = tier.one + "w-10 phone:w-19";
      break;
    case 18:
      style = tier.one + "w-9 phone:w-18";
      break;
    case 17:
      style = tier.one + "w-9 phone:w-17";
      break;
    case 16:
      style = tier.one + "w-8 phone:w-16";
      break;
    case 15:
      style = tier.one + "w-8 phone:w-15";
      break;
    case 14:
      style = tier.one + "w-7 phone:w-14";
      break;
    case 13:
      style = tier.one + "w-7 phone:w-13";
      break;
    case 12:
      style = tier.one + "w-6 phone:w-12";
      break;
    case 11:
      style = tier.one + "w-6 phone:w-11";
      break;
    case 10:
      style = tier.one + "w-5 phone:w-10";
      break;
    case 9:
      style = tier.one + "w-5 phone:w-9";
      break;
    case 8:
      style = tier.one + "w-4 phone:w-8";
      break;
    case 7:
      style = tier.one + "w-4 phone:w-7";
      break;
    case 6:
      style = tier.one + "w-3 phone:w-6";
      break;
    case 5:
      style = tier.one + "w-3 phone:w-5";
      break;
    case 4:
      style = tier.one + "w-2 phone:w-4";
      break;
    case 3:
      style = tier.one + "w-2 phone:w-3";
      break;
    case 2:
      style = tier.one + "w-1 phone:w-2";
      break;
    case 1:
      style = tier.one + "w-1 phone:w-1";
      break;
    default:
      0;
  }
  return style;
};
