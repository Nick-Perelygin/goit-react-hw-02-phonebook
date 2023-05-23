import React from 'react';
import { Form } from './ContactForm.styled';
import { nanoid } from 'nanoid';

class ContactForm extends React.Component {
    state = {
        name: '',
        number: '',
    }; 
    
    handleOnChange = e => {
        const {name, value} = e.currentTarget;
        this.setState({[name]: value});
        
    };

    onSubmit = e => {
        e.preventDefault();
        this.props.onSubmitForm(this.state);
        this.reset();
    };

    reset = () => {
        this.setState({
            name: '',
            number: '',
        })
    }

    nameId = nanoid();
    numberId = nanoid();

    render() {
        return (
            <Form onSubmit={this.onSubmit}>
              <label htmlFor={this.nameId}>Name
                <input 
                type="text"
                name="name" 
                value={this.state.name}
                pattern="^[a-zA-Za-яА-Я]+(([' -][a-zA-Za-яА-Я ])?[a-zA-Za-яА-Я]*)*$" 
                title="Name may contain onle letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Bats de Castelmore d`Artagnan" 
                required
                onChange={this.handleOnChange}
                id={this.nameId}
                />
              </label>
              <label htmlFor={this.numberId}>Number
                <input 
                type="tel"
                name="number" 
                value={this.state.number}
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}" 
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +" 
                required
                onChange={this.handleOnChange}
                id={this.numberId}
                />
              </label>
              <button type="submit" onClick={this.addNewContact}>Add contact</button>
            </Form>
        )
    }
}

export default ContactForm