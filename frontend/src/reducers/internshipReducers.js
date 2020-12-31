import {
  CREATE_INTERNSHIP_REQUEST,
  CREATE_INTERNSHIP_SUCCESS,
  CREATE_INTERNSHIP_FAIL,
} from "../constants/internnshipConstant.js";

export const createInternshipReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_INTERNSHIP_REQUEST:
      return { loading: true };
    case CREATE_INTERNSHIP_SUCCESS:
      return { loading: false, success: true, internship: action.payload };
    case CREATE_INTERNSHIP_FAIL:
      return { loading: false, error: action.payload };
    case CREATE_INTERNSHIP_RESET:
      return {};
    default:
      return state;
  }
};
