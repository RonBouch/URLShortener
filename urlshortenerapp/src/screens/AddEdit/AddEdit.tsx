import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import './AddEdit.css';

const initialState = {
    name: '',
    email: '',
    contact: '',
}

const AddEdit = () => {
    const [state, setState] = useState(initialState);
    const { name, email, contact } = initialState;

    const handleSubmit = (e: any) => {
        e.preventDefault();
    }


    const handleInputChange = (e: any) => {
        let { name, value } = e.target;
        setState({ ...state, [name]: value })
    }

    return (
        <div style={{ marginTop: '100px' }}>
            <h1>Add</h1>
            <form style={{ margin: 'auto', padding: "15px", maxWidth: "400px", alignContent: 'center' }}
                onSubmit={handleSubmit}
            >
                <label htmlFor='name'>Name</label>
                <input type='text' id="name" name="name" placeholder="Enter Nane ... " onChange={handleInputChange} value={name} />

                <label htmlFor='email'>Email</label>
                <input type='email' id="email" name="email" placeholder="Enter Email ... " onChange={handleInputChange} value={email} />

                <label htmlFor='contact'>Contact</label>
                <input type='number' id="contact" name="contact" placeholder="Enter Contact ... " onChange={handleInputChange} value={contact} />
            </form>
        </div>
    )
}

export default AddEdit
