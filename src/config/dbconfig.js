import mongoose from "mongoose";
import { MONGODB_URL } from "./serverconfig.js";

export default async function connectDB() {
  try {
    await mongoose.connect(MONGODB_URL);
    console.log("MongoDB connected");
  } catch (error) {
    console.log("MongoDB connection error:", error.message);
    process.exit(1);
  }
}