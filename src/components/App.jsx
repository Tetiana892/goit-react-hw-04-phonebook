import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { Container, Section, Title } from './App.styled';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

function App() {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  // первірка localstorage на наявність контактів

  useEffect(() => {
    const localContacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(localContacts);
    if (parsedContacts) {
      setContacts(parsedContacts);
    } else return;
  }, []);

  //Збереження в локал сторідж

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  // Додає контакт у список

  const addContact = ({ name, number }) => {
    const normalizedFind = name.toLowerCase();
    const findName = contacts.find(
      contact => contact.name.toLowerCase() === normalizedFind
    );
    if (findName) {
      return alert(`${name} is already in contacts`);
    }

    const findNumber = contacts.find(contact => contact.number === number);
    if (findNumber) {
      return alert(`This phone number is already in use.`);
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    setContacts(contacts => [...contacts, newContact]);
  };

  // видаляє контакт

  const deleteContact = contactId => {
    setContacts(contacts =>
      contacts.filter(contact => contact.id !== contactId)
    );
  };

  const handleFilter = e => {
    setFilter(e.currentTarget.value);
  };

  // фільтрація по імені

  const filterList = () => {
    const normalValue = filter.toLowerCase().trim();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalValue)
    );
  };

  const visibleContacts = filterList();

  return (
    <Container>
      <Section title="Phonebook">
        <Title>Phonebook</Title>
        <ContactForm onSubmit={addContact} />
      </Section>

      <Section title="Contacts">
        <Title>Contacts</Title>
        <Filter value={filter} onChange={handleFilter} />
        <ContactList
          contacts={visibleContacts}
          onDeleteContact={deleteContact}
        />
      </Section>
    </Container>
  );
}

export default App;
