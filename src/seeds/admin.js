import dotenv from 'dotenv';
import Admin from '../models/admin';

dotenv.config();

const refreshDb = async () => {
  await Admin.deleteOne( { username: process.env.ADMIN_USERNAME } );
};

const insertAdmin = () => {
  refreshDb();

  const newLogin = new Admin( {
    username: process.env.ADMIN_USERNAME,
    password: process.env.ADMIN_PASSWORD,
  } );

  newLogin.save();
};

export default insertAdmin;
