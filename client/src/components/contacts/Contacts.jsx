import React, { Fragment, useContext } from 'react';
import contactContext from '../../context/contact/ContactContext';
import ContactItem from './ContactItem';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
const Contacts = ({ filteris }) => {
  const ContactContext = useContext(contactContext);
  const { contacts, filtered } = ContactContext;

  if (contacts.length === 0) {
    return <h4>Please Add Contact</h4>;
  }

  if (filteris === true) {
    return (
      <Fragment>
        <TransitionGroup>
          {filtered.map((contact) => (
            <CSSTransition key={contact.id} timeout={500} classNames='item'>
              {' '}
              <ContactItem contact={contact} />
            </CSSTransition>
          ))}
        </TransitionGroup>
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <TransitionGroup>
          {contacts.map((contact) => (
            <CSSTransition key={contact.id} timeout={500} classNames='item'>
              <ContactItem contact={contact} />
            </CSSTransition>
          ))}
        </TransitionGroup>
      </Fragment>
    );
  }
};

export default Contacts;
