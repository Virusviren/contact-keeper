import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_ALERT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CURRENT,
  FILTER_CURRENT,
  CLEAR_FILTER,
  REMOVE_ALERT,
} from '../types.js';
const contactReducer = (state, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
      };
    case CLEAR_CURRENT:
      return {
        current: null,
      };
    default:
      return state;
  }
};

export default contactReducer;
