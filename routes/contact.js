import express from 'express';
import User from '../models/User.js';
import Contact from '../models/Contact.js';
import { check, validationResult } from 'express-validator';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

//@route Get api/contacts
//@desc Get all users
//@access Private
router.get('/', authMiddleware, async (req, res) => {
  try {
    const contacts = await Contact.find({ user: req.user.id }).sort({
      date: -1,
    });
    res.send(contacts);
  } catch (error) {
    console.error(error.message);
    res.status(400).send('Server error');
  }
});

//@route POST api/contacts
//@desc Add new contact
//@access Private
router.post(
  '/',
  [authMiddleware, [check('name', 'Name is required').not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { name, email, phone, type } = req.body;
    try {
      const newContact = new Contact({
        name,
        email,
        phone,
        type,
        user: req.user.id,
      });
      const contact = await newContact.save();
      console.log(typeof contact.name);
      res.send(contact);
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server Error');
    }
  }
);

//@route Put api/contacts/:id
//@desc Update the contact
//@access Private
router.put('/:id', authMiddleware, async (req, res) => {
  const { name, email, phone, type } = req.body;
  const contactField = {};
  if (name) contactField.name = name;
  if (email) contactField.email = email;
  if (phone) contactField.phone = phone;
  if (type) contactField.type = type;

  try {
    let contact = await Contact.findById(req.params.id);

    if (!contact)
      return res.status(400).json({ messsage: 'Contact not found' });
    // Make sure the user owns the contact to edit them
    if (contact.user.toString() !== req.user.id) {
      return res.status(401).json({ message: 'Not authorized' });
    }

    contact = await Contact.findByIdAndUpdate(
      req.params.id,
      { $set: contactField },
      { new: true }
    );
    res.json(contact);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

//@route Delete api/contacts/:id
//@desc Delete the contact
//@access Private
router.delete('/:id', authMiddleware, async (req, res) => {
  try {
    let contact = await Contact.findById(req.params.id);

    if (!contact)
      return res.status(400).json({ messsage: 'Contact not found' });
    // Make sure the user owns the contact to edit them
    if (contact.user.toString() !== req.user.id) {
      return res.status(401).json({ message: 'Not authorized' });
    }

    await Contact.findByIdAndRemove(req.params.id);
    res.json({ message: 'deleted' });

    res.json(contact);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
  res.send('Delete coontact');
});

export default router;
