import mongoose from 'mongoose';
import config from 'config';

const db = config.get('mongoURI');

const connectDB = async () => {
  try {
    mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true });
    mongoose.set('useCreateIndex', true);
    console.log('DB connected');
  } catch (error) {
    console.error(err.message);
    process.exit(1);
  }
};

export default connectDB;
