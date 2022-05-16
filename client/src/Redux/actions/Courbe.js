import axios from "axios";
import { GET_DATE, GET_PRICE, FAIL_GET } from "../constants/Courbe";

export const getPrice = () => async (dispatch) => {
  try {
    let result = await axios.get("/api/dashboard/prix");
    const data = result.data;
    dispatch({ type: GET_PRICE, payload: data });
  } catch (error) {
    dispatch({ type: FAIL_GET, payload: error.response });
  }
};
export const getDate = () => async (dispatch) => {
  try {
    let result = await axios.get("/api/dashboard/date");
    const data = result.data;
    dispatch({ type: GET_DATE, payload: data }); //{msg , user}
  } catch (error) {
    dispatch({ type: FAIL_GET, payload: error.response });
  }
};
