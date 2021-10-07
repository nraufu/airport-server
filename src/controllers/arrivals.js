import Arrival from '../models/arrival';
import response from '../helpers/response';

/**
 * Add a new arrival
 *
 * @param {object} req server request
 * @param {object} res server response
 * @return {object} response object
 */
const createArrival = async ( req, res ) => {
  try {
    const {
      airlineLogo, airlineName, airlineWebsite, flight, origin, scheduled, status,
    } = req.body;
    const arrival = new Arrival( {
      airlineLogo,
      airlineName,
      airlineWebsite,
      flight,
      origin,
      scheduled,
      status,
    } );
    // const isExist = await Arrival.findOne( { airlineName } );
    // if ( isExist )
    // return response( res, 400, 'Error', { message: 'Arrival already registered!' } );
    await arrival.save();
    return response( res, 200, 'Success', { arrival } );
  } catch ( err ) {
    return response( res, 500, 'Error', err );
  }
};

/**
 * Get all arrivals
 *
 * @param {object} req server request
 * @param {object} res server response
 * @return {object} response object
 */
const getAllArrivals = async ( req, res ) => {
  try {
    const arrivals = await Arrival.find();
    return response( res, 200, 'Success', { arrivals } );
  } catch ( err ) {
    return response( res, 500, 'Error', err );
  }
};

/**
 * Get single arrival
 *
 * @param {object} req server request
 * @param {object} res server response
 * @return {object} response object
 */
const getOneArrival = async ( req, res ) => {
  try {
    const { id } = req.params;
    const arrival = await Arrival.findOne( { _id: id } );
    if ( !arrival ) return response( res, 404, 'Error', { message: 'Arrival not found!' } );
    return response( res, 200, 'Success', { arrival } );
  } catch ( err ) {
    return response( res, 500, 'Error', err );
  }
};

/**
 * Update a specific arrival
 *
 * @param {object} req server request
 * @param {object} res server response
 * @return {object} response object
 */
const updateArrival = async ( req, res ) => {
  try {
    const { id } = req.params;
    const {
      airlineLogo, airlineName, airlineWebsite, flight, origin, scheduled, status,
    } = req.body;
    const arrival = await Arrival.findOne( { _id: id } );
    if ( !arrival ) return response( res, 404, 'Error', { message: 'Arrival not found!' } );
    if ( airlineLogo ) {
      arrival.airlineLogo = airlineLogo;
    }

    if ( airlineName ) {
      arrival.airlineName = airlineName;
    }

    if ( airlineWebsite ) {
      arrival.airlineWebsite = airlineWebsite;
    }

    if ( flight ) {
      arrival.flight = flight;
    }

    if ( origin ) {
      arrival.origin = origin;
    }

    if ( scheduled ) {
      arrival.scheduled = scheduled;
    }

    if ( status ) {
      arrival.status = status;
    }

    await arrival.save();
    return response( res, 200, 'Success', { arrival } );
  } catch ( err ) {
    return response( res, 500, 'Error', err );
  }
};

/**
 * Update a specific arrival
 *
 * @param {object} req server request
 * @param {object} res server response
 * @return {object} response object
 */

const deleteArrival = async ( req, res ) => {
  try {
    const { id } = req.params;
    const arrival = await Arrival.findOne( { _id: id } );
    if ( !arrival ) return response( res, 404, 'Error', { message: 'Arrival not found!' } );
    await arrival.remove();
    return response( res, 200, 'Success', { message: 'Arrival deleted successfully!' } );
  } catch ( err ) {
    return response( res, 500, 'Error', err );
  }
};

export default {
  createArrival,
  getAllArrivals,
  getOneArrival,
  updateArrival,
  deleteArrival,
};
