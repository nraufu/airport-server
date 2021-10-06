import Admin from '../models/admin';
import assignToken from '../helpers/assignToken';
import response from '../helpers/response';

/**
 * Admin login
 *
 * @param {object} req server request
 * @param {object} res server response
 * @return {object} response object
 */

const adminLogin = async ( req, res ) => {
  const { username, password } = req.body;
  const admin = await Admin.findOne( { username } );
  if ( !admin ) return response( res, 400, 'Error', { message: "Admin doesn't exist" } );
  if ( admin.password !== password ) return response( res, 400, 'Error', { message: 'Wrong password' } );
  const token = assignToken( { admin: admin.username } );
  return response( res, 200, 'Success', { message: 'successfully Login', token } );
};

/**
 * change password for admin
 *
 * @param {object} req server request
 * @param {object} res server response
 * @return {object} response object
 */

const changePassword = async ( req, res ) => {
  const { oldPassword, newPassword } = req.body;
  const admin = await Admin.findOne( { username: req?.authorizedUser?.admin } );
  if ( !admin ) return response( res, 400, 'Error', { message: "Admin doesn't exist" } );

  if ( admin.password !== oldPassword ) return response( res, 400, 'Error', { message: 'Wrong password' } );

  if ( req.body.newPassword === oldPassword ) {
    return response( res, 400, 'Error', {
      message: 'New password cannot be the same as old password',
    } );
  }
  admin.password = newPassword;
  await admin.save();
  return response( res, 200, 'Success', { message: 'Password changed successfully' } );
};

export default { adminLogin, changePassword };
