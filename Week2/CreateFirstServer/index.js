const express = require("express")
const app = express()

const foods = [
    {name: "Pizza", score: 95},
    {name: "Nachos", score: 100},
    {name: "Salad", score: 75}
]

const cities = [
    {name: "Paris, France"},
    {name: "Venice, Italy"},
    {name: "Nairobi, Kenya"},
    {name: "Dallas, Texas"}
]

const people = [
    {name: "Malik", age: 34},
    {name: "Diane", age: 67},
    {name: "Jackie", age: 26},
    {name: "Bill", age: 51}
]

app.get("/foods", (req, res) => {
    res.send(foods)
})

app.get("/cities", (req, res) => {
    res.send(cities)
})

app.get("/people", (req, res) => {
    res.send(people)
})

app.listen(5050, () => {
    console.log("Port 5050 is working just fine!")
})