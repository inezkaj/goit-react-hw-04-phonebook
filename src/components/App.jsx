import Form from './Form/Form.jsx';
import ContactList from './Contact/ContactList.jsx';
import Filter from './Filter/Filter.jsx';
import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';

const App = () => {
  const [contacts, setContacts] = useState(() => {
    const storedContacts = localStorage.getItem('contacts');
    if (storedContacts !== null) {
      return JSON.parse(storedContacts);
    }

    return [];
  });
  const [filter, setFilter] = useState('');

  const addContact = contact => {
    contact.id = nanoid();

    const duplicate = contacts.find(el => {
      return el.name.toLowerCase() === contact.name;
    });
    if (duplicate !== undefined) {
      alert(`localhost: 3000 says ${duplicate.name} is already in contacts`);
      return;
    }
    setContacts([...contacts, contact]);
  };

  const contactList = () => {
    return contacts.filter(el => {
      return el.name.toLowerCase().includes(filter.toLowerCase());
    });
  };

  const removeContact = id => {
    console.log(id);
    const updatedContacts = contacts.filter(contact => contact.id !== id);
    setContacts(updatedContacts);
  };

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div>
      <h2>Phonebook</h2>
      <Form addingContact={addContact}></Form>
      <h2>Contacts</h2>
      <Filter addingFilterList={setFilter}></Filter>
      <ContactList
        contacts={contactList()}
        removeFnc={removeContact}
      ></ContactList>
    </div>
  );
};
export default App;
