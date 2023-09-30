import { useEffect, useState } from "react";
import axios from "axios";
import Todo from "./Todo";

function App() {
    const [todos, setTodos] = useState([]);
    const [inputTodo, setInputTodo] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const todoData = async () => {
            const res = await axios({
                method: "GET",
                url: "http://localhost:8000/todos",
            });
            console.log(res.data.data);
            setTodos(res.data.data);
            setLoading(false);
        };
        todoData();
    }, []);

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
        const result = todos.filter((value) => !value.checked === true);
        setTodos(result);
    };

    return (
        <div>
            {/* <Todo/> */}
            <label htmlFor="inputTodo"></label>
            <input type="text" id="inputTodo" value={inputTodo} onChange={(e) => setInputTodo(e.target.value)} placeholder="할 일 입력"/>
            <button onClick={addTodo}>ADD</button>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <ul>
                    {/* {todos.map((value) => {
                        return <li key={value.id}>{value.title}</li>;
                    })} */}
                    {todos.map((todo) => {
                        return (
                            <li key={todo.id}>
                                <input type="checkbox" checked={todo.checked} onChange={() => toggleTodo(todo.id)}/>{todo.title} {todo.text}
                                <button onClick={RemoveTodo}>DELETE</button>
                            </li>
                        )
                    })}
                </ul>
            )}
        </div>
    );
}

export default App;
