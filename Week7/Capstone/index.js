const express = require("express")
const app = express()
const morgan = require("morgan")

app.use(express.json())
app.use(morgan('dev'))

app.use("/matrix", require("./routes/matrixRouter"))

app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})


app.listen(8888, () =>{
    console.log("Port 8888 is ready.")
})