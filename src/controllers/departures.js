import Departure from '../models/departure';
import response from '../helpers/response';

/**
 * Add a new departure
 *
 * @param {object} req server request
 * @param {object} res server response
 * @return {object} response object
 */
const createDeparture = async ( req, res ) => {
  try {
    const {
      airline, airlineName, flight, destination, scheduled, status,
    } = req.body;
    const departure = new Departure( {
      airline,
      airlineName,
      flight,
      destination,
      scheduled,
      status,
    } );
    const isExist = await Departure.findOne( { airlineName } );
    if ( isExist ) return response( res, 400, 'Error', { message: 'Departure already registered!' } );
    await departure.save();
    return response( res, 200, 'Success', { departure } );
  } catch ( err ) {
    return response( res, 500, 'Error', err );
  }
};

/**
 * Get all departures
 *
 * @param {object} req server request
 * @param {object} res server response
 * @return {object} response object
 */
const getAllDepartures = async ( req, res ) => {
  try {
    const departures = await Departure.find();
    return response( res, 200, 'Success', { departures } );
  } catch ( err ) {
    return response( res, 500, 'Error', err );
  }
};

/**
 * Get single departure
 *
 * @param {object} req server request
 * @param {object} res server response
 * @return {object} response object
 */
const getOneDeparture = async ( req, res ) => {
  try {
    const { id } = req.params;
    const departure = await Departure.findOne( { _id: id } );
    if ( !departure ) return response( res, 404, 'Error', { message: 'Departure not found!' } );
    return response( res, 200, 'Success', { departure } );
  } catch ( err ) {
    return response( res, 500, 'Error', err );
  }
};

/**
 * Update a specific departure
 *
 * @param {object} req server request
 * @param {object} res server response
 * @return {object} response object
 */
const updateDeparture = async ( req, res ) => {
  try {
    const { id } = req.params;
    const {
      airline, airlineName, flight, destination, scheduled, status,
    } = req.body;
    const departure = await Departure.findOne( { _id: id } );
    if ( !departure ) return response( res, 404, 'Error', { message: 'Departure not found!' } );
    if ( airline ) {
      departure.airline = airline;
    }

    if ( airlineName ) {
      departure.airlineName = airlineName;
    }

    if ( flight ) {
      departure.flight = flight;
    }

    if ( destination ) {
      departure.destination = destination;
    }

    if ( scheduled ) {
      departure.scheduled = scheduled;
    }

    if ( status ) {
      departure.status = status;
    }

    await departure.save();
    return response( res, 200, 'Success', { departure } );
  } catch ( err ) {
    return response( res, 500, 'Error', err );
  }
};

/**
 * Update a specific departure
 *
 * @param {object} req server request
 * @param {object} res server response
 * @return {object} response object
 */

const deleteDeparture = async ( req, res ) => {
  try {
    const { id } = req.params;
    const departure = await Departure.findOne( { _id: id } );
    if ( !departure ) return response( res, 404, 'Error', { message: 'Departure not found!' } );
    await departure.remove();
    return response( res, 200, 'Success', { message: 'Departure deleted successfully!' } );
  } catch ( err ) {
    return response( res, 500, 'Error', err );
  }
};

export default {
  createDeparture,
  getAllDepartures,
  getOneDeparture,
  updateDeparture,
  deleteDeparture,
};