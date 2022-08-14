import mongoose from 'mongoose';

const Driver = mongoose.model(
  'driver',
  new mongoose.Schema( {
    fullNames: {
      type: String,
      required: true,
    },
    carType: {
      type: String,
      required: true,
    },
    plateNumber: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  } ),
);

export default Driver;
