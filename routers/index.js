const express = require("express")
const router = express.Router()


router.get("/", runFirst, (req,res) => {
    console.log("Home Page")
    res.render("./index.ejs")
})

router.get("/user", secondRun, (req,res) =>{
    res.render("index.ejs")
    console.log("THis is User page logged in")
})

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

module.exports = router