const express = require("express");
const auth = require("./Routes/auth")
const app = express();
app.use(express.json());
app.use('/auth',auth)

app.get('/',(req,res)=>{
    res.send("Its working fine!!!!");
})

app.listen(9000,()=>{
    console.log("App is Working at server 9000");
})