// useState hook!
import React , {useState} from 'react'

// Components have to start with uppercase
export default function UseStateTest() {

    const [name, setName] = useState("Shiv");

    return (
        <React.Fragment>
            <h1>Hello {name}</h1>
            <button onClick={() => setName("Haikal")}>Hi</button>
        </React.Fragment>
    )
}