import mongoose from 'mongoose';

const Admin = mongoose.model( 'admin', new mongoose.Schema( {
  id: mongoose.Schema.ObjectId,
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
} ) );

export default Admin;
