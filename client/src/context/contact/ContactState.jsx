import React, { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import contactContext from './ContactContext.jsx';
import contactReducer from './ContactReducer.jsx';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_ALERT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
  REMOVE_ALERT,
} from '../types.js';

const ContactState = (props) => {
  const intialState = {
    contacts: [
      {
        id: 1,
        name: 'viren patil',
        email: 'virenpatil1@outlook.com',
        phone: '123456',
        type: 'personal',
      },
      {
        id: 2,
        name: 'apple patil',
        email: 'applepatil1@outlook.com',
        phone: '000000',
        type: 'professional',
      },
      {
        id: 3,
        name: 'vilas patil',
        email: 'vilaspatil1@outlook.com',
        phone: '143456',
        type: 'work',
      },
    ],
    current: null,
    filtered: null,
  };

  const [state, dispatch] = useReducer(contactReducer, intialState);
  // ADD CONTACT
  const addContact = (contact) => {
    contact.id = uuidv4();
    dispatch({ type: ADD_CONTACT, payload: contact });
  };
  // DELETE CONTACT
  const deleteContact = (id) => {
    dispatch({ type: DELETE_CONTACT, payload: id });
  };
  // SET CURRENT CONTACT
  const setCurrent = (contact) => {
    dispatch({ type: SET_CURRENT, payload: contact });
  };
  // CLEAR CURRENT CONTACT
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };
  // UPDATE CONTACT
  const updateContact = (contact) => {
    dispatch({ type: UPDATE_CONTACT, payload: contact });
  };
  // FILTER CONTACT
  const filterContacts = (contact) => {
    dispatch({ type: FILTER_CONTACTS, payload: contact });
  };
  // CLEAR FILTER
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };
  return (
    <contactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        filtered: state.filtered,
        addContact,
        deleteContact,
        setCurrent,
        clearCurrent,
        updateContact,
        filterContacts,
        clearFilter,
      }}
    >
      {props.children}
    </contactContext.Provider>
  );
};

export default ContactState;
