import mongoose from 'mongoose';

const Airline = mongoose.model( 'airline', new mongoose.Schema( {
  name: {
    type: String,
    required: true,
    unique: true,
  },
  logoImgUri: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  flights: {
    type: Array,
    default: [],
  },

} ) );

export default Airline;
