import { useState, useEffect } from 'react';
import TodosForm from "../../components/TodosForm/TodosForm"
import DisplayTodos from "../../components/DisplayTodos/DisplayTodos"
import * as todosAPI from "../../utilities/todos-api"

export default function HomePage() {
    const [allTodos, setAllTodos] = useState([]);

    useEffect(function() {
        async function getAllTodos() {
            const allTodos = await todosAPI.index();
            setAllTodos(allTodos);
        }
        getAllTodos()
    }, [])

    async function createTodo(data) {
        const newTodo = await todosAPI.create(data);
        setAllTodos([...allTodos, newTodo]);
    }

    async function deleteTodo(id) {
        console.log(id)
        const deletedTodo = await todosAPI.deleteTodo(id);
        const filteredTodos = allTodos.filter(t => t._id !== id);
        setAllTodos(filteredTodos);
    }


    return <>
        <h1>Roaming Hunger Code Challenge</h1>
        <TodosForm createTodo={createTodo} />
        <DisplayTodos allTodos={allTodos} deleteTodo={deleteTodo}/>
    </>
}
