const express = require("express")
const app = express()

const drinks = [
    {name: "Coca Cola"},
    {name: "Water"},
    {name: "White wine"}
]

const endpoints = [
    {endpoint1: "fruits"},
    {endpoint2: "vegetables"},
    {endpoint3: "drinks"}
]

app.get("/fruits", (req, res) => {
    res.send("Oranges, Bananas, Apples")
})

app.get("/vegetables", (req, res) => {
    res.send("abc")
})

app.get("/drinks", (req, res) => {
    res.send(drinks)
})

app.get("/", (req, res) => {
    res.send(endpoints)
})


app.listen(4080, () => {
    console.log("The server is working at port 4080.")
})