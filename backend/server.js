import express from "express";
import color from "colors";
import connectedDB from "./config/db.js";
import bodyParser from "body-parser";
//import products from "./data/products.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
//import notFound from "./middleware/errorMiddleware.js";
//import errorHandler from "./middleware/errorMiddleware.js";
//import productRouter from "./routes/productRoutes.js";
import productRoute from "./routes/productroute.js";
import userRouter from "./routes/userRoutes.js";
import orderRouter from "./routes/orderRoutes.js";
import dotenv from "dotenv";

dotenv.config();

connectedDB();

const app = express();
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Api is runnung...");
});

app.post("/api", (req, res) => {
  res.json(req.body);
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
app.use("/api/orders", orderRouter);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server Runnig in ${process.env.NODE_ENV} mode  on Port ${PORT}`.yellow.bold
  )
);
