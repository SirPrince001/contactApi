const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
   
    phone: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = Mongoose.model("USER", userSchema);
