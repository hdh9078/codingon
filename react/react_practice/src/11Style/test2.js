import {useState} from "react"
import styled from "styled-components"
import "./test2.scss";

const _Input = styled.input`
    padding:10px;
    margin-right: 10px;
`

export default function AddToList() {
    const [state, setState] = useState("");
    const [toDoList, setToDoList] =useState([]);


    const addList = () => {
        const newList = {
            todo: state
        }
        setToDoList([...toDoList, newList])
        setState("")
    }


    return (
        <>
            <form>
                <_Input type="text" value={state} onChange={(e) => setState(e.currentTarget.value)}/>
                <button type="button" onClick={addList}>ADD</button>
            </form>
            <div className="main">
                {toDoList.map((value, index) => {
                    return (
                        <ul key={index}>
                            <li>{value.todo}</li>
                        </ul>
                    )
                })}
            </div>
            
            
        </>
    )
}