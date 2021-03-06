import asyncHandler from "express-async-handler";
import Internship from "../models/InternshipModel.js";
import { findInternById, findInternshipById } from "../utils/helpers.js";
import { validateInnternship } from "../utils/validate.js";

// @desc    fetch internship opening
// @route   GET /api/internship
// @access  public
const getInternships = asyncHandler(async (req, res) => {
  const internships = await Internship.find().populate("admin", "name -_id");
  res.json(internships);
});

// @desc    add internship opening
// @route   POST /api/internship
// @access  private -- protect and iscompany middleware
const addInternship = asyncHandler(async (req, res) => {
  const { error } = validateInnternship(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  const {
    title,
    description,
    requirement,
    responsibilities,
    duration,
  } = req.body;
  const internship = await Internship.create({
    admin: req.admin._id,
    title,
    description,
    requirement,
    responsibilities,
    duration,
  });
  if (internship) {
    res.status(201).json(internship);
  } else {
    res.status(400);
    throw new Error("invalid request");
  }
});

// @desc    update internhip opening status
// @route   POST /api/internship/:id
// @access  private
const updateInternshipStatus = asyncHandler(async (req, res) => {
  //find the inter using the params provides
  const internship = await findInternshipById(req.param.id);
  //run a chewck tto ensure admin that create the internship is the one updating the status
  if (internship.user !== req.admin._id) {
    res.status(400);
    throw new Error("Unauthorized Request");
  }
  //update the status and resturn the right response
  internship.status = false;
  const updatestatus = await internship.save();
  res.status(200).json(internship);
});

// @desc    Update a internship
// @route   PUT /api/interhsip/:id
// @access  Private/ admin and iscompany middleware

const updateInternship = asyncHandler(async (req, res) => {
  const {
    title,
    description,
    requirement,
    responsibilities,
    duration,
  } = req.body;
  const internship = await findInternshipById(req.params.id);
  if (internship) {
    internship.name = name;
    internship.requirement = requirement;
    internship.description = description;
    internship.responsibilities = responsibilities;
    internship.duration = duration;

    const updateInternship = await internship.save();
    res.json(updateInternship);
  } else {
    res.status(404);
    throw new Error("Internship not found");
  }
});

// @desc     single internship
// @route   GET /api/interhsip/:id
// @access  Public

const singleInternshipById = asyncHandler(async (req, res) => {
  const internship = await findInternshipById(req.params.id)
    .populate("admin", "name -_id")
    .select("description title duration responsibilities requirement name ");
  if (internship) {
    res.status(200).json(internship);
  } else {
    res.status(404);
    throw new Error("Internship not found");
  }
});

export {
  getInternships,
  addInternship,
  updateInternshipStatus,
  updateInternship,
  singleInternshipById,
};
