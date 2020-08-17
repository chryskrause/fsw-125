const express = require("express")
const bountyRouter = express.Router()
const { v4: uuidv4 } = require('uuid')

const bountyList = [
    { firstName: "Baby", lastName: "Yoda", living: true, bountyAmount: 100000, type: "Jedi", _id: uuidv4() },
    { firstName: "Darth", lastName: "Vader", living: false, bountyAmount: 500000, type: "Sith", _id: uuidv4() },
    { firstName: "Leia", lastName: "Organa", living: false, bountyAmount: 300000, type: "Jedi", _id: uuidv4() }
]

bountyRouter.get("/", (req, res) => {
    res.send(bountyList)
})

bountyRouter.post("/", (req, res) => {
    const newBounty = req.body
    newBounty._id = uuidv4()
    bountyList.push(newBounty)
    res.send(`Successfully added ${newBounty.firstName} ${newBounty.lastName} to the database!`)
})

module.exports = bountyRouter