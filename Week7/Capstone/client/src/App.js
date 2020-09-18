import React, { useState, useEffect } from "react"
import axios from "axios"
import AddCharacterForm from "./AddCharacterForm"
import Character from "./Character"

export default function App(){
    const [characters, setCharacters] = useState([])

    function getCharacters(){
        axios.get("/matrix")
            .then(res => setCharacters(res.data))
            .catch(err => console.log(err))
    }

    function addCharacters(newCharacter){
        axios.post("/matrix", newCharacter)
            .then(res => {
                setCharacters(prevCharacters => [...prevCharacters, res.data])
            })
            .catch(err => console.log(err))
    }

    function editCharacters(updates, characterId){
        axios.put(`/matrix/${characterId}`, updates)
            .then(res => {
                setCharacters(prevCharacters => prevCharacters.map(character => character._id !== characterId ? character : res.data))
            })
            .catch(err => console.log(err))
    }

    function deleteCharacters(characterId){
        axios.delete(`/matrix/${characterId}`)
            .then(res => {
                setCharacters(prevCharacters => prevCharacters.filter(character => character._id !== characterId))
            })
            .catch(err => console.log(err.response.data.errMsg))
    }


useEffect(() => {
    getCharacters()
}, [])

return(
    <div>
        <div className="character-container">
            <AddCharacterForm
                submit={addCharacters}
                btnText= "Add Character"
                />
            {
                characters.map(character =>
                    <Character 
                        {...character}
                        key={character.name}
                        deleteCharacters = {deleteCharacters}
                        editCharacters = {editCharacters}
                    />)
            }
        </div>
    </div>
)}