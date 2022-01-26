import { Button, TextField } from '@mui/material';
import React from 'react';


export default function Contact() {
    return (
        <div style={{height: '450px'}}>
            <h1 className="titles">Contact</h1>
            <form className="form-container">
                <TextField label="Name:" id="name" type="name" className="contact-form"></TextField>
                <TextField label="Email:" id="email" type="email" className="contact-form"></TextField>
                <TextField label="Message:" id="message" type="message" className="contact-form" multiline={true} rows={3}></TextField>
                <Button color="inherit" variant="outlined">Submit</Button>
            </form>
        </div>
    )
}