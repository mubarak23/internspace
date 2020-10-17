import express from "express";
import color from "colors";
import connectedDB from "./config/db.js";
//import products from "./data/products.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
//import notFound from "./middleware/errorMiddleware.js";
//import errorHandler from "./middleware/errorMiddleware.js";
//import productRouter from "./routes/productRoutes.js";
import productRoute from "./routes/productroute.js";
import userRouter from "./routes/userRoutes.js";
import dotenv from "dotenv";

dotenv.config();

connectedDB();

const app = express();

app.get("/", (req, res) => {
  res.send("Api is runnung...");
});

//app.get("/api/products", (req, res) => {
//res.json(products);
//});

//app.get("/api/products/:id", (req, res) => {
//const product = products.find((p) => p._id === req.params.id);
//res.json(product);
//});
//app.use(notFound);
app.use(errorHandler);
app.use("/api/products", productRoute);
app.use("/api/users", userRouter);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server Runnig in ${process.env.NODE_ENV} mode  on Port ${PORT}`.yellow.bold
  )
);
