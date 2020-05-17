const express = require("express")
const app = express()


app.use(express.json())

app.use("/bounty", require("./routes/bountyRoute.js"))

app.listen(3005, ()=> {
    console.log("Server is waiting on port 3005")
})