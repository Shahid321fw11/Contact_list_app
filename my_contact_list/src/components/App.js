import React, {useState, useEffect} from 'react';
import { uuid } from "uuidv4";
import './App.css';
import Header from './Header';
import AddContact from './AddContact'
import ContactList from './ContactList';

function App() {
  const l_key = "contacts";
  const [contacts,setContacts] = useState([]);

  const addContactHandler = (contact) => {
    console.log(contact)
    setContacts([...contacts, {id:uuid(), ...contact}])
  }

  const removeContactHandler = (id) => {
    const newContactList  = contacts.filter((contact) =>{
      return contact.id !== id;
    }) 
    setContacts(newContactList);
  }

  useEffect(() => {
    const retContact = JSON.parse(localStorage.getItem(l_key));
    if(retContact) setContacts(retContact)
  },[]);

  useEffect(() => {
    localStorage.setItem(l_key, JSON.stringify(contacts));
  },[contacts]);

  return (
    <div className="ui container">
      <Header />
      <AddContact addContactHandler={addContactHandler}/>
      <ContactList contacts={contacts} getContactId={removeContactHandler}/> 
    </div>
  );
}

export default App;
