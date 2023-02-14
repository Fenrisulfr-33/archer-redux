import * as types from "./abilitiesActions";
import initialState from "../../initialState";

export default function abilitiesReducer(state = initialState.abilities, action) {
  switch (action.type) {
    case types.LOAD_ABILITIES_SUCCESS:
      return {
        ...state,
        list: action.abilities,
      };
    case types.LOAD_ABILITY_SUCCESS:
      return {
        ...state,
        ability: action.ability,
      };
    default:
      return state;
  }
}
