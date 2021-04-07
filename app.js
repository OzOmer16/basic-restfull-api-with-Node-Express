const express = require("express");
const mongoose = require("mongoose")
const port = 5555
require('dotenv').config()

// tanksRouter
const tanksRouter = require("./routes/tanks")

//express
const app = express()

// Mongodb connection
mongoose.connect(process.env.DB_CONNECT,
{ 
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false 
},
() => console.log("Connected to Mongodb database")

)







// Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use("/tanks", tanksRouter)

// Routes
app.get("/", (req, res)=> {
    res.json({message: "Tank api"})
})





app.listen(port, ()=> {
    console.log(`Connected to server on ${port}`)
})
