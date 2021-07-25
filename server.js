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
const author = require("./routers/authors")
require("dotenv").config()

const port = process.env.PORT
//importing router


//***New  */
const expressLayouts = require("express-ejs-layouts")

app.set("view engine", "ejs")
app.set("views", __dirname +"/views")
app.set("layout", "layouts/layout" )
app.use(expressLayouts)
app.use(express.static("public"))

app.use("/",indexRouter)
app.use("/user",indexRouter)

app.use("/author", author)
app.use("/author/new", author)

/**Removed app.get which are routes
 *
 *  
 */
app.listen(port,()=>{
    console.log("Sever started Listening on Port:"+port)
})