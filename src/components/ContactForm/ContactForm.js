import React from 'react';
import { Form } from './ContactForm.styled';

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

    render() {
        const{name, number}= this.state

        return (
            <Form onSubmit={this.onSubmit}>
              <label htmlFor={name}>Name
                <input 
                type="text"
                name="name" 
                value={name}
                pattern="^[a-zA-Za-яА-Я]+(([' -][a-zA-Za-яА-Я ])?[a-zA-Za-яА-Я]*)*$" 
                title="Name may contain onle letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Bats de Castelmore d`Artagnan" 
                required
                onChange={this.handleOnChange}
                id={name}
                />
              </label>
              <label htmlFor={number}>Number
                <input 
                type="tel"
                name="number" 
                value={number}
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}" 
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +" 
                required
                onChange={this.handleOnChange}
                id={number}
                />
              </label>
              <button type="submit" onClick={this.addNewContact}>Add contact</button>
            </Form>
        )
    }
}

export default ContactForm