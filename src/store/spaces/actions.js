// src/store/spaces/actions.js
import { apiUrl } from "../../config/constants";
import axios from "axios";

export function startLoading() {
  return {
    type: "spaces/startLoading",
  };
}

export function spacesFetched(spaces) {
  return {
    type: "spaces/spacesFetched",
    payload: spaces,
  };
}

export const getAllSpaces = () => async (dispatch, getState) => {
  try {
    dispatch(startLoading());

    const res = await axios.get(`${apiUrl}/spaces`);
    console.log(res);

    const allSpaces = res;

    dispatch(spacesFetched(allSpaces));
  } catch (e) {
    console.log(e.message);
  }
};
