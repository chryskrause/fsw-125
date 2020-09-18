import React, {useState } from "react"
import AddCharacterForm from "./AddCharacterForm"

export default function Character(props){
    const {name, nickName, alive, quotes, bountyAmount, _id } = props
    const [editToggle, setEditToggle] = useState(false)

    return(
        <div className="character">
            {!editToggle ?
            <>
            <h1>Name: {name}</h1>
            <h2>Nickname: {nickName}</h2>
            <h3>Living: {alive}</h3>
            <h3>Quotes: {quotes}</h3>
            <p>Bounty Amount: {bountyAmount}</p>
            <button
                className="delete-btn"
                onClick = {() => props.deleteCharacters(_id)}>Delete</button>
            <button
                className="edit-btn"
                onClick={() => setEditToggle(prevToggle => !prevToggle)}>Edit</button>
            </>
            :
            <>
            <AddCharacterForm
                name={name}
                nickName={nickName}
                alive={alive}
                quotes={quotes}
                bountyAmount={bountyAmount}
                _id={_id}
                btnText="Submit Edit"
                submit={props.editCharacters}
                />
            <button
                onClick={() => setEditToggle(prevToggle => !prevToggle)}>Close</button>
            </>
            }
        </div>
    )
}
