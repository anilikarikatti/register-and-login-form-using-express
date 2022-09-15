const express = require('express');

const app =express();

const nunjucks = require("nunjucks");

nunjucks.configure("views",{
    autoescape:true,
    express:app
})

// const ejs = require('ejs');

const bodyParser = require('body-parser');

// app.set("view engine","ejs");

app.use(bodyParser.json());

const port =  4000;

let db = require('../dbconfig');
const { name } = require('ejs');
let registerUser = require("../routes");

app.get('/',(req,res)=>{
    // res.send("hello world");
            res.render('register.html');
    
    
})


// app.post('/registerUser',async(req,res)=>{
    
//     let name= await req.body.username;
//     let password= await req.body.password;

//     // console.log(d);
//     // res.json("get data");
//     let pool = await db.pool;

//     let query = `insert into user (name,password) values (?,?)`;

//     try{
//         let rows = pool.execute(query,[name,password]);
//         res.json("successful");
//     }
//     catch{
//         res.json("error in data")
//     }


// })

app.post("/registerUser",registerUser);


app.listen(port,()=>{
    console.log("server start");
})