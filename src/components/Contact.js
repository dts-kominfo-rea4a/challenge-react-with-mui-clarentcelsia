// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list
import React from 'react';
import {
    List,
    ListItem,
    ListItemText,
    Avatar,
    ListItemAvatar,
    Typography,
    Divider
} from '@mui/material'

// Kalian bisa membuat CSS sendiri di src/components/Contact.css
// atau langsung tambahkan dengan sx={{}}
const Contact = ( {data} ) => {
    return (
        <>
            <List sx={{bgcolor:'rgb(191,215,230)'}}>
                {data.map(items=>{
                    return(
                        <>
                        <ListItem alignItems='flex-start'>
                            <ListItemAvatar>
                                <Avatar src={items.photo} alt="photo"/>
                            </ListItemAvatar>
                            <ListItemText 
                                primary={items.name}
                                secondary={
                                    <>
                                    <Typography>{items.phone}</Typography>
                                    <Typography>{items.email}</Typography>
                                    </>
                                }>
                            </ListItemText>
                        </ListItem>
                        <Divider/>
                        </>
                    )
                })}
                </List>
           
        </>
    );

};

export default Contact;
