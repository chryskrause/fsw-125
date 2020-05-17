const express = require("express")
const bountyRouter = express.Router()
const { v4: uuidv4 } = require('uuid')

const bountyList = [
    { firstName: "Baby", lastName: "Yoda", living: true, bountyAmount: 375000, type: "Jedi", _id: uuidv4() },
    { firstName: "Luke", lastName: "Skywalker", living: true, bountyAmount: 500000, type: "Jedi", _id: uuidv4() }
]


bountyRouter.route("/")
    .get((req, res) => {
        res.send(bountyList)
    })
   .post((req, res) => {
       const newBounty = req.body
       newBounty._id = uuidv4()
       bountyList.push(newBounty)
       res.send(`Successfully added ${newBounty.firstName} ${newBounty.lastName} to bounty list!`)
   })
 //update one
bountyRouter.put("/:bountyId", (req, res) => {
    const bountyId = req.params.bountyId
    const bountyIndex = bountyList.findIndex(bounty => bounty._id === bountyId)
    const updatedBounty = Object.assign(bountyList[bountyIndex], req.body)
    res.send(updatedBounty)
})

//delete one
bountyRouter.delete("/:bountyId", (req, res) => {
    const bountyId = req.params.bountyId
    const bountyIndex = bountyList.findIndex(bounty => bounty._id === bountyId)
    bountyList.splice(bountyIndex, 1)
    res.send("Sucessfully deleted the bounty!")
})

module.exports = bountyRouter