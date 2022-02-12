import React from "react";
import Todo from "./Todo";


const TodoList = ({filter, todos, setTodos}) => {


    let FilterTodos = (todos) => {
        if (filter === "completed") {
            return todos.filter(el => el.completed)
        }

        if(filter === "uncompleted"){
            return todos.filter(el => !el.completed)
        }
        return todos;
    }

    todos = FilterTodos(todos)

    return (
        <div className="todo-container">
            <ul className="todo-list">
                {todos.map((todo, key) => <Todo key={todo.id} todo={todo} todos={todos} setTodos={setTodos}/>)}
            </ul>
        </div>
    );
}


export default TodoList;