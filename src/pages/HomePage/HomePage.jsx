import TodosForm from "../../components/TodosForm/TodosForm"
import * as todosAPI from "../../utilities/todos-api"

export default function HomePage() {

    async function createTodo(data) {
        const newTodo = await todosAPI.create(data);
    }


    return <>
        <h1>Roaming Hunger Code Challenge</h1>
        <TodosForm createTodo={createTodo} />
    </>
}
