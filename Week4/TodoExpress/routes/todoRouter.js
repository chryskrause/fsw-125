const express = require("express")
const todoRouter = express.Router()
const { v4: uuidv4 } = require('uuid')

const todos = [
    { title: "Save Wakanda", description: "Destroy Killmonger", completed: true, _id: uuidv4() },
    { title: "Destroy the Matrix", description: "Destroy the source and save Zion from an army of Sentinels", completed: false, _id: uuidv4() },
    { title: "Save Jack Dawson", description: "Push Rose off of the door.  She's basic.", completed: false, _id: uuidv4() },
    { title: "Save America", description: "Eat the rich", completed: true, _id: uuidv4() }
]

todoRouter.get("/", (req, res) => {
    res.send(todos)
})

todoRouter.post("/",(req, res) => {
    const newTodo = req.body
    newTodo._id = uuidv4()
    todos.push(newTodo)
    res.send(`Successfully added ${req.body.title} to the database!`)
})

todoRouter.put("/:todoId", (req, res) => {
    const todoId = req.params.todoId
    const todoIndex = todos.findIndex(todo => todo._id === todoId)
    const updatedTodo = Object.assign(todos[todoIndex], req.body)
    res.send(updatedTodo)
})

todoRouter.delete("/:todoId", (req, res) => {
    const todoId = req.params.todoId
    const todoIndex = todos.findIndex(todo => todo._id === todoId)
    todos.splice(todoIndex, 1)
    res.send("Successfully deleted!")
})

//GET one
todoRouter.get("/:todoId", (req, res) => {
    const todoId = req.params.todoId
    const foundTodo = todos.find(todo => todo._id === todoId)
    res.send(foundTodo)
})


module.exports = todoRouter