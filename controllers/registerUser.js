
const express = require('express');

const app = express();

const mysql = require('mysql2');

const connection = require('../dbconfig');

// let bodyParser = require("body-parser")

// app.use(bodyParser.json());
// app.post('/registerUser',async(req,res)=>{

console.log("anil");
  exports.insertUser = async(req,res)=>{ 

    let pool =await  connection.pool;

      let name= await req.body.username;
      let password= await req.body.password;
      console.log(name,password);
      // console.log(d);
      // res.json("get data");
      // let pool = await db.pool;

      let query = `insert into user (name,password) values (?,?)`;

      try{
          let rows = pool.execute(query,[name,password]);
          res.json("successful");
      }
      catch{
          res.json("error in data")
      }


}

// module.exports = {insertUser}

