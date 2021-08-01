/**
 *  Send response message
 *
 * @param {object} res - response object
 * @param {number} statusCode - http status code
 * @param {string} statusMessage - http status message
 * @param {object} data - response data
 * @returns {object} returns response
 *
 *
 */
const response = ( res, statusCode, statusMessage, data ) => res.status( statusCode ).json( {
  status: statusMessage,
  data,
} );

export default response;
