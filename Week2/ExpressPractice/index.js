const express = require("express")
const app = express()

const people = [
    {name: "Joe", age: 50},
    {name: "bob", age: 27},
    {Name: "Martha", age: 22}
]

app.get("/", (req, res) => {
    res.send(people)
})

app.listen(5000, () => {
    console.log("Port 5000 is working")
})