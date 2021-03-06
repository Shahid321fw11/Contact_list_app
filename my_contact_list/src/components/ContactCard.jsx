import React from 'react';
import user from "../images/user.png";
const ContactCard = (props) => {
    const { name,email} = props.contacts;
    return(

        <div className="item">
            <img className="ui avatar image" src={user} alt={user}></img>
        <div className="content">
            <div className="header">{name}</div>
            <div>{email}</div>
            <i className="trash alternate outline icon" onClick={() => props.clickHandler} style={{color: 'red',marginTop: '7px'}}></i>
        </div>
    </div>

    )

}

export default ContactCard;