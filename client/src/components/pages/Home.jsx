import React, { useContext } from 'react';
import ContactFilter from '../../context/contact/ContactFilter';
import ContactForm from '../contacts/ContactForm';
import Contacts from '../contacts/Contacts';
import contactContext from '../../context/contact/ContactContext';
const Home = () => {
  const ContactContext = useContext(contactContext);
  const { filtered } = ContactContext;
  return (
    <div className='grid-2'>
      <div>
        <ContactForm />
      </div>
      <div>
        <ContactFilter />
        {filtered !== null ? <Contacts filteris={true} /> : <Contacts />}
      </div>
    </div>
  );
};

export default Home;
