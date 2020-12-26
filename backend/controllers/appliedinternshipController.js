import asyncHandler from "express-async-handler";
import Appliedinternship from "../models/appliedInternModel.js";
import Internship from "../models/InternshipModel.js";

// @desc    apply for internship
// @route   POST /api/appliedinternship
// @access  private -- protect
const appliedForIntership = asyncHandler(async (req, res) => {
  const { applied_date, title } = req.body;
  const internship = Internship.findById(req.params.id);
  if (internship) {
    const appliedInternship = await Appliedinternship.create({
      internship: internship._id,
      intern: req.intern._id,
      title: internship.title,
      applied_date: "12-26-2020",
    });
    if (appliedForIntership) {
      res.status(201).json(appliedForIntership);
    } else {
      res.status(400);
      throw new Error("invalid request");
    }
  } else {
    res.status(404);
    throw new Error("Internship not found");
  }
});

export { appliedForIntership };
