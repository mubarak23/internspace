import {
  INTERN_LOGIN_REQUEST,
  INTERN_LOGIN_SUCCESS,
  INTERN_LOGIN_FAIL,
  INTERN_LOGOUT,
} from "../constants/internConstants";

export const internLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case INTERN_LOGIN_REQUEST:
      return { loading: true };
    case INTERN_LOGIN_SUCCESS:
      return { loading: false, internInfo: action.payload };
    case INTERN_LOGIN_FAIL:
      return { loading: false, error: "invalid email or password" };
    case INTERN_LOGOUT:
      return {};
    default:
      return state;
  }
};
