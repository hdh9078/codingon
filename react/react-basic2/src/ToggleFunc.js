import {useState} from "react"


export default function ToggleFunc() {
    
    const [status, setStatus] = useState(true);

    const handleToggle = () => {
        if(status === true) {
            setStatus(false);
        } else {
            setStatus(true);
        }
    };



    return (
        <div>
            <button onClick={handleToggle}>토글</button>
            <p>{status && "보여라"}</p>
        </div>
    )
}