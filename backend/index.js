const express =  require("express");
const { connection } = require("./db.js");
const { movieRouter } = require("./Routes/moviesRoutes.js");

require('dotenv').config()

const app = express();
app.use(express.json());

var cors = require('cors');

app.use(cors())

app.get("/",(req,res)=>{
    res.send("HOME PAGE")
})

app.use("/movie",movieRouter);//middleware

//Listening the Server
app.listen(process.env.port, async()=>{
    try{
        await connection
        console.log("Connected Successfully");
     }catch(err){
        console.log("Not Connected");
        console.log(err);
    }
    console.log(`Server is running on port ${process.env.port}`)
})