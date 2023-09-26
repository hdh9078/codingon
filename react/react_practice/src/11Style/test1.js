import {useState} from "react"
import "./test1.scss";

export default function AddToList() {
    const [state, setState] = useState("");
    const [toDoList, setToDoList] =useState([]);


    const addList = () => {
        const newList = {
            todo: state
        }
        setToDoList([...toDoList, newList])
    }


    return (
        <>
            <form>
                <input type="text" value={state} onChange={(e) => setState(e.currentTarget.value)}/>
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