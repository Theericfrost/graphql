const { cyan } = require("colors");
const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    const connection = await mongoose.connect(process.env.DATABASE);
    console.log(
      `DB connection successful! ${connection.connection.host}`.cyan.underline
        .bold
    );
  } catch (e) {
    console.error(e);
  }
};

module.exports = connectDb;
