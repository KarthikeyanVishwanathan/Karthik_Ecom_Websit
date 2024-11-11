import express from "express";
//import products from "./data/products.js";
import cors from "cors";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import { notFound, errorHandler } from "./middleware/ErrorMiddleware.js";
import cookieParser from "cookie-parser";
import cartRoutes from "./routes/cartRoutes.js";

const app = express();
// app.use(cors());
connectDB();

const port = 5000;

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Hello world");
});

// app.get("/api/products", (req, res) => {
//   res.json(products);
// });

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/cart", cartRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`App is listening to port ${port}`);
});
