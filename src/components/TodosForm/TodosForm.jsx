import { useState } from 'react';
import Button from "../Button/Button"

export default function TodosForm() {
    const [formData, setFormData] = useState("");

    function handleSubmit(evt) {
        evt.preventDefault();
        console.log("submit function", formData)
        setFormData("");
    }



    return (
        <>
        <form onSubmit={handleSubmit}>
            <label>
                Add a new Todo!
                <input value={formData} placeholder="new todo" onChange={(evt) => setFormData(evt.target.value)}/>
            </label>
            <Button buttonType={"submit"} label={"create new todo"}/>
        </form>
        </>
    )

}
