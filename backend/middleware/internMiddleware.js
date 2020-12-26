import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import Intern from "../models/internModel.js";

const internauth = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      //console.log(token);
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      //console.log(decoded);
      req.intern = await Intern.findById(decoded.id).select("-password");
      console.log(req.intern._id);
      //run a check tot ensure only admin with iscompany flag set to true can create internship;
      next();
    } catch (error) {
      console.log(error);
      res.status(401);
      throw new Error("No Authorized Token Failed");
    }
  }
  if (!token) {
    res.status(401);
    throw new Error("Not Authorized, No Token");
  }
});

export { internauth };
