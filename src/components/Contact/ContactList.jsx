import PropTypes from 'prop-types';
import Contact from './Contact.jsx';

const ContactList = ({ contacts, removeFnc }) => {
  return (
    <div>
      <ul>
        {contacts.map(contact => {
          return (
            <Contact
              contact={contact}
              removeFnc={removeFnc}
              key={contact.id}
            ></Contact>
          );
        })}
      </ul>
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array,
  removeFnc: PropTypes.func,
};
export default ContactList;
