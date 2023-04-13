import { useState, useEffect } from 'react';
import TodosForm from "../../components/TodosForm/TodosForm"
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


    return <>
        <h1>Roaming Hunger Code Challenge</h1>
        <TodosForm createTodo={createTodo} />
    </>
}
