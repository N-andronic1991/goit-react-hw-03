import { Formik, Form, Field, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import css from './ContactForm.module.css';

const ContactSchema = Yup.object().shape({
  userName: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  phoneNumber: Yup.string()
    .min(6, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

const ContactForm = ({ onAdd }) => {
  const initialValues = {
    userName: '',
    phoneNumber: '',
  };

  const handleSubmit = (values, actions) => {
    actions.resetForm();
    onAdd({
      id: nanoid(),
      name: values.userName,
      number: values.phoneNumber,
    });
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={ContactSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <div className={css.wrapper}>
          <label>
            Name
            <Field className={css.field} type="text" name="userName" />
          </label>
          <ErrorMessage
            name="userName"
            component="span"
            className={css.error}
          />
        </div>
        <div className={css.wrapper}>
          <label>
            Numbers
            <Field className={css.field} type="text" name="phoneNumber" />
            <ErrorMessage
              name="phoneNumber"
              component="span"
              className={css.error}
            />
          </label>
        </div>

        <button className={css.submitBtn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};
export default ContactForm;

ContactForm.proptypes = {
  initialValues: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ),

  onSubmit: PropTypes.func.isRequired,
};
