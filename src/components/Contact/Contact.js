import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { checkMessage, validateEmail } from '../../utils/helpers';

const useStyles = makeStyles({
    titles: {
        color: 'aliceblue',
        textAlign: 'center',
        fontSize: '50px'
    },
    formContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '300px',
        justifyContent: 'space-between',
    },
    contactForm: {
        width: '30%'
    },
    errorText: {
        textAlign: 'center',
        color: 'red'
    }
})

export default function Contact() {
    const classes = useStyles()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    const handleInputChange = e => {
        const { target } = e;
        const inputType = target.id;
        const inputValue = target.value
        console.log("hey there")
        if (inputType === 'email') {
            setEmail(inputValue)
        } else if (inputType === 'name') {
            setName(inputValue)
        } else {
            setMessage(inputValue)
        }
    }

    const handleFormSubmit = e => {
        e.preventDefault();

        if (!validateEmail(email) || !name) {
            setErrorMessage('username or email is invalid')
            return
        }
        if (!checkMessage(message)) {
            setErrorMessage('You must include a message with at least 3 characters')
            return;
        }

    setErrorMessage('')
    setName('');
    setMessage('');
    setEmail('');
    }

    return (
        <div style={{ height: '500px' }}>
            <h1 className={classes.titles}>Contact</h1>
            <form className={classes.formContainer}>
                <TextField label="Name:" id="name" className={classes.contactForm} value={name} onChange={handleInputChange}></TextField>
                <TextField label="Email:" id="email" className={classes.contactForm} value={email} onChange={handleInputChange}></TextField>
                <TextField label="Message:" id="message" className={classes.contactForm} multiline={true} rows={3} value={message} onChange={handleInputChange}>
                </TextField>
                <Button color="inherit" variant="outlined" onClick={handleFormSubmit}>Submit</Button>
            </form>
            {errorMessage && (
                    <p className={classes.errorText}>{errorMessage}</p>
                )}
        </div>
    )
}