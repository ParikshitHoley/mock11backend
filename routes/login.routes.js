const express = require("express")
const { login } = require("../controllers/login.controller");
const loginRouter = express.Router()

// for login
loginRouter.post("/", login)

module.exports = {
    loginRouter
}