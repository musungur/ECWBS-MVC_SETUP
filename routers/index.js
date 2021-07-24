const express = require("express")
const router = express.Router()


router.get("/", (req,res) => {
 //   console.log("Home Page")
    res.send("This is a Home Page")
})

router.get("/user",/*secondRun*/ (req,res) =>{
    res.render("index.ejs")
    console.log("THis is User page logged in")
})

module.exports = router