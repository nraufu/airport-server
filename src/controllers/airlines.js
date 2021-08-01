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
      name, logoImg, country, flights,
    } = req.body;
    const airline = new Airline( {
      name,
      logoImgUri: logoImg,
      country,
      flights,
    } );
    await airline.save();
    return response( res, 200, 'Success', { airline } );
  } catch ( err ) {
    return response( res, 500, 'Error', err );
  }
};

export default {
  createAirline,
};
