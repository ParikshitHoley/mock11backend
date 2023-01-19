const express = require("express")
const { signUp } = require("../controllers/signup.controller");

const signupRouter = express.Router()

// for signUp
signupRouter.post("/", signUp)

module.exports = {
    signupRouter
}