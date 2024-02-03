import mongoose from "mongoose";
//let MONGODB_URI = "mongodb+srv://username:dbpassword@cluster0.zqee7es.mongodb.net/?retryWrites=true&w=majority"

const connectUserDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI || "");
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error: any) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectUserDB;