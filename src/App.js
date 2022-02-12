import './App.css';
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import React, {useEffect, useState} from "react";


function App() {

    // inputText: is the actual value
    // setInputText is the Function that allow us to change the value
    const [inputText, setInputText] = useState("");
    const [todos, setTodos] = useState([]);
    const [filter, setFilter] = useState('all');

    useEffect(() => {
        getLocalTodos();
    }, []);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const getLocalTodos = () => {
        if (localStorage.getItem('todos') === null) {
            localStorage.setItem('todos', JSON.stringify([]));
        } else {
            console.log(localStorage.getItem('todos', JSON.stringify(todos)));
            setTodos(JSON.parse(localStorage.getItem('todos', JSON.stringify(todos))));
        }
    }


    return (
        <div className="App">
            <header>
                <h1>Cool Todo List</h1>
            </header>
            <Form setFilter={setFilter} todos={todos} setTodos={setTodos} setInputText={setInputText}
                  inputText={inputText}/>
            <TodoList filter={filter} todos={todos} setTodos={setTodos}/>
        </div>
    );
}

export default App;
