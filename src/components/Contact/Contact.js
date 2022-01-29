import { Button, TextField } from '@mui/material';
import React, {useState} from 'react';


export default function Contact() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleInputChange = e => {
        const {target} = e;
        const inputType = target.id;
        const inputValue = target.value
        console.log("hey there")
        if (inputType === 'email'){
            setEmail(inputValue)
            console.log(`email is ${email}`)
        } else if (inputType === 'name'){
            setName(inputValue)
            console.log(`name is ${name}`)
        } else {
            setMessage(inputValue)
            console.log(`message is ${message}`)
        }
    }


    return (
        <div style={{height: '450px'}}>
            <h1 className="titles">Contact</h1>
            <form className="form-container">
                <TextField label="Name:" id="name" className="contact-form" value={name} onChange={handleInputChange}></TextField>
                <TextField label="Email:" id="email"  className="contact-form" value={email} onChange={handleInputChange}></TextField>
                <TextField label="Message:" id="message"  className="contact-form" multiline={true} rows={3} value={message} onChange={handleInputChange}>
                </TextField>
                <Button color="inherit" variant="outlined">Submit</Button>
            </form>
        </div>
    )
}