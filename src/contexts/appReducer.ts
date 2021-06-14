import { SET_ASTEROID_DATA, SET_ERROR, CLOSE_MODAL } from "../actions/types";

export type AsteroidData = {
  name_limited: string;
  neo_reference_id: string;
  nasa_jpl_url: string;
  is_potentially_hazardous_asteroid: boolean;
  estimated_diameter: {
    kilometers: {
      estimated_diameter_min: number;
    }
  }
}

export type State = {
  asteroidData: AsteroidData;
  showModal: boolean;
  errorMessage: string;
}

export type Action = {
  type: string;
  payload: any;
  success?: boolean;
}

export const initState: State = {
  asteroidData: {
    name_limited: "",
    neo_reference_id: "",
    nasa_jpl_url: "",
    is_potentially_hazardous_asteroid: false,
    estimated_diameter: {
      kilometers: {
        estimated_diameter_min: 0
      }
    }
  },
  showModal: false,
  errorMessage: ""
}

export const reducer = (state = initState, action: Action): State => {
  switch(action.type){
    case SET_ASTEROID_DATA:
      return {
        ...state,
        asteroidData: action.payload
      };
    case SET_ERROR:
      return {
        ...state,
        showModal: true,
        errorMessage: action.payload
      };
    case CLOSE_MODAL:
      return {
        ...state,
        showModal: false,
        errorMessage: ""
      };
    default:
      return state;
  }
}