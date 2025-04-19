"use server";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const uri = process.env.DB_URI;

if (!uri) {
  throw new Error(
    "Please define the DB_URI environment variable inside .env.local"
  );
}

const connectDB = async () => {
  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(uri);
    console.log("MongoDB Connected");
  }
};

// Schema
const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      unique: true,
    },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: ["student", "instructor", "admin"],
      default: "student",
      required: true,
    },
    image: { type: String, default: "" }, // Ensure image has a default
    instructorStatus: { type: String, default: "" }, // Ensure image has a default
    banStatus: { type: Boolean, default: false }, // Ensure image has a default
    failed_attempts: { type: Number, default: 0 },
    lockout_time: { type: Date, default: null }
  },
  { timestamps: true }
);

const User = mongoose.models?.User || mongoose.model("User", userSchema);

async function getDatabase() {
  await connectDB();
  return User;
}

export default getDatabase;