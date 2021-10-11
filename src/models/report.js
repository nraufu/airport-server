import mongoose from 'mongoose';

const Report = mongoose.model(
  'report',
  new mongoose.Schema( {
    airlineLogo: {
      type: String,
      required: true,
    },
    airlineEmail: {
      type: String,
      required: true,
    },
    pdf: {
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

export default Report;
