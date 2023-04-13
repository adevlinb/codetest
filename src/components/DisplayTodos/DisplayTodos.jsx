import DisplayTodosItem from "../DisplayTodosItem/DisplayTodosItem"

export default function DisplayTodos({ allTodos }) {

    const todos = allTodos.map(todo => (
        <DisplayTodosItem key={todo._id} todo={todo}/>
    ))


    return (
        <>
            <h1>Todos</h1>
            <div>{todos}</div>
        </>
    )
}
