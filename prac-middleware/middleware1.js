const express =require("express");
const app=express();
const middleware1=(req,res,next)=>{
    console.log("middleware1");
    next();
}
app.use(middleware1);

app.get("/",middleware2,(req,res,next)=>{
console.log("middleware2");
next();
})

app.listen(8000,()=>{
    console.log("server is running at port 8000");
})