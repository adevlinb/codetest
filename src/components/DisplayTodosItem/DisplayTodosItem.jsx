

export default function DisplayTodosItem({todo, deleteTodo}) {

    return (
        <>
            <h3>{todo.description}</h3>
            <h3>{todo.completed ? "done" : "incomplete"}</h3>
            <button onClick={() => deleteTodo(todo._id)}>delete</button>

        </>
    )
}
