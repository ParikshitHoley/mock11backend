const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")
const { connection } = require("./config/db")
const { loginRouter } = require("./routes/login.routes")
const { signupRouter } = require("./routes/signup.routes")


dotenv.config()
const app = express()
app.use(express.json())
app.use(cors())



// routes
app.use("/login",loginRouter)
app.use("/signup",signupRouter)


const port = process.env.PORT || 3001



app.listen(port, () => {
   connection()
       console.log(`listening to port ${port}`);
})