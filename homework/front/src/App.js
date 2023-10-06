import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
    const [todos, setTodos] = useState([]);
    const [inputTodo, setInputTodo] = useState("");
    const [loading, setLoading] = useState(true);
    const [readOnly, setReadOnly] = useState(true);

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
        const todoPostData = async () => {
            const res = await axios({
                method:"POST",
                url: "http://localhost:8000/todo",
                data: {
                    title:inputTodo
                }
            })
            console.log(res.data.data);
            setLoading(false);
        }
        todoPostData();

        if(todos.length > 10) {
            alert("할 일이 너무 많습니다.");
        }

        if(inputTodo !== "") {
            const newTodo = {
                id: Date.now(),
                title: inputTodo,
                done: false,
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
                return todo.id === id ? {...todo, done: !todo.done} : todo
            })
        )
    }

    const RemoveTodo = (id) => {
        const deleteUser = async () => {
            const res = await axios({
                method: "delete",
                url: `http://localhost:8000/todo/${id}`,
                data: {
                    id
                }
            }).then((res) => {
                if(res.data.result) {
                    
                }
            })
        }
        deleteUser();
        const result = todos.filter((value) => !value.done === true);
        setTodos(result);
    };

    const patch = async (id, i) => {
        const res = await axios({
            method: "PATCH",
            url: `http://localhost:8000/todo/${id}`,
            data: {
                id,
                title:todos[i].title,
            }
        }).then((res) => {
            window.location.reload()
        })
    }

    return (
        <div className="main">
            {/* <Todo/> */}
            <label htmlFor="inputTodo"></label>
            <input type="text" id="inputTodo" value={inputTodo} onChange={(e) => setInputTodo(e.target.value)} placeholder="할 일 입력"/>
            <button onClick={addTodo}>ADD</button>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <ul>
                    {todos.map((todo, i) => {
                        return (
                            <li key={todo.id}>
                                <input type="checkbox" checked={todo.done} onChange={() => toggleTodo(todo.id)}/>

                                {readOnly ? <span onClick={() => setReadOnly(false)}>{todo.title}</span> : <input onKeyDown={(e)=>{
                                    if (e.key ===  "Enter") {
                                        patch(todo.id, i);
                                        setReadOnly(false);
                                    }
                                }} value={todo.title} onChange={(e) => setTodos((prev) => {
                                    const next = [...prev]
                                    // string이나 숫자는 값을 바로 저장, 배열이나 object는 메모리 주소만 가지고 있어서 값을 직접적으로 변경해도 리액트는 모른다
                                    //새로운 배열을 선언해서 새로운 메모리값을 리액트에게 주어 리액트가 값이 변경됨을 알게된다.
                                    next[i].title = e.target.value
                                    // const prevTodo = prev[i]
                                    // const nextTodo = {...prevTodo, title:e.currentTarget.value}
                                    // next[i] = nextTodo
                                    return next
                                })}/>}
                                <button  onClick={() => RemoveTodo(todo.id)}>DELETE</button>
                            </li>
                        )
                    })}
                </ul>
            )}
        </div>
    );
}

export default App;
