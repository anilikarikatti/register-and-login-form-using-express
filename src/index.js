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

app.get('/',(req,res)=>{
    // res.send("hello world");
            res.render('register.html');
    
    
})

app.post("/registerUser",async(req,res)=>{
    console.log(req.body);
    res.json({status : "ok"})
    // res.json(req.body)
    // console.log("anilk");
    
});
app.listen(port,()=>{
    console.log("server start");
})