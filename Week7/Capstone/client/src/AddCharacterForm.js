import React, {useState} from "react"

export default function AddCharacterForm(props){
    const initInputs = { name: props.name || "", nickName: props.nickName || "", alive: props.alive || "", quotes: props.quotes || "", bountyAmount: props.bountyAmount || "" }

    const [inputs, setInputs] = useState(initInputs)

    function handleChange(e){
        const { name, value } = e.target
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }

    function handleSubmit(e){
        e.preventDefault()
        props.submit(inputs, props._id)
        setInputs(initInputs)
    }

    return(
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                value={inputs.name}
                onChange={handleChange}
                placeholder="Character Name" />
            <input
                type="text"
                name="nickName"
                value={inputs.nickName}
                onChange={handleChange}
                placeholder="Nickname" />
            <input
                type="text"
                name="alive"
                value={inputs.alive}
                onChange={handleChange}
                placeholder="Living" />
            <input
                type="text"
                name="bountyAmount"
                value={inputs.bountyAmount}
                onChange={handleChange}
                placeholder="Bounty Amount" />
            <input
                type="text"
                name="quotes"
                value={inputs.quotes}
                onChange={handleChange}
                placeholder="quotes" />
            <button>{props.btnText}</button>
        </form>
    )
}