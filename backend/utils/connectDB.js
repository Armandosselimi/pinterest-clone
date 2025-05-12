import mongoose from "mongoose";

const exportDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
  } catch (error) {
    console.log(error);
  }
};

export default exportDB;
