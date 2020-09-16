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
    res.send(newBounty)
})

bountyRouter.put("/:bountyId", (req, res) => {
    const bountyId = req.params.bountyId
    const bountyIndex = bountyList.findIndex(bounty => bounty._id === bountyId)
    const updatedBounty = Object.assign(bountyList[bountyIndex], req.body)
    res.send(updatedBounty)
})

bountyRouter.delete("/:bountyId", (req, res) => {
    const bountyId = req.params.bountyId
    const bountyIndex = bountyList.findIndex(bounty => bounty.id === bountyId)
    bountyList.splice(bountyIndex, 1)
    res.send("Successfully deleted bounty!")
})



module.exports = bountyRouter

//`Successfully added ${newBounty.firstName} ${newBounty.lastName} to the database!`