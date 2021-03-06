import axios from "axios";
import {
  ADMIN_INTERSHIPS_REQUEST,
  ADMIN_INTERSHIPS_SUCCESS,
  ADMIN_LOGIN_REQUEST,
  ADMIN_LOGIN_SUCCESS,
  ADMIN_LOGIN_FAIL,
} from "../constants/adminConstants.js";

export const adminInternshipList = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: ADMIN_INTERSHIPS_REQUEST,
    });
    const {
      adminLogin: { adminInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${adminInfo.token}`,
      },
    };
    const { data } = await axios.get("/api/internships", config);
    dispatch({
      type: ADMIN_INTERSHIPS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log("error");
  }
};

export const adminlogin = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: ADMIN_LOGIN_REQUEST });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(
      "/api/admin/login",
      { email, password },
      config
    );
    dispatch({
      type: ADMIN_LOGIN_SUCCESS,
      payload: data,
    });
    localStorage.setItem("adminInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: ADMIN_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response.message,
    });
  }
};
