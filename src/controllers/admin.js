import Admin from '../models/admin';
import assignToken from '../helpers/assignToken';

/**
 *
 * @params {object} req server request
 * @params {object} res server response
 * @return {object} response object
*/

const adminLogin = async ( req, res ) => {
  const { username, password } = req.body;
  const admin = await Admin.findOne( { username } );
  if ( !admin ) return res.status( 400 ).json( { status: 400, error: "User doesn't exist" } );
  if ( admin.password !== password ) return res.status( 400 ).json( { status: 400, error: 'Incorrect Password' } );
  const token = assignToken( { admin: admin.username } );
  return res.status( 200 ).json( { status: 200, message: 'successfully Login', token } );
};

export default adminLogin;
