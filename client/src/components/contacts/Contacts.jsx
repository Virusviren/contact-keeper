import React, { Fragment, useContext } from 'react';
import contactContext from '../../context/contact/ContactContext';
import ContactItem from './ContactItem';
const Contacts = ({ filteris }) => {
  const ContactContext = useContext(contactContext);
  const { contacts, filtered } = ContactContext;

  if (contacts.length === 0) {
    return <h4>Please Add Contact</h4>;
  }

  if (filteris === true) {
    return (
      <Fragment>
        {filtered.map((contact) => (
          <ContactItem key={contact.id} contact={contact} />
        ))}
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        {contacts.map((contact) => (
          <ContactItem key={contact.id} contact={contact} />
        ))}
      </Fragment>
    );
  }
};

export default Contacts;
