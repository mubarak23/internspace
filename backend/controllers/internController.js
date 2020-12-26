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

// @desc    update intern profile
// @route   PUT /api/intern
// @access  private -- internauth
const updateinternProfile = asyncHandler(async (req, res) => {
  const { name, password, phone_number, address, cv_upload } = req.body;
  //check the intern match withe login intern
  if (req.intern._id !== req.params.id) {
    res.status(400);
    throw new Error("invalid request");
  }
  const intern = Internship.findById(req.params.id);
  if (intern) {
    intern.name = name;
    intern.password = password;
    intern.phone_number = phone_number;
    intern.cv_upload = cv_upload;
    intern.address = address;
    const updateInternProfile = await intern.save();
    res.json(updateInternProfile);
  } else {
    res.status(404);
    throw new Error("Internship not found");
  }
});

export { authUser, registerIntern, updateinternProfile };
