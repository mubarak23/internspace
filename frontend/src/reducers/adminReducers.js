import {
  ADMIN_INTERSHIPS_REQUEST,
  ADMIN_INTERSHIPS_SUCCESS,
  ADMIN_INTERSHIPS_FAIL,
  ADMIN_INTERSHIPS_RESET,
  ADMIN_LOGIN_REQUEST,
  ADMIN_LOGIN_SUCCESS,
  ADMIN_LOGIN_FAIL,
  ADMIN_LOGOUT,
} from "../constants/adminConstants.js";

export const internshipListReducer = (state = { internships: [] }, action) => {
  switch (action.type) {
    case ADMIN_INTERSHIPS_REQUEST:
      return { loading: true };
    case ADMIN_INTERSHIPS_SUCCESS:
      return { loading: false, internships: action.payload };
    case ADMIN_INTERSHIPS_FAIL:
      return { loading: false, error: action.payload };
    case ADMIN_INTERSHIPS_RESET:
      return { internships: [] };
    default:
      return state;
  }
};

export const adminLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case ADMIN_LOGIN_REQUEST:
      return { loading: true };
    case ADMIN_LOGIN_SUCCESS:
      return { loading: false, adminInfo: action.payload };
    case ADMIN_LOGIN_FAIL:
      return { loading: false, error: "invalid email or password" };
    case ADMIN_LOGOUT:
      return {};
    default:
      return state;
  }
};
