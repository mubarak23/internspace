import mongoose from "mongoose";

const internshipSchema = mongoose.Schema({
  admin: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Admin",
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  requirement: {
    type: String,
    required: true,
  },
  responsibilities: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  //false -- closed, true -- open
  status: {
    type: Boolean,
    required: true,
    default: true,
  },
});

const Internship = mongoose.model("Internship", internshipSchema);

export default Internship;
