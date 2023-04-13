import { useState } from "react";
import Button from "../Button/Button"

export default function EditTodosForm({ todo, updateTodo, showEditForm, setShowEditForm }) {
    const [formData, setFormData] = useState({
        description: todo.description,
        completed: todo.completed
    });

    function handleChange(evt) {
        const val = evt.target.type === 'checkbox' ? evt.target.checked : evt.target.value;
        setFormData({
          ...formData,
          [evt.target.name]: val
        });
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        if (formData.description === "" || formData.description.length < 3) return
        updateTodo(formData, todo._id);
        setShowEditForm(!showEditForm);
    }



    return (
        <>
        <form onSubmit={handleSubmit}>
            <label>
                Update Your Todo!
                <input value={formData.description} name="description" placeholder="update todo" onChange={handleChange}/>
            </label>
            <label>
                completed?
                <input type="checkbox" value={formData.completed} name="completed" onChange={handleChange} checked={formData.completed}/>
            </label>
            <Button buttonType={"submit"} label={"update todo"}/>
        </form>
        </>
    )

}
