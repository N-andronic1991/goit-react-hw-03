import PropTypes from 'prop-types';
import Contact from '../contact/Contact';
import css from './ContactList.module.css';
const ContactList = ({ contacts, onDelete }) => {
  //   console.log(contacts);
  return (
    <ul className={css.list}>
      {contacts.map(contact => {
        return (
          <li key={contact.id} className={css.item}>
            <Contact {...contact} onDelete={onDelete} />
          </li>
        );
      })}
    </ul>
  );
};
export default ContactList;

ContactList.proptypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape({})),

  onDelete: PropTypes.func.isRequired,
};
