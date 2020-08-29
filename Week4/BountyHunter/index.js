const express = require("express")
const app = express()

app.use(express.json())

app.use("/bounties", require("./routes/bountyRouter"))

app.listen(4444, () => {
    console.log("Port 4444 is ready!")
})