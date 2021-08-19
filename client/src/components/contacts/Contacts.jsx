import React, { Fragment, useContext } from 'react';
import contactContext from '../../context/contact/ContactContext';
import ContactItem from './ContactItem';
const Contacts = () => {
  const ContactContext = useContext(contactContext);
  const { contacts } = ContactContext;

  return (
    <Fragment>
      {contacts.map((contact) => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </Fragment>
  );
};

export default Contacts;
