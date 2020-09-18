const express = require('express')
const matrixRouter = express.Router()
const { v4: uuidv4 } = require('uuid')

const characterList = [
    { name: "neo", nickName: "the one", alive: false, quotes: ["there is no spoon... ", " we need guns, lots of guns... ", " I know kung fu... "], bountyAmount: 1000000, _id: uuidv4() },
    { name: "morpheus", nickName: "the boss", alive: true, quotes: ["You are the one... ", "he's starting to believe... ", " show me..."], bountyAmount: 1000000, _id: uuidv4() },
    { name: "trinity", nickName: "miss kickass", alive: false, quotes: ["follow the white rabbit... ", "god damn you cypher... ", " I'm never letting go..."], bountyAmount: 750000, _id: uuidv4() },
    { name: "smith", nickName: "lazarus", alive: false, quotes: ["Mr. Anderson... ", " It is inevitable... ", "me, me, me... "],  bountyAmount: 2000000, _id: uuidv4() }
]

//Get all
matrixRouter.get("/", (req, res) => {
    res.status(200).send(characterList)
})

//Get one
matrixRouter.get("/:characterId", (req, res, next) => {
    const characterId = req.params.characterId
    const foundCharacter = characterList.find(character => character._id === characterId)
    if(!foundCharacter){
        const error = new Error(`The character with id ${characterId} could not be found`)
        return next(error)
    }
    res.status(200).send(foundCharacter)
})

//Add new character
matrixRouter.post("/", (req, res) => {
    const newCharacter = req.body
    newCharacter._id = uuidv4()
    characterList.push(newCharacter)
    res.status(201).send(newCharacter)
})

//Update character
matrixRouter.put("/:characterId", (req, res) => {
    const characterId = req.params.characterId
    const updateObject = req.body
    const characterIndex = characterList.findIndex(character => character._id === characterId)
    const updatedCharacter = Object.assign(characterList[characterIndex], updateObject)
    res.status(201).send(updatedCharacter)
})

//delete character
matrixRouter.delete("/:characterId", (req, res) => {
    const characterId = req.params.characterId
    const characterIndex = characterList.findIndex(character => character._id === characterId)
    characterList.splice(characterIndex, 1)
    res.send(`Successfully deleted character with id ${characterId}`)
})

//get by name
matrixRouter.get("/search/name", (req, res, next) => {
    const name = req.query.name
    if(!name){
        const error = new Error("Name not recognized or found, please try again")
        res.status(500)
        return next(error)
    }
    const filteredCharacters = characterList.filter(character => character.name === name)
    res.status(200).send(filteredCharacters)
})





module.exports = matrixRouter