import asyncHandler from "express-async-handler";
import Appliedinternship from "../models/appliedInternModel.js";
import Internship from "../models/InternshipModel.js";
import { findInternshipById } from "../utils/helpers.js";

// @desc    apply for internship
// @route   POST /api/appliedinternship
// @access  private -- protect
const appliedForIntership = asyncHandler(async (req, res) => {
  const internship = await Internship.findById(req.params.id);
  console.log("we reach this point");
  if (internship) {
    const appliedInternship = await Appliedinternship.create({
      internship: internship._id,
      intern: req.intern._id,
      title: internship.title,
      applied_date: new Date().toISOString().slice(0, 10),
    });
    if (appliedInternship) {
      res.status(201).json(appliedInternship);
    } else {
      res.status(400);
      throw new Error("invalid request");
    }
  } else {
    res.status(404);
    throw new Error("Internship not found");
  }
});

// @desc    apply for internship
// @route   POST /api/appliedinternship
// @access  private -- protect

const listofappliedInternship = asyncHandler(async (req, res) => {
  const appliedinternshiplists = await Appliedinternship.find({
    intern: req.intern._id,
  });
  if (appliedinternshiplists) {
    res.status(200).json(appliedinternshiplists);
  } else {
    res.status(400);
    throw new Error("invalid request");
  }
});

export { appliedForIntership, listofappliedInternship };
