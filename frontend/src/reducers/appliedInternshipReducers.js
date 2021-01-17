import {
  APPLIED_INTERSHIP_REQUEST,
  APPLIED_INTERSHIP_SUCCESS,
  APPLIED_INTERSHIP_FAIL,
  LIST_APPLIED_INTERSHIP_REQUEST,
  LIST_APPLIED_INTERSHIP_SUCCESS,
  LIST_APPLIED_INTERSHIP_FAIL,
} from "../constants/appliedInternshipConstant";

//appliedInternship

export const ApplyInternshipReducer = (
  state = { appliedInternships: [] },
  action
) => {
  switch (action.type) {
    case APPLIED_INTERSHIP_REQUEST:
      return { loading: true };
    case APPLIED_INTERSHIP_SUCCESS:
      return { loading: false, appliedInternships: action.payload };
    case APPLIED_INTERSHIP_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const appliedinternshipListReducer = (
  state = { appliedinternships: [] },
  action
) => {
  switch (action.type) {
    case LIST_APPLIED_INTERSHIP_REQUEST:
      return { loading: true };
    case LIST_APPLIED_INTERSHIP_SUCCESS:
      return { loading: false, appliedinternships: action.payload };
    case LIST_APPLIED_INTERSHIP_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
