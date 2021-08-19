import React, { useState, useContext, useEffect } from 'react';
import contactContext from '../../context/contact/ContactContext';

const ContactForm = () => {
  const ContactContext = useContext(contactContext);
  const { addContact, current } = ContactContext;

  useEffect(() => {
    if (current !== null) {
      console.log('Viren');
      console.log(current);
      setContact(current);
    } else {
      setContact({
        name: '',
        email: '',
        phone: '',
        type: 'personal',
      });
    }
  }, [ContactContext, current]);

  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'personal',
  });

  const { name, email, phone, type } = contact;
  const onSubmit = (e) => {
    e.preventDefault();
    addContact(contact);
    setContact({
      name: '',
      email: '',
      phone: '',
      type: 'personal',
    });
  };
  const onChange = (e) =>
    setContact({ ...contact, [e.target.name]: e.target.value });
  return (
    <form onSubmit={onSubmit}>
      <h2 className='tex-primary'>Add Contact Details</h2>
      <input
        type='text'
        placeholder='Name'
        name='name'
        value={name}
        onChange={onChange}
      ></input>
      <input
        type='email'
        placeholder='Email'
        name='email'
        value={email}
        onChange={onChange}
      ></input>
      <input
        type='text'
        placeholder='Phone'
        name='phone'
        value={phone}
        onChange={onChange}
      ></input>
      <h5>Contact Type</h5>
      <input
        type='radio'
        name='type'
        value='personal'
        checked={type === 'personal'}
        onChange={onChange}
      />{' '}
      Personal{'  '}
      <input
        type='radio'
        name='type'
        value='professional'
        checked={type === 'professional'}
        onChange={onChange}
      />{' '}
      Professional{' '}
      <div>
        <input
          type='submit'
          value='Add Contact'
          className='btn btn-primary btn-block'
        />
      </div>
    </form>
  );
};

export default ContactForm;
