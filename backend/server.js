import express from "express";
import path from "path";
import color from "colors";
import connectedDB from "./config/db.js";
import bodyParser from "body-parser";
import morgan from "morgan";
//import products from "./data/products.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import adminRouter from "./routes/adminRoute.js";
import internRouter from "./routes/internRoutes.js";
import intternshipRouter from "./routes/internshipRoute.js";
import appliedInternshipRouter from "./routes/appliedinternRoutes.js";
import uploadRouter from "./routes/uploadRoutes.js";
import dotenv from "dotenv";

//import { ppid } from "process";

dotenv.config();

connectedDB();

const app = express();

if (process.env.NODE_ENV === "dev") {
  app.use(morgan("dev"));
}

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));

//app.get("/api/products", (req, res) => {
//res.json(products);
//});

//app.get("/api/products/:id", (req, res) => {
//const product = products.find((p) => p._id === req.params.id);
//res.json(product);
//});
//app.use(notFound);
app.use(errorHandler);
//app.use("/api/products", productRoute);
app.use("/api/admin", adminRouter);
app.use("/api/interns", internRouter);
app.use("/api/internship", intternshipRouter);
app.use("/api/appliedInternship", appliedInternshipRouter);
app.use("/api/upload", uploadRouter);

//allow us t orender folder in node with module syntex
const __dirname = path.resolve();
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running....");
  });
}

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server Runnig in ${process.env.NODE_ENV} mode  on Port ${PORT}`.yellow.bold
  )
);
