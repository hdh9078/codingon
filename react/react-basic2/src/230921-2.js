import {useState} from "react"

export default function Toggle2() {
    const [status, setState] = useState(true)

    const Toggle = () => {
        if(status === true) {
            setState(false)
        } else {
            setState(true)
        }
    }


    return (
        <div>
            <button onClick={Toggle}>{status ? "사라져라" : "보여라"}</button>
            <h1>{status && "안녕하세요"}</h1>
        </div>
    )
}
//230921 과제2