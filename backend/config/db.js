import mongoose from "mongoose";

//mongodb://proshop:mubarak23@ds263048.mlab.com:63048/proshop
//process.env.MONGO_URL
const connectedDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb://proshop:mubarak23@ds263048.mlab.com:63048/proshop",
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
      }
    );
    console.log(`MongoDB Connected:${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.error(`Error: ${error.message}`.red.underline.bold);
  }
};

export default connectedDB;
