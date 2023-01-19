const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken');
const { User } = require("../models/user.model");
const saltRounds = 8



// user signUp
exports.signUp = async (req, res, next) => {

    try {
        const { email, password, } = req.body
        
        const salt = await bcrypt.genSalt(saltRounds)
        const hashPassword = await bcrypt.hash(password, salt)

        const newUser = new User({
            email,
            password: hashPassword,
        })
        const savedUser = await newUser.save()
        return res.status(200).send("user successfully saved");

    }
    catch (err) {
    console.log(err);
    return res.status(500).send("Error");
  }
}