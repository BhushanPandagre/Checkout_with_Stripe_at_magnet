const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    // await mongoose.connect("mongodb+srv://pandagrebhushan3:ig9AHlhyl1nmWYOm.mongodb.net/?")
    await mongoose.connect("mongodb://localhost:27017/payment_intrigation");
    console.log("!!.. Database connected successfully..!!");
  } catch (error) {
    console.log(`Error in connecting with database ${error}`);
  }
};
module.exports = connectDb;
