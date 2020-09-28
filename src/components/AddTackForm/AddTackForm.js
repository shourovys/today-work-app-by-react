import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import './AddTackForm.css'

const AddTackForm = () => {
    const [tack, setTack] = useState(null)

    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => setTack(data)

    const handelAdd = (e) => {
        console.log('hello');


    }
    return (
        <div id="AddTackForm">
            <form onSubmit={handleSubmit(onSubmit)}>

                <input type="text" name="tackHeading" id="tackHeading" placeholder='Todo' ref={register({ required: true })} />


                <textarea name="tackPara" id="tackPara" cols="10" rows="10" placeholder='Todo details' ref={register({ required: true })} ></textarea>

                <button type="submit" onClick={handelAdd} id='add-btn'>Add</button>
            </form>
        </div>
    );
};

export default AddTackForm;