import css from './Contact.module.css';
import PropTypes from 'prop-types';

const Contact = ({ contact, removeFnc }) => {
  const handleRemove = () => {
    removeFnc(contact.id);
  };

  return (
    <li>
      <span>{contact.name}</span>:&nbsp;
      <span>{contact.number}</span>
      <button className={css.btnDelete} onClick={handleRemove}>
        delete
      </button>
    </li>
  );
};

Contact.propTypes = {
  contact: PropTypes.object,
  removeFnc: PropTypes.func,
};
export default Contact;
