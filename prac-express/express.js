// How do you create a simple Express.js application?
const express=require("express");
const app=express();


app.get("/",(req,res)=>{
    res.send(`Welcome to my main page`)
});

app.listen(9000,()=>{
    console.log("server is running at port 9000");
})