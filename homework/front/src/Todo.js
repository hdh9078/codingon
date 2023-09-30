import {useState} from "react"

export default function Todo() {
    const [todos, setTodos] = useState([]); //할일목록
    const [inputTodo, setInputTodo] = useState(""); //inut에 입력할 값


    const addTodo = () => {
        if(todos.length > 10) {
            alert("할 일이 너무 많습니다.");
        }

        if(inputTodo !== "") {
            const newTodo = {
                id: Date.now(),
                text: inputTodo,
                checked: false,
            };
            setTodos([...todos, newTodo]);
            setInputTodo("");
        }
    }

    const toggleTodo = (id) => {
        console.log(id)
        setTodos(
            todos.map((todo) => {
                console.log(todo)
                return todo.id === id ? {...todo, checked: !todo.checked} : todo
            })
        )
    }

    const RemoveTodo = () => {
        const result = todos.filter((value) => value.checked === false)
        setTodos(result);
    }

    return (
        <>
            <label htmlFor="inputTodo"></label>
            <input type="text" id="inputTodo" value={inputTodo} onChange={(e) => setInputTodo(e.target.value)} placeholder="할 일 입력"/>
            <button onClick={addTodo}>ADD</button>
            <ul>
                {todos.map((todo) => {
                    return (
                    <li key={todo.id}>
                        <input type="checkbox" checked={todo.checked} onChange={() => toggleTodo(todo.id)}/>{todo.text}
                    </li>
                    );
                })}
            </ul>
        </>
    )
}
    