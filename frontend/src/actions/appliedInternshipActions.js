import axios from "axios";
import {
  APPLIED_INTERSHIP_REQUEST,
  APPLIED_INTERSHIP_SUCCESS,
  APPLIED_INTERSHIP_FAIL,
  LIST_APPLIED_INTERSHIP_REQUEST,
  LIST_APPLIED_INTERSHIP_SUCCESS,
  LIST_APPLIED_INTERSHIP_FAIL,
} from "../constants/appliedInternshipConstant";

export const apply_for_internship = (id) => async (dispatch, getState) => {
  console.log("we reach this point");
  try {
    dispatch({
      type: APPLIED_INTERSHIP_REQUEST,
    });
    const {
      internLogin: { internInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${internInfo.token}`,
      },
    };
    const { data } = await axios.get(`/api/appliedInternship/${id}`, config);
    console.log("we reach this point");
    dispatch({
      type: APPLIED_INTERSHIP_SUCCESS,
      payload: data,
    });
  } catch (err) {
    console.log("Error from authorization"); //76649
  }
};

export const adminInternshipList = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: APPLIED_INTERSHIP_REQUEST,
    });
    const {
      internLogin: { internInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${internInfo.token}`,
      },
    };
    const { data } = await axios.get(`/api/appliedInternship/${id}`, config);
    dispatch({
      type: APPLIED_INTERSHIP_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const {
      internLogin: { internInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${internInfo.token}`,
      },
    };
    const { data } = await axios.get(`/api/appliedInternship/${id}`, config);
    console.log("error");
    console.log(data);
  }
};

export const appliedInternshipList = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: LIST_APPLIED_INTERSHIP_REQUEST,
    });
    const {
      internLogin: { internInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${internInfo.token}`,
      },
    };
    const { data } = await axios.get("/api/internships", config);
    dispatch({
      type: LIST_APPLIED_INTERSHIP_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log("error");
  }
};
