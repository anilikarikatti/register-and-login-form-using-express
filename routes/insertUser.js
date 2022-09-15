const express = require("express");

const {insertUser} = require('../controllers/registerUser');

// route.use("/registerUser",insertUser)

// console.log(insertUser());
console.log(insertUser);

let route = express.Router()

route.post("/registerUser",insertUser);

module.exports = route;