const { getAllUsers, createUser } = require("../controllers/users.controllers");

const router = require("express").Router();

router.get("/", getAllUsers);
router.post("/", createUser);

module.exports = router;
