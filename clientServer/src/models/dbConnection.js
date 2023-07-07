require('dotenv').config();
const mongoose = require('mongoose');
const db = process.env.DB;

const connectDB = async (func) => {
  // try {
  mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useFindAndModify: false,
      // useCreateIndex: true,
      // useMongoClient: true
    }).then(res => {
      console.log(console.log("Connected to database"));
      func();
    }).catch(err => [
      console.log(err)
    ]);
  // } catch (error) {
  //   console.error(error.message);
  //   process.exit(1);
  // }
}

module.exports = connectDB;