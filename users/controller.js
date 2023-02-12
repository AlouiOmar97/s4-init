var express = require("express")
var router = express.Router()
var userService = require("./userService")
const validate = require('../middleware/validation')
router.get("/", (req, res) => {
    res.json("Hello World")
})

router.get("/add/:name/:pwd", validate, addUser)
router.get("/list", getAllUsers)
router.get("/listuser", userService.listOfUsers)
module.exports = router
function addUser(req, res, next) {
    userService.add(res, { name: req.params.name, pwd: req.params.pwd })
}
function getAllUsers(req, res, next) {
    console.log("getAllUsers");
    userService.list(res)
}