import React from 'react';
import { ContactListItem } from './ContactList.styled';

const ContactList = ({contacts, onDeleteContact}) => (                                                             
  <ul>
    {contacts.map(({id, name, number}) => (
        <ContactListItem key={id}>
            <p>{name} {number}</p>
            <button onClick={() => onDeleteContact(id)}>Delete</button>
        </ContactListItem>
    ))}
  </ul>
);

export default ContactList