import express from "express";
import morgan from "morgan";
import { PORT } from "./config/serverconfig.js";
import apiRouter from "./routes/apiRoutes.js";
const app = express();

// middleware
app.use(morgan("dev"));
app.use(express.json());

// routes
app.get("/", (req, res) => {
  res.send("Welcome to Home Page");
});

app.get("/ping", (req, res) => {
  res.json({ message: "pong" });
});

app.get("/hello", (req, res) => {
  res.json({ message: "hello world" });
});

// tweets routes
app.use('/api' , apiRouter);

// 404 handler (keep last)
app.all("*", (req, res) => {
  res.status(404).json({ message: "Route not found" });
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
