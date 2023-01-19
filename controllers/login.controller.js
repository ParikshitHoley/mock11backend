const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken');
const {  User } = require("../models/user.model");



// user  login

exports.login = async (req, res, next) => {
    const { email, password } = req.body
    const user = await User.findOne({ email: email })
    try {

        if (!user) {
           
              return res.status(400).send("User does not exist");

        }
        const isMatchPassword = await bcrypt.compare(password, user.password)

        if (!isMatchPassword) {
            
              return res.status(400).send("Invalid Credentials");
        }

    } catch (err) {
    console.log(err);
    return res.status(500).send("Error");
  }

    const token = jwt.sign({ id: user._id }, "parikshit")
    user.password = ""
   
   
    return res.status(200).send({ user, token });


}