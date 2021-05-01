require("dotenv").config();
const User = require("../models/users");
const { Response, ResponseError } = require("../utils/responses");

exports.createUser = async (request) => {
  let { name, email, address, phone } = request.body;
  // check if user with the email exist
  let existingUser = await User.findOne({ email: request.body.email });
  if (existingUser) {
    return new Response(403, {
      status: "error",
      responseMessage: "Email already exist",
    });
  } else {
    let newUser = new User({
      name,
      email,
      phone,
    });
    let userData = await newUser.save();
    return new Response(200, {
      status: "success",
      responseMessage: userData,
    });
  }
};

exports.editUser = async (request) => {
  try {
    let { name, email,  phone } = request.body;
    let editedUser = await User.findByIdAndUpdate(
      request.params.id,
      {
        name,
        email,
        phone,
      },
      { new: true }
    );
    return new Response(200, {
      status: "success",
      responseMessage: editedUser,
    });
  } catch (error) {
    return new Response(400, {
      status: "error",
      responseMessage: `Failed to edit user due to ${error}`,
    });
  }
};

exports.deleteUser = async (request) => {
  try {
    let userId = request.params.id;
    await User.findByIdAndDelete(userId);
    return new Response(200, {
      status: "success",
      responseMessage: `The user with this user Id ${userId} have been deleted successfully`,
    });
  } catch (error) {
    return new Response(400, {
      status: "error",
      responseMessage: `Failed to delete user with this user ${userId} due to ${error}`,
    });
  }
};

exports.getAllUsers = async (request) => {
  try {
    let allUsers = await User.find({});
    return new Response(200, {
      status: "success",
      responseMessage: allUsers,
    });
  } catch (error) {
    return new Response(400, {
      status: "error",
      responseMessage: `Failed to get all users due to ${error}`,
    });
  }
};

exports.getUserById = async (request) => {
  try {
    let user_Id = request.params.id;
    let singleUser = await User.findById(user_Id);
    return new Response(200, {
      status: "success",
      responseMessage: singleUser,
    });
  } catch (error) {
    return new Response(400, {
      status: "error",
      responseMessage: `Failed to fetch user with this ID ${user_Id}`,
    });
  }
};
