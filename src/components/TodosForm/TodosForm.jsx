import { useState } from 'react';
import Button from "../Button/Button"

export default function TodosForm({ createTodo }) {
    const [formData, setFormData] = useState({
        description: ""
    });

    function handleSubmit(evt) {
        evt.preventDefault();
        console.log("submit function", formData)
        createTodo(formData);
        setFormData({
            description: ""
        });
    }



    return (
        <>
        <form onSubmit={handleSubmit}>
            <label>
                Add a new Todo!
                <input value={formData.description} placeholder="new todo" onChange={(evt) => setFormData({ description: evt.target.value })}/>
            </label>
            <Button buttonType={"submit"} label={"create new todo"}/>
        </form>
        </>
    )

}
