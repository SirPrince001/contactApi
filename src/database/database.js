const mongoose = require("mongoose");
require("dotenv").config();

module.exports = {
  connect: () => {
    mongoose.connect(process.env.ONLINE_DATABASE_URL, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
    const connection = mongoose.connection;
    connection.once("open", () => {
      console.log("Connected to Database..");
    });
    connection.on("error", () => {
      console.log(
        "Failed to connect to database , please check your network connection"
      );
    });
  },
};
