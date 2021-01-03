import axios from "axios";
import {
  CREATE_INTERNSHIP_REQUEST,
  CREATE_INTERNSHIP_SUCCESS,
  CREATE_INTERNSHIP_FAIL,
  INTERNSHIPS_LIST_REQUEST,
  INTERNSHIPS_LIST_SUCCESS,
  INTERNSHIPS_LIST_FAIL,
  SINGLE_INTERNSHIP_REQUEST,
  SINGLE_INTERNSHIP_SUCCESS,
  SINGLE_INTERNSHIP_FAIL,
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

export const listinternships = () => async (dispatch) => {
  try {
    dispatch({ type: INTERNSHIPS_LIST_REQUEST });

    const { data } = await axios.get(`/api/internships`);

    dispatch({
      type: INTERNSHIPS_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: INTERNSHIPS_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response.message,
    });
  }
};

export const internshipDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: SINGLE_INTERNSHIP_REQUEST });

    const { data } = await axios.get(`/api/internships/${id}`);

    dispatch({
      type: SINGLE_INTERNSHIP_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: SINGLE_INTERNSHIP_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response.message,
    });
  }
};
