const { v4: uuidv4 } = require("uuid");

let users = [
  {
    id: uuidv4(),
    username: "mijaur rahman",
    email: "mijan.cse19@gmail.com",
  },
  {
    id: uuidv4(),
    username: "Mijanr Rahman",
    email: "mijan.200108@s.push.ac.bd",
  },
];

module.exports = users;
