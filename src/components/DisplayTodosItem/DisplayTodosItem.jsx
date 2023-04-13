import { useState } from "react";
import EditTodosForm from "../EditTodosForm/EditTodosForm";

export default function DisplayTodosItem({todo, deleteTodo, updateTodo}) {
    const [showEditForm, setShowEditForm] = useState(false);

    return (
        <>
            {showEditForm ?
                <>
                    <EditTodosForm todo={todo} updateTodo={updateTodo} showEditForm={showEditForm} setShowEditForm={setShowEditForm}/>
                    <button onClick={() => setShowEditForm(!showEditForm)}>Cancel Edits</button>
                </>
            :
            <>
                    <h3>{todo.description}</h3>
                    {/* <h3>{todo.completed ? "done" : "incomplete"}</h3> */}
                    <button onClick={() => deleteTodo(todo._id)}>delete</button>
                    <button onClick={() => setShowEditForm(!showEditForm)}>Edit?</button>
                </>
            }

        </>
    )
}
