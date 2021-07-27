import express from 'express';

const router = express.Router();

//@route Get api/contacts
//@desc Get all users
//@access Private
router.get('/', (req, res) => {
  res.send('Get all contacts');
});

//@route POST api/contacts
//@desc Add new contact
//@access Private
router.post('/', (req, res) => {
  res.send('Add new contact ');
});

//@route Put api/contacts/:id
//@desc Update the contact
//@access Private
router.put('/:id', (req, res) => {
  res.send('Update coontact');
});

//@route Delete api/contacts/:id
//@desc Delete the contact
//@access Private
router.delete('/:id', (req, res) => {
  res.send('Delete coontact');
});

export default router;
