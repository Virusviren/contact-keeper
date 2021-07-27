import express from 'express';

const router = express.Router();
//@route Get api/users
//@desc Get logged in User
//@access Private
router.get('/', (req, res) => {
  res.send('Get logged in user ');
});

//@route POST api/users
//@desc Register a user
//@access Public
router.post('/', (req, res) => {
  res.send('Register a user');
});
export default router;
