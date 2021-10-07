import mongoose from 'mongoose';

const Arrival = mongoose.model(
  'arrival',
  new mongoose.Schema( {
    airlineLogo: {
      type: String,
      required: true,
    },
    airlineName: {
      type: String,
      required: true,
    },
    airlineWebsite: {
      type: String,
      required: true,
    },
    flight: {
      type: String,
      required: true,
    },
    origin: {
      type: String,
      required: true,
    },
    scheduled: {
      type: String,
      required: true,
    },
    status: {
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

export default Arrival;
