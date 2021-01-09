import axios from "axios";
import {
  APPLIED_INTERSHIP_REQUEST,
  APPLIED_INTERSHIP_SUCCESS,
  APPLIED_INTERSHIP_FAIL,
} from "../constants/appliedInternshipConstant";

export const apply_for_internship = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: APPLIED_INTERSHIP_REQUEST,
    });
    const {
      adminLogin: { adminInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${adminInfo.token}`,
      },
    };
    const { data } = axios.get(`/api/appliiedInternship/${id}`, config);
    dispatch({
      type: APPLIED_INTERSHIP_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: APPLIED_INTERSHIP_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response.message,
    });
  }
};
