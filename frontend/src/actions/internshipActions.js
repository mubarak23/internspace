import axios from "axios";
import {
  CREATE_INTERNSHIP_REQUEST,
  CREATE_INTERNSHIP_SUCCESS,
  CREATE_INTERNSHIP_FAIL,
} from "../constants/internnshipConstant.js";

export const crearteInternship = (internship) => async (dispatch, getState) => {
  try {
    dispatch({
      type: CREATE_INTERNSHIP_REQUEST,
    });
    const {
      adminLogin: { adminInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${adminInfo.token}`,
      },
    };
    const { data } = axios.post("/api/internships", internship, config);
    dispatch({
      type: CREATE_INTERNSHIP_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CREATE_INTERNSHIP_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response.message,
    });
  }
};
