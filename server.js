/*if(process.env.NODE_ENV !== "production"){
    require("dotenv").parse()
}*/
const express = require("express")
const appserver = express()

require("dotenv").config()
const port = process.env.PORT

//body-parser
const bodyParse = require("body-parser")

//---mvc environment setup
const layoutviews = require("express-ejs-layouts")
appserver.set("view engine", "ejs")
appserver.set("views", __dirname + "/views")
appserver.set("layout", "layouts/layout")
appserver.use(express.static("public"))
appserver.use(layoutviews)
appserver.use(bodyParse.urlencoded({limit: "10mb", extended: false}))

//mongo connection
const mongoose = require("mongoose")

mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true}, { useUnifiedTopology: true })
const db = mongoose.connection

db.on("error", error => console.error(error))
db.once("open", () => console.log("connected to mongoose"))

//general index js import
const indexRouter = require("./routes/index")

//general author js import
const authorRouter = require("./routes/authors")


//app server use - routes' index js
appserver.use("/", indexRouter)

//app server use routes authors js
appserver.use("/authors",authorRouter)



appserver.listen(port,()=>{
    console.log(`Server started on port: ${port}`)
})