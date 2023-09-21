import {useState} from "react"

export default function () {
    const [colors, setColor] = useState("검정색글씨");
    const [style, setStyle] = useState("black")

    const redChange = () => {
        setColor("빨간색글씨")
        setStyle("red")
    }

    const blueChange = () => {
        setColor("파란색글씨")
        setStyle("blue")
    }



    return (
        <div>
            <div style={{color:style}}>{colors}</div>
            <button onClick={redChange}>빨강</button>
            <button onClick={blueChange}>파랑</button>
        </div>
    )
}
//230921 과제1