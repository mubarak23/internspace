import {
  CREATE_INTERNSHIP_REQUEST,
  CREATE_INTERNSHIP_SUCCESS,
  CREATE_INTERNSHIP_FAIL,
  CREATE_INTERNSHIP_RESET,
  INTERNSHIPS_LIST_REQUEST,
  INTERNSHIPS_LIST_SUCCESS,
  INTERNSHIPS_LIST_FAIL,
  SINGLE_INTERNSHIP_FAIL,
  SINGLE_INTERNSHIP_SUCCESS,
  SINGLE_INTERNSHIP_REQUEST,
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

export const internshipsListReducers = (
  state = { internships: [] },
  action
) => {
  switch (action.type) {
    case INTERNSHIPS_LIST_REQUEST:
      return { loading: true, internships: {} };
    case INTERNSHIPS_LIST_SUCCESS:
      return {
        loading: false,
        internships: action.payload,
      };
    case INTERNSHIPS_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const internshipDetailsReducer = (
  state = { internship: {} },
  action
) => {
  switch (action.type) {
    case SINGLE_INTERNSHIP_REQUEST:
      return { loading: true, ...state };
    case SINGLE_INTERNSHIP_SUCCESS:
      return { loading: false, internship: action.payload };
    case SINGLE_INTERNSHIP_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
