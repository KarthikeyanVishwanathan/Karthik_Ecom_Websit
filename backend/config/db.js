//mongodb+srv://<db_username>:<db_password>@ecom.aupkg.mongodb.net/

import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(
      "mongodb+srv://karthik:karthik123@ecom.aupkg.mongodb.net/ecom"
    );
    console.log(`DB connected successfully ${connect.connection.host}`);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

export default connectDB;
