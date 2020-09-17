const express = require("express")
const app = express()
const morgan = require("morgan")

app.use(express.json())
app.use(morgan('dev'))

app.use("/inventory", require("./routes/thingRouter"))

app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

app.listen(7777, ()=>{
    console.log("Port 7777 working just fine.")
})