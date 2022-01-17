import React from 'react';
import CardContact from './ContactCard';

const ContactList = (props) =>{
    // console.log(props)
    const deleteHandler = (id) =>{
        props.getContactId(id);
    }
    const renderContactList = props.contacts.map((contacts) =>{
        return (
            <CardContact contacts={contacts} clickHandler={deleteHandler} key={contacts.id}></CardContact>
        )
    }) 
    return (
        <div className="ui celled list">{renderContactList}</div>
    )
}

export default ContactList;