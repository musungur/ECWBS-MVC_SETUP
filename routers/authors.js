const express = require("express")
const authorsrouter = express.Router()

authorsrouter.get("/", (req,res) =>{
    console.log("authors Page")
    res.render("./authors/authorshome")
//    res.send("Authors Page")
})
authorsrouter.get("/new",  (req,res) =>{
    console.log("Authors new page")
    res.render("./authors/authorsNew")
 //   res.render("../authors/indexauthors")
})
module.exports = authorsrouter