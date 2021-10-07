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

  adminPassword( req, res, next ) {
    const schema = Joi.object( {
      oldPassword: Joi.string().trim().required().messages( {
        'string.empty': 'a valid old password is required',
        'any.required': 'old password is a required',
      } ),
      newPassword: Joi.string().trim().required().messages( {
        'string.empty': 'a valid new password is required',
        'any.required': 'new password is a required',
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
      website: Joi.string().trim().required().messages( {
        'string.empty': 'a valid website is required',
        'any.required': 'website is a required',
      } ),
      headQuarterLocation: Joi.string().trim().required().messages( {
        'string.empty': 'a valid headQuarterLocation is required',
        'any.required': 'headQuarterLocation is a required',
      } ),
      phone: Joi.string().trim().required().messages( {
        'string.empty': 'a valid phone is required',
        'any.required': 'phone is a required',
      } ),
      email: Joi.string().trim().required().messages( {
        'string.empty': 'a valid email is required',
        'any.required': 'email is a required',
      } ),
    } );

    returnError( req.body, res, schema, next );
  },

  departure( req, res, next ) {
    const schema = Joi.object( {
      airlineLogo: Joi.string().trim().required().messages( {
        'string.empty': 'a valid airline Logo is required',
        'any.required': 'airline Logo is a required',
      } ),
      airlineName: Joi.string().trim().required().messages( {
        'string.empty': 'a valid Img is required',
        'any.required': 'Img is a required',
      } ),
      airlineWebsite: Joi.string().trim().required().messages( {
        'string.empty': 'a valid website is required',
        'any.required': 'website is a required',
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
      airlineLogo: Joi.string().trim().required().messages( {
        'string.empty': 'a valid Airline Logo is required',
        'any.required': 'Airline Logo is a required',
      } ),
      airlineName: Joi.string().trim().required().messages( {
        'string.empty': 'a valid Img is required',
        'any.required': 'Img is a required',
      } ),
      airlineWebsite: Joi.string().trim().required().messages( {
        'string.empty': 'a valid website is required',
        'any.required': 'website is a required',
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

  news( req, res, next ) {
    const schema = Joi.object( {
      title: Joi.string().trim().required().messages( {
        'string.empty': 'a valid Title is required',
        'any.required': 'Title is a required',
      } ),
      img: Joi.string().trim().required().messages( {
        'string.empty': 'a valid Img is required',
        'any.required': 'Img is a required',
      } ),
      description: Joi.string().trim().required().messages( {
        'string.empty': 'a valid Description is required',
        'any.required': 'Description is a required',
      } ),
      body: Joi.string().required().messages( {
        'string.empty': 'A valid Body is required',
        'any.required': 'Body is a required',
      } ),
      thumbnail: Joi.string().required().messages( {
        'string.empty': 'A valid Thumbnail is required',
        'any.required': 'Thumbnail is a required',
      } ),
    } );

    returnError( req.body, res, schema, next );
  },
};

export default validations;
