import axois from "axios";
import {
  INTERN_LOGIN_REQUEST,
  INTERN_LOGIN_SUCCESS,
  INTERN_LOGIN_FAIL,
} from "../constants/internConstants";

export const intern_login = (email, password)
 => async (dispatch) =>{
    try {
      dispatch({ type: INTERN_LOGIN_REQUEST });
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
}
