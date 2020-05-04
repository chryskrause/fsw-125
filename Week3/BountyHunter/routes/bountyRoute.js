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

module.exports = bountyRouter