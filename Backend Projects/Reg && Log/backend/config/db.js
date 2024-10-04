const mongoose = require('mongoose');

const connect = async () => {
  try {
    mongoose.set('strictQuery', false)
    const conn = await mongoose.connect(process.env.DATABASE,
       { useNewUrlParser: true, useUnifiedTopology: true });
    console.log(
      `Connected To Mongodb Database: ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error in Mongodb ${error}`);
  }
};

module.exports = connect;