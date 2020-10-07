import mongoose from "mongoose";

const userShema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: ttrue,
  },
  password: {
    type: Sttring,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    required: true,
    default: false,
  },
});

const User = mongoose.model("User", userShema);

export default User;
