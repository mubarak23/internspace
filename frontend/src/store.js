import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import {
  userLoginReducer,
  userRegisterReducer,
  userDetailsReducer,
  userUpdateProfileReducer,
  usersListReducer,
  userdeleteReducer,
  userUpdateReducer,
} from "./reducers/userReducers.js";

import {
  internshipListReducer,
  adminLoginReducer,
} from "./reducers/adminReducers.js";

import {
  createInternshipReducer,
  internshipsListReducers,
} from "./reducers/internshipReducers";

const reducer = combineReducers({
  internshipList: internshipListReducer,
  internshipsListHome: internshipsListReducers,

  adminLogin: adminLoginReducer,

  createInternship: createInternshipReducer,

  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  userList: usersListReducer,
  userDelete: userdeleteReducer,
  userUpdate: userUpdateReducer,
});

const adminInfoFromStorage = localStorage.getItem("adminInfo")
  ? JSON.parse(localStorage.getItem("adminInfo"))
  : null;

const initialState = {
  adminLogin: { adminInfo: adminInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
