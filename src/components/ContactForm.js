// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card

import React from "react";
import {
    Button,
    TextField,
    Card,
    CardContent,
    Box
} from '@mui/material'

const ContactForm = ({data}) => {
    const [name, setName] = React.useState("")
    const [phone, setPhone] = React.useState("")
    const [email, setEmail] = React.useState("")
    const [url, setUrl] = React.useState("")
    // const [newContact, setNewContact] = React.useState([{
    //     name:name, phone:phone, email:email, photo:url
    // }])

    // Form berisi name, phone, email, dan photo url
    // Buatlah state newContact berupa objek sesuai dengan data yang ada
    const onNameChange = (event) => {
        setName(event.currentTarget.value);
    }

    const onPhoneChange = (event) => {
        setPhone(event.currentTarget.value);
    }

    const onEmailChange = (event) => {
        setEmail(event.currentTarget.value);
    }

    const onUrlChange = (event) => {
        setUrl(event.currentTarget.value);
    }

    const onFormSubmit = (event) => {
        event.preventDefault();

        const contact = {
            name: name,
            phone: phone,
            email: email,
            photo: url,
        }

        // setNewContact([...newContact, contact]);
        // // const contacts = contact; 
        // console.log("submit: ", newContact);
        data(contact)

        // setNewContact({})
    }

    return (
        <Card sx={{width:'auto'}}>
            <form onSubmit={onFormSubmit}>
                <CardContent>
                    <div>
                        <TextField 
                            sx={{marginTop:1}}
                            fullWidth
                            variant="filled"
                            label="Name"
                            value={name}
                            onChange={onNameChange} 
                            required
                            />
                        <br/>
                        <TextField 
                            sx={{marginTop:1}}
                            fullWidth
                            variant="filled"
                            label="Phone" 
                            value={phone}
                            onChange={onPhoneChange}
                            required/>
                        <br/>
                        <TextField 
                            sx={{marginTop:1}}
                            fullWidth
                            variant="filled"
                            label="Email" 
                            value={email}
                            onChange={onEmailChange}
                            required/>
                        <br/>
                        <TextField 
                            sx={{marginTop:1}}
                            fullWidth
                            variant="filled"
                            label="Photo URL" 
                            value={url}
                            onChange={onUrlChange}
                            required/>
                    </div>
                    <div>
                        <Button sx={{marginTop:3}} type="submit">ADD NEW</Button>
                    </div>
                </CardContent>
            </form>
            </Card>
    );
}

export default ContactForm;