import Booking from '../models/booking';
import Driver from '../models/driver';
import response from '../helpers/response';
import sendEmail from '../helpers/sendEmail';

/**
 * Add a new booking
 *
 * @param {object} req server request
 * @param {object} res server response
 * @return {object} response object
 */
const createBooking = async ( req, res ) => {
  try {
    const {
      fullNames, carType, pickupAddress, date, time, phone, email,
    } = req.body;
    const booking = new Booking( {
      fullNames, carType, pickupAddress, date, time, phone, email,
    } );

    // send email to client email address
    sendEmail( email, 'Taxi booking approval', 'Your taxi booking has been approved' );

    await booking.save();
    return response( res, 200, 'Success', { booking } );
  } catch ( err ) {
    return response( res, 500, 'Error', err );
  }
};

/**
 * Get all bookings
 *
 * @param {object} req server request
 * @param {object} res server response
 * @return {object} response object
 */
const getAllBookings = async ( req, res ) => {
  try {
    const bookings = await Booking.find();
    return response( res, 200, 'Success', { bookings } );
  } catch ( err ) {
    return response( res, 500, 'Error', err );
  }
};

/**
 * approve booking
 *
 * @param {object} req server request
 * @param {object} res server response
 * @return {object} response object
 */
const approveBooking = async ( req, res ) => {
  try {
    const { bookingID, driverID } = req.body;
    const booking = await Booking.findOne( { _id: bookingID } );
    if ( !booking ) return response( res, 404, 'Error', { message: 'Booking not found!' } );

    const driver = await Driver.findOne( { _id: driverID } );
    if ( !driver ) return response( res, 404, 'Error', { message: 'Driver not found!' } );

    // send approval email to client email address
    sendEmail( booking.email, 'Taxi booking approval', `Your taxi booking has been approved. the driver <b>${driver.fullNames}</b> was assigned to you with the plate number <b>${driver.plateNumber}</b>. the following are his contacts tel: <b>${driver.phone}</b>` );

    // send email to driver email address
    sendEmail( driver.email, 'Taxi booking approval', `You have been assigned to a booking. the client is <b>${booking.fullNames}</b> to be picked up at this address: <b>${booking.pickupAddress}</b> on <b>${booking.date}</b> at <b>${booking.time}</b>. the following are his contacts tel: <b>${booking.phone}</b>` );

    return response( res, 200, 'Success', { message: 'Booking approval successfull !' } );
  } catch ( err ) {
    return response( res, 500, 'Error', err );
  }
};

/**
 * reject booking
 *
 * @param {object} req server request
 * @param {object} res server response
 * @return {object} response object
 */
const rejectBooking = async ( req, res ) => {
  try {
    const { bookingID } = req.body;
    const booking = await Booking.findOne( { _id: bookingID } );
    if ( !booking ) return response( res, 404, 'Error', { message: 'Booking not found!' } );

    // send approval email to client email address
    sendEmail( booking.email, 'About Taxi Booking', 'Sorry, we are unable to allocate you a taxi at the moment. Thank you again for choosing us !' );

    return response( res, 200, 'Success', { message: 'Booking rejected successfully!' } );
  } catch ( err ) {
    return response( res, 500, 'Error', err );
  }
};

/**
 * Get single booking
 *
 * @param {object} req server request
 * @param {object} res server response
 * @return {object} response object
 */
const getOneBooking = async ( req, res ) => {
  try {
    const { id } = req.params;
    const booking = await Booking.findOne( { _id: id } );
    if ( !booking ) return response( res, 404, 'Error', { message: 'Booking not found!' } );
    return response( res, 200, 'Success', { booking } );
  } catch ( err ) {
    return response( res, 500, 'Error', err );
  }
};

/**
 * Update a specific booking
 *
 * @param {object} req server request
 * @param {object} res server response
 * @return {object} response object
 */

const deleteBooking = async ( req, res ) => {
  try {
    const { id } = req.params;
    const booking = await Booking.findOne( { _id: id } );
    if ( !booking ) return response( res, 404, 'Error', { message: 'Booking not found!' } );
    await booking.remove();
    return response( res, 200, 'Success', { message: 'Booking deleted successfully!' } );
  } catch ( err ) {
    return response( res, 500, 'Error', err );
  }
};

export default {
  createBooking,
  getAllBookings,
  getOneBooking,
  deleteBooking,
  approveBooking,
  rejectBooking,
};
