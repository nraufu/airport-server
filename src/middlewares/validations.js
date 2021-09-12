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

  departure( req, res, next ) {
    const schema = Joi.object( {
      airline: Joi.string().trim().required().messages( {
        'string.empty': 'a valid airline is required',
        'any.required': 'name is a required',
      } ),
      airlineName: Joi.string().trim().required().messages( {
        'string.empty': 'a valid Airline Name is required',
        'any.required': 'Airline Name is a required',
      } ),
      destination: Joi.string().trim().required().messages( {
        'string.empty': 'a valid destination is required',
        'any.required': 'destination is a required',
      } ),
      flight: Joi.string().required().messages( {
        'string.empty': 'A valid flight is required',
        'any.required': 'flight is a required',
      } ),
      scheduled: Joi.string().required().messages( {
        'string.empty': 'A valid scheduled is required',
        'any.required': 'scheduled is a required',
      } ),
      status: Joi.string().trim().required().messages( {
        'string.empty': 'A valid status is required',
        'any.required': 'status is a required',
      } ),
    } );

    returnError( req.body, res, schema, next );
  },

  arrival( req, res, next ) {
    const schema = Joi.object( {
      airline: Joi.string().trim().required().messages( {
        'string.empty': 'a valid airline is required',
        'any.required': 'name is a required',
      } ),
      airlineName: Joi.string().trim().required().messages( {
        'string.empty': 'a valid Airline Name is required',
        'any.required': 'Airline Name is a required',
      } ),
      origin: Joi.string().trim().required().messages( {
        'string.empty': 'a valid origin is required',
        'any.required': 'origin is a required',
      } ),
      flight: Joi.string().required().messages( {
        'string.empty': 'A valid flight is required',
        'any.required': 'flight is a required',
      } ),
      scheduled: Joi.string().required().messages( {
        'string.empty': 'A valid scheduled is required',
        'any.required': 'scheduled is a required',
      } ),
      status: Joi.string().trim().required().messages( {
        'string.empty': 'A valid status is required',
        'any.required': 'status is a required',
      } ),
    } );

    returnError( req.body, res, schema, next );
  },
};

export default validations;
