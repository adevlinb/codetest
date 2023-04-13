import DisplayTodosItem from "../DisplayTodosItem/DisplayTodosItem"
import "./DisplayTodos.css";

export default function DisplayTodos({ allTodos, deleteTodo, updateTodo }) {
    const completedTodos = allTodos.filter(t => t.completed)
    const notCompletedTodos = allTodos.filter(t => !t.completed)

    const displayCompleted = completedTodos.map(todo => (
        <DisplayTodosItem key={todo._id} todo={todo} deleteTodo={deleteTodo} updateTodo={updateTodo}/>
    ))

    const displayNotCompleted = notCompletedTodos.map(todo => (
        <DisplayTodosItem key={todo._id} todo={todo} deleteTodo={deleteTodo} updateTodo={updateTodo}/>
    ))


    return (
        <>
            <h1>Todos</h1>
            <div className="todos-container">
                <div className="todo-items-containers">
                    <h3>Need to do:</h3>
                    {displayNotCompleted}
                </div>
                <div className="todo-items-containers">
                    <h3>Completed:</h3>
                    {displayCompleted}
                </div>
            </div>
        </>
    )
}
