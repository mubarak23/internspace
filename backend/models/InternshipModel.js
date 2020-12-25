import bcrypt from "bcryptjs";

const internshipSchema = mongoose.Schema({
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
  responsibility: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    required: true,
    default: false,
  },
});
