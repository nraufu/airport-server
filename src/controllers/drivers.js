import Driver from '../models/driver';
import response from '../helpers/response';

/**
 * Add a new driver
 *
 * @param {object} req server request
 * @param {object} res server response
 * @return {object} response object
 */
const createDriver = async ( req, res ) => {
  try {
    const {
      fullNames, email, phone, carType, plateNumber,
    } = req.body;
    const driver = new Driver( {
      fullNames, email, phone, carType, plateNumber,
    } );
    const isExist = await Driver.findOne( { fullNames } );
    if ( isExist ) {
      return response( res, 400, 'Error', { message: 'Driver already registered!' } );
    }
    await driver.save();
    return response( res, 200, 'Success', { driver } );
  } catch ( err ) {
    return response( res, 500, 'Error', err );
  }
};

/**
 * Get all drivers
 *
 * @param {object} req server request
 * @param {object} res server response
 * @return {object} response object
 */
const getAllDrivers = async ( req, res ) => {
  try {
    const drivers = await Driver.find();
    return response( res, 200, 'Success', { drivers } );
  } catch ( err ) {
    return response( res, 500, 'Error', err );
  }
};

/**
 * Get single driver
 *
 * @param {object} req server request
 * @param {object} res server response
 * @return {object} response object
 */
const getOneDriver = async ( req, res ) => {
  try {
    const { id } = req.params;
    const driver = await Driver.findOne( { _id: id } );
    if ( !driver ) return response( res, 404, 'Error', { message: 'Driver not found!' } );
    return response( res, 200, 'Success', { driver } );
  } catch ( err ) {
    return response( res, 500, 'Error', err );
  }
};

/**
 * Update a specific driver
 *
 * @param {object} req server request
 * @param {object} res server response
 * @return {object} response object
 */
const updateDriver = async ( req, res ) => {
  try {
    const { id } = req.params;
    const {
      fullNames, email, phone, carType, plateNumber,
    } = req.body;
    const driver = await Driver.findOne( { _id: id } );
    if ( !driver ) return response( res, 404, 'Error', { message: 'Driver not found!' } );

    if ( fullNames ) driver.fullNames = fullNames;
    if ( email ) driver.email = email;
    if ( phone ) driver.phone = phone;
    if ( carType ) driver.carType = carType;
    if ( plateNumber ) driver.plateNumber = plateNumber;

    await driver.save();
    return response( res, 200, 'Success', { driver } );
  } catch ( err ) {
    return response( res, 500, 'Error', err );
  }
};

/**
 * Update a specific driver
 *
 * @param {object} req server request
 * @param {object} res server response
 * @return {object} response object
 */

const deleteDriver = async ( req, res ) => {
  try {
    const { id } = req.params;
    const driver = await Driver.findOne( { _id: id } );
    if ( !driver ) return response( res, 404, 'Error', { message: 'Driver not found!' } );
    await driver.remove();
    return response( res, 200, 'Success', { message: 'Driver deleted successfully!' } );
  } catch ( err ) {
    return response( res, 500, 'Error', err );
  }
};

export default {
  createDriver,
  getAllDrivers,
  getOneDriver,
  updateDriver,
  deleteDriver,
};
