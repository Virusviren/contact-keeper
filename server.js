import express from 'express';
import connectDB from './config/db.js';
import users from './routes/users.js';
import auth from './routes/auth.js';
import contacts from './routes/contact.js';
const app = express();
//Connect Database
connectDB();
//Init Middelware
app.use(express.json({ extended: false }));

//Defining the Routes
app.use('/api/users', users);
app.use('/api/auth', auth);
app.use('/api/contacts', contacts);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
