"use server"
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); 

const uri = process.env.DB_URL;

if (!uri) {
  throw new Error("Please define the DB_URL environment variable inside .env.local");
}


const connectDB = async () => {
  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(uri,);
    console.log("MongoDB Connected");
  }
};

// Schema 
const userSchema = new mongoose.Schema({
  name: {type:String, required: true},
  email: {type:String, required: true},
  password:{type:String, required: true},
});

const User = mongoose.models?.User || mongoose.model("User", userSchema);

async function getDatabase() {
  await connectDB();
  return User;
}

export default getDatabase;
