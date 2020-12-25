import asyncHandler from "express-async-handler";
import Intern from "../models/internModel.js";
import Internship from "../models/InternshipModel.js";
import generateToken from "../utils/generateToken.js";
import { Validator } from "node-input-validator";

// @desc    Auth intern & get token
// @route   POST /api/users/login
// @access  Public

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const intern = await Intern.findOne({ email });

  if (intern && (await intern.matchPassword(password))) {
    res.json({
      _id: intern._id,
      email: intern.email,
      name: intern.name,
      token: generateToken(intern._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

// @desc    Register a new intern
// @route   POST /api/interns
// @access  Public
const registerIntern = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const internExist = await Intern.findOne({ email });
  if (internExist) {
    res.status(400);
    throw new Error("An Intern with the provided email Address already exists");
  }
  const intern = await Intern.create({
    name,
    email,
    password,
  });
  if (intern) {
    res.status(201).json({
      _id: intern._id,
      email: intern.email,
      name: intern.name,
      token: generateToken(intern._id),
    });
  } else {
    res.status(400);
    throw new Error("invalid request");
  }
});

export { authUser, registerIntern };
