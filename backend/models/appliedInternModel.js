import mongoose from "mongoose";

const appliedinternshipSchema = mongoose.Schema({
  internship: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Internship",
  },
  intern: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Intern",
  },
  applied_date: {
    type: Date,
    default: Date.now,
  },
  title: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    required: true,
    default: false,
  },
});

const Appliedinternship = mongoose.model(
  "Appliedinternship",
  appliedinternshipSchema
);

export default Appliedinternship;
