import React from 'react';
import ContactList from './ContackList/ContactList'
import ContactForm from './ContactForm/ContactForm'
import Filter from './Filter/Filter'
import { nanoid } from 'nanoid';

export class App extends React.Component {
  state = {contacts: [
    {id: 'id-1', name: 'Rozie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Klements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copelsnd', number: '227-91-26'},
    ], filter: '',
  }

  deleteContact = (contactId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  addContact = (data) => {
    const {contacts} = this.state

    const contact = {
      id: nanoid(),
      name: data.name,
      number: data.number,
    };

    const filterResult = contacts.filter(prevContact =>
      prevContact.name.toLowerCase().trim() ===
      contact.name.toLowerCase().trim() ||
      prevContact.number.trim() === contact.number.trim()
    )

    filterResult.length 
    ? alert(`${contact.name}: is already in contacts`)
    : this.setState(prevState => {
      return {contacts: [contact, ...prevState.contacts],};
    });
  }

  onFilter = e => {
    this.setState({filter: e.currentTarget.value})
  }

  visibleContacts() {
    const {contacts, filter} = this.state
    return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
  }
  
  render() {
    const{ filter } = this.state;
  return (
    <div
      style={{
        height: '100vh',
        display: 'block',
        marginLeft: '40px',
        fontSize: 16,
        color: '#010101'
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm onSubmitForm={this.addContact}/>
      <h2>Contacts</h2>
      <Filter value={filter} onChange={this.onFilter}/>
      <ContactList contacts={this.visibleContacts()} onDeleteContact={this.deleteContact}/>
    </div>
  )}
};