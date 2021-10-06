import Airline from '../models/airline';
import response from '../helpers/response';

/**
 * Add a new airline
 *
 * @param {object} req server request
 * @param {object} res server response
 * @return {object} response object
 */
const createAirline = async ( req, res ) => {
  try {
    const {
      name, logoImg, country, flights, website, headQuarterLocation, phone, email,
    } = req.body;
    const airline = new Airline( {
      name,
      logoImgUri: logoImg,
      country,
      flights,
      website,
      headQuarterLocation,
      phone,
      email,
    } );
    const isExist = await Airline.findOne( { name } );
    if ( isExist ) return response( res, 400, 'Error', { message: 'Airline already registered!' } );
    await airline.save();
    return response( res, 200, 'Success', { airline } );
  } catch ( err ) {
    return response( res, 500, 'Error', err );
  }
};

/**
 * Get all airlines
 *
 * @param {object} req server request
 * @param {object} res server response
 * @return {object} response object
 */
const getAllAirlines = async ( req, res ) => {
  try {
    const airlines = await Airline.find();
    return response( res, 200, 'Success', { airlines } );
  } catch ( err ) {
    return response( res, 500, 'Error', err );
  }
};

/**
 * Get single airline
 *
 * @param {object} req server request
 * @param {object} res server response
 * @return {object} response object
 */
const getOneAirline = async ( req, res ) => {
  try {
    const { id } = req.params;
    const airline = await Airline.findOne( { _id: id } );
    if ( !airline ) return response( res, 404, 'Error', { message: 'Airline not found!' } );
    return response( res, 200, 'Success', { airline } );
  } catch ( err ) {
    return response( res, 500, 'Error', err );
  }
};

/**
 * Update a specific airline
 *
 * @param {object} req server request
 * @param {object} res server response
 * @return {object} response object
 */
const updateAirline = async ( req, res ) => {
  try {
    const { id } = req.params;
    const {
      name, logoImg, country, flights, website, headQuarterLocation, phone, email,
    } = req.body;
    const airline = await Airline.findOne( { _id: id } );
    if ( !airline ) return response( res, 404, 'Error', { message: 'Airline not found!' } );
    if ( name ) {
      airline.name = name;
    }

    if ( country ) {
      airline.country = country;
    }

    if ( logoImg ) {
      airline.logoImgUri = logoImg;
    }

    if ( flights ) {
      airline.flights = flights;
    }

    if ( website ) {
      airline.website = website;
    }

    if ( headQuarterLocation ) {
      airline.headQuarterLocation = headQuarterLocation;
    }

    if ( email ) {
      airline.email = email;
    }

    if ( phone ) {
      airline.phone = phone;
    }

    await airline.save();
    return response( res, 200, 'Success', { airline } );
  } catch ( err ) {
    return response( res, 500, 'Error', err );
  }
};

/**
 * Update a specific airline
 *
 * @param {object} req server request
 * @param {object} res server response
 * @return {object} response object
 */

const deleteAirline = async ( req, res ) => {
  try {
    const { id } = req.params;
    const airline = await Airline.findOne( { _id: id } );
    if ( !airline ) return response( res, 404, 'Error', { message: 'Airline not found!' } );
    await airline.remove();
    return response( res, 200, 'Success', { message: 'Airline deleted successfully!' } );
  } catch ( err ) {
    return response( res, 500, 'Error', err );
  }
};

export default {
  createAirline,
  getAllAirlines,
  getOneAirline,
  updateAirline,
  deleteAirline,
};
