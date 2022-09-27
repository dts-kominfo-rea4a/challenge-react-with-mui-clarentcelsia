// import './App.css';
import React from 'react';
import ContactForm from './components/ContactForm';

// Uncomment untuk memuat daftar kontak
import contactsJSON from './data/contacts.json';
import Header from './components/Header'
import Contact from './components/Contact';
import { 
  Grid,
  Box
 } from '@mui/material';

const App = () => {
  // Masukkan Header dan lakukan map untuk Contact ke dalam div App
  // untuk membuat daftar kontak bisa menggunakan MUI list
  // https://mui.com/material-ui/react-list/#folder-list

  // Masukkan contacts yang sudah didapat dalam JSON sebagai initial state
  // Buatlah handler untuk menambahkan kontak baru yang akan dikirim ke ContactForm
  const [contacts, setContacts] = React.useState(contactsJSON)

  const submitHandler = (newContact) => {
    setContacts([...contacts, newContact]);
    console.log("CONTACT: ", contacts);

  }

  return (
    <div className="App">
      <Header/>
      <Box mt={5}>
        <Grid container spacing={3} columns={2}>
          <Grid item xs={1}>
            <ContactForm data={submitHandler}/>
          </Grid>
          <Grid item xs={1}>
            <Contact data={contacts}/>
          </Grid>
        </Grid>
      </Box>
    </div>
  )
};

export default App;
