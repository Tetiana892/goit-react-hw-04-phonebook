import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Container, Section, Title } from './App.styled';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  //Збереження в локал сторідж

  componentDidUpdate( prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contactsLocalStorage', JSON.stringify(this.state.contacts));
    }
  }

  componentDidMount() {
    const contact = localStorage.getItem('contactsLocalStorage');
    const parseContact = JSON.parse(contact);
    if (parseContact) {
      this.setState({ contacts: parseContact });
    }
  }


  // Додає контакт у список

  addContact = ({ name, number }) => {
    const normalizedFind = name.toLowerCase();
    const findName = this.state.contacts.find(
      contact => contact.name.toLowerCase() === normalizedFind
    );
    if (findName) {
      return alert(`${name} is already in contacts`);
    }

    const findNumber = this.state.contacts.find(
      contact => contact.number === number
    );
    if (findNumber) {
      return alert(`This phone number is already in use.`);
    }

    this.setState(({ contacts }) => ({
      contacts: [{ name, number, id: nanoid() }, ...contacts],
    }));
  };

  // видаляє контакт

  deleteContact = contactId => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  handleFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  // фільтрація по імені

  filterList = () => {
    const { filter, contacts } = this.state;
    const normalValue = filter.toLowerCase().trim();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalValue)
    );
  };

  render() {
    return (
      <Container>
        <Section title="Phonebook">
          <Title>Phonebook</Title>
          <ContactForm createUser={this.addContact} />
        </Section>

        <Section title="Contacts">
          <Title>Contacts</Title>
          <Filter value={this.filter} onChange={this.handleFilter} />
          <ContactList
            contacts={this.filterList()}
            onDeleteContact={this.deleteContact}
          />
        </Section>
      </Container>
    );
  }
}

export default App;
