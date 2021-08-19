import React, { useContext } from 'react';
import contactContext from '../../context/contact/ContactContext';

const ContactItem = ({ contact }) => {
  const { name, email, id, type, phone } = contact;

  const ContactContext = useContext(contactContext);
  const { deleteContact, setCurrent, clearCurrent } = ContactContext;
  const onDelete = () => {
    deleteContact(id);
    clearCurrent();
    console.log(ContactContext.contacts);
  };
  const onEdit = () => {
    setCurrent(contact);
  };
  return (
    <div className='card bg-light'>
      <h3 className='text-primary text-left'>
        {name}{' '}
        <span
          style={{ float: 'right' }}
          className={
            'badge ' +
            (type === 'professional' ? 'badge-success' : 'badge-primary')
          }
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </span>
      </h3>
      <ul className='list'>
        {email && (
          <li>
            <i className='fas fa-envelope-open'></i> {email}
          </li>
        )}
        {phone && (
          <li>
            <i className='fas fa-phone'></i> {phone}
          </li>
        )}
      </ul>
      <button className='btn btn-dark btn-sm' onClick={onEdit}>
        Edit
      </button>
      <button className='btn btn-danger btn-sm' onClick={onDelete}>
        Delete
      </button>
    </div>
  );
};

export default ContactItem;
