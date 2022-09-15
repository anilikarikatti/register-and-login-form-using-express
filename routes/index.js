const express = require("express");

// const insertUser = require("./insertUser");

const {insertUser} = require('../controllers/registerUser');

console.log(insertUser);
const router = express.Router();

// router.use("/registerUser",insertUser);

router.post("/registerUser",insertUser);

// router.use("/registerUser",insertUser);

module.exports = router;