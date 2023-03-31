const express = require("express")
const dotenv = require("dotenv")
dotenv.config()
const bodyParser = require("body-parser")
// const studentRouter = require("./routes/student")
const studentRouter = require("./routes/student")

// const connect = require("./database/mongoose")

const app = express();
//  dotenv.config({path:"./.env"});


app.use(bodyParser.json())
app.use(studentRouter)

app.listen(6000,async()=>{
    console.log("Server is running at the port 6000")
//    await connect();//connect is a async function so add await and async
})