import mongoose from "mongoose";
import bcrypt from "bcryptjs";
const internSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },
  phone_number: {
    type: String,
  },
  address: {
    type: String,
  },
  cv_upload: {
    type: String,
  },
});

internSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};
internSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const Intern = mongoose.model("Intern", internSchema);

export default Intern;
