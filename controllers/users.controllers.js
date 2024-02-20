// const users = require("../models/users.model");

// const getAllUsers = (req, res) => {
//   res.status(202).json({
//     users,
//   });
// };

// const createUser = (req, res) => {
//   res.status(202).json({
//     message: "I am post method",
//   });
// };

// module.exports = { getAllUsers, createUser };

let users = require("../models/users.model");

let getAllUsers = (req, res) => {
  res.status(200).json({
    users,
  });
};
let createUser = (req, res) => {
  res.status(201).json({
    message: "I am a post method",
  });
};

module.exports = { getAllUsers, createUser };
