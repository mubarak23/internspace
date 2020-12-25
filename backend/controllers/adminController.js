import asyncHandler from "express-async-handler";
import Admin from "../models/adminModel.js";
import generateToken from "../utils/generateToken.js";

// @desc    Auth Admin & get token
// @route   POST /api/users/login
// @access  Public

const authAdmin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const admin = await Admin.findOne({ email });

  if (admin && (await admin.matchPassword(password))) {
    res.json({
      _id: admin._id,
      name: admin.name,
      email: admin.email,
      isAdmin: admin.isAdmin,
      token: generateToken(admin._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

// @desc    Register a new intern
// @route   POST /api/interns
// @access  Public
const registerAdmin = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const adminExist = await Admin.findOne({ email });
  if (adminExist) {
    res.status(400);
    throw new Error("An Admin with the provided email Address already exists");
  }
  const admin = await Admin.create({
    name,
    email,
    password,
  });
  if (admin) {
    res.status(201).json({
      _id: admin._id,
      email: admin.email,
      name: admin.name,
      token: generateToken(admin._id),
    });
  } else {
    res.status(400);
    throw new Error("invalid request");
  }
});

export { authAdmin, registerAdmin };
