import React from 'react';
import CardContact from './ContactCard';

const ContactList = (props) =>{
    // console.log(props)
    const renderContactList = props.contacts.map((contacts) =>{
        return (
            <CardContact contacts={contacts}></CardContact>
        )
    }) 
    return (
        <div className="ui celled list">{renderContactList}</div>
    )
}

export default ContactList;