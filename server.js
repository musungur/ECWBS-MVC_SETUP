/*if (process.env.NODE_ENV !== "production"){
    require("dotenv").parse()
}
// DB Connection
const mongoose = require("mongoose")
//const dbPort = process.env.dbPORT
//const dburl = process.env.DATABASE_URL

mongoose.connect(process.env.DATABASE_URI, {useNewUrlParser: true})
const db = mongoose.connection
db.on("error", error => console.error(error))
db.once("open", ()=> {
    console.log("Connected to Database")
})
//DBend
*/
const express = require("express")
const app = express()
const indexRouter = require("./routers/index.js")
require("dotenv").config()

const port = process.env.PORT
//importing router


app.use(runFirst)
//***New  */
const expressLayouts = require("express-ejs-layouts")

app.set("view engine", "ejs")
app.set("views", __dirname +"/views")
app.set("layout", "layouts/layout" )
app.use(expressLayouts)
app.use(express.static("public"))

app.use("/", indexRouter)

app.use(secondRun)
app.use("/user",indexRouter)
//***EndNew */

/**Removed app.get which are routes
 *
 *  
 */

 
//middleware 1
function runFirst(req,res,next){
    console.log("This is first middleware")
    next()
}
//secondmiddleware
function secondRun(req,res,next){
    if (req.query.admin === "true"){
        console.log("Authenticate user first")
        res.send("Welcome Mr. Robert. This is your Home page.")
        next()
    }else{
       console.log("Auth failed. Someone trying to hack!") 
       res.send("You are not admin, logons rejected!")
    }

}
app.listen(port,()=>{
    console.log("Sever started Listening on Port:"+port)
})