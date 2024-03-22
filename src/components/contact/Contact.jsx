import PropTypes from 'prop-types';
import css from './Contact.module.css';

import { FaUser } from '@react-icons/all-files/fa/FaUser';
import { FaPhoneAlt } from '@react-icons/all-files/fa/FaPhoneAlt';

const Contact = ({ id, name, number, onDelete }) => {
  return (
    <div className={css.contactBox}>
      <div>
        <p className={css.text}>
          <FaUser className={css.icon} size={12} />
          {name}
        </p>

        <p>
          <FaPhoneAlt className={css.icon} size={12} />
          {number}
        </p>
      </div>
      <button
        className={css.deleteBtn}
        type="button"
        onClick={() => {
          onDelete(id);
        }}
      >
        Delete
      </button>
    </div>
  );
};
export default Contact;

Contact.proptypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
