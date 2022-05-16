const {
  GET_DATE,
  GET_PRICE,
  GET_LOAD,
  FAIL_GET,
} = require("../constants/Courbe");

// initialstate
const initialState = {
  prix: [],
  date: [],
  isAuth: false,
  load: false,
};

// pure function=> (state, {type,payload})=>
const CourbeReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_LOAD:
      return { ...state, load: true };

    case FAIL_GET:
      return { ...state, errors: payload, load: false };
    case GET_DATE:
      return { ...state, date: payload, isAuth: true };
    case GET_PRICE:
      return { ...state, prix: payload, isAuth: true };
    case "VIDE_ERRORS":
      return { ...state, errors: [] };
    default:
      return state;
  }
};

export default CourbeReducer;
