import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import User from "../models/adminModel.js";
import Admin from "../models/adminModel.js";

const protect = asyncHandler(async (req, res, next) => {
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
      req.admin = await Admin.findById(decoded.id).select("-password");
      console.log(req.admin._id);
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

const admin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    //res.status(401);
    //throw new Error("Nott Authorized as Adminn");
    res.status(401);
    throw new Error("Not Authorized as Adminn");
  }
};

const iscompany = (req, res, next) => {
  if (req.admin && req.admin.isCompany) {
    next();
  } else {
    res.status(401);
    throw new Error("Not Authorized as Admin");
  }
};

export { protect, admin, iscompany };
