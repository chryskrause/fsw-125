const express = require("express")
const thingRouter = express.Router()
const { v4: uuidv4 } = require('uuid')

const items = [
    { name: "the matrix", type: "movie", _id: uuidv4() },
    { name: "bread", type: "food", _id: uuidv4() },
    { name: "red t-shirt", type: "clothing", _id: uuidv4() },
    { name: "apples", type: "food", _id: uuidv4() },
    { name: "orange juice", type: "drink", _id: uuidv4() },
    { name: "the little mermaid", type: "movie", _id: uuidv4() },
    { name: "gray sweatpants", type: "clothing", _id: uuidv4() },
    { name: "flip flops", type: "clothing", _id: uuidv4() },
    { name: "coffee", type: "drink", _id: uuidv4() },
    { name: "cereal", type: "food", _id: uuidv4() },
    { name: "orange shorts", type: "clothing", _id: uuidv4() },
    { name: "the big lebowski", type: "movie", _id: uuidv4() },
    { name: "bottled water", type: "drink", _id: uuidv4() }
]

//Get all
thingRouter.get("/", (req, res) => {
    res.status(200).send(items)
})

//Get one
thingRouter.get("/:thingId", (req, res, next) => {
    const thingId = req.params.thingId
    const foundThing = items.find(thing => thing._id === thingId)
    if(!foundThing){
        const error = new Error(`The item with id ${thingId} was not found`)
        return next(error)
    }
    res.status(200).send(foundThing)
})

//Get by type
thingRouter.get("/search/type", (req, res, next) => {
    const type = req.query.type
    if(!type){
        const error = new Error("Item not found. Please check inventory or spelling and try again")
        res.status(500)
        return next(error)
    }
    const filteredItems = items.filter(item => item.type === type)
    res.status(200).send(filteredItems)
})

module.exports = thingRouter