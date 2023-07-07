const mongoose = require('mongoose');

const connectDB = async (db, func) => {
  try {
    mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useFindAndModify: false,
      // useCreateIndex: true,
      // useMongoClient: true
    });
    console.log(console.log("Connected to database"));
    await func();
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}

module.exports = connectDB;