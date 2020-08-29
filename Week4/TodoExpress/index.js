const express = require("express")
const app = express()
// const { v4: uuidv4 } = require('uuid')
const morgan = require("morgan")

app.use(express.json())
app.use(morgan('dev'))

app.use("/todo", require("./routes/todoRouter"))

app.listen(8500, () => {
    console.log("Port 8500 is ready...")
})