import React, {Component} from 'react';
import ContactForm from './ContactForm/ContactForm';
// import ContactList from './ContactList/ContactList'
// import { nanoid } from 'nanoid'

export class App extends Component {
  state = {
    contacts: []
  };

  // NewId = () => nanoid()
  formSubmit = data => {
    console.log(data);
  }
  
  
  render() {
    return (
      <>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={this.formSubmit}>

      </ContactForm>
      <h2>Contacts</h2>
      {/* <ContactList></ContactList> */}
      </>
    );
  }
  
};
