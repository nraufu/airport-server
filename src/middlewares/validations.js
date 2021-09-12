import Joi from 'joi';
import returnError from '../helpers/returnError';

const validations = {
  adminLogin( req, res, next ) {
    const schema = Joi.object( {
      username: Joi.string().trim().required().messages( {
        'string.empty': 'a valid username is required',
        'any.required': 'username is a required',
      } ),
      password: Joi.string().trim().required().messages( {
        'string.empty': 'a valid password is required',
        'any.required': 'password is a required',
      } ),
    } );

    returnError( req.body, res, schema, next );
  },

  airline( req, res, next ) {
    const schema = Joi.object( {
      name: Joi.string().trim().required().messages( {
        'string.empty': 'a valid name is required',
        'any.required': 'name is a required',
      } ),
      logoImg: Joi.string().trim().required().messages( {
        'string.empty': 'a valid logo is required',
        'any.required': 'logo Image is a required',
      } ),
      country: Joi.string().trim().required().messages( {
        'string.empty': 'a valid country is required',
        'any.required': 'country is a required',
      } ),
      flights: Joi.array().required().messages( {
        'string.empty': 'at least one flight is required',
        'any.required': 'flights is a required',
      } ),
    } );

    returnError( req.body, res, schema, next );
  },
};

export default validations;
