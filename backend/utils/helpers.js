import Admin from "../models/adminModel.js";
import Intern from "../models/internModel.js";
import Internship from "../models/InternshipModel.js";

const findAdminByEmail = (email) => {
  return Admin.findOne({ email });
};

const findInternByEmail = (email) => {
  return Intern.findOne({ email });
};

const findInternshipById = (id) => {
  return Internship.findById(id);
};

const findInternById = (id) => {
  return Intern.findById(id);
};

export {
  findAdminByEmail,
  findInternByEmail,
  findInternshipById,
  findInternById,
};
