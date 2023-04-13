import DisplayTodosItem from "../DisplayTodosItem/DisplayTodosItem"

export default function DisplayTodos({ allTodos, deleteTodo }) {
    const completedTodos = allTodos.filter(t => t.completed)
    const notCompletedTodos = allTodos.filter(t => !t.completed)

    const displayCompleted = completedTodos.map(todo => (
        <DisplayTodosItem key={todo._id} todo={todo} deleteTodo={deleteTodo}/>
    ))

    const displayNotCompleted = notCompletedTodos.map(todo => (
        <DisplayTodosItem key={todo._id} todo={todo} deleteTodo={deleteTodo}/>
    ))


    return (
        <>
            <h1>Todos</h1>
            <div>{displayCompleted}</div>
            <div>{displayNotCompleted}</div>
        </>
    )
}
