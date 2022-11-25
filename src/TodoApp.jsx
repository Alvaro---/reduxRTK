import { useState } from "react";
import { useGetTodoQuery, useGetTodosQuery } from "./store/apis/todosApi"

export const TodoApp = () => {

    // const algo = useGetTodosQuery();
    // console.log(algo)


    //PARA VARIOS TODOS
    // const { data: todos = [], isLoading } = useGetTodosQuery();


    const [todoId, setTodoId] = useState(1)

    // const todo = useGetTodoQuery(1);
    const { data: todo, isLoading } = useGetTodoQuery(todoId);
    console.log(todo)

    const nextTodo = () => {
        setTodoId(todoId + 1);
    }
    const prevTodo = () => {
        if (todoId === 1) return;
        setTodoId(todoId - 1);
    }
    return (
        <>
            <h1>Todos - RTK Query</h1>
            <hr />
            <h4>isLoading {isLoading ? "true" : "false"}</h4>
            <h4>isFetching...</h4>
            <pre>
                {JSON.stringify(todo)}
            </pre>
            {/* <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        <strong>{todo.completed ? 'Done' : 'Pending'}</strong>{todo.title}
                    </li>
                ))}
            </ul> */}
            <button onClick={prevTodo}>
                Prev Todo
            </button>
            <button onClick={nextTodo}>
                Next Todo
            </button>
        </>
    )
}
