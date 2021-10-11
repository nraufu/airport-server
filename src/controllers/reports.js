import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import Report from '../models/report';
import response from '../helpers/response';

dotenv.config();

/**
 * Add a new report
 *
 * @param {object} req server request
 * @param {object} res server response
 * @return {object} response object
 */
const createReport = async ( req, res ) => {
  try {
    const { airlineEmail, airlineLogo, pdf } = req.body;
    const report = new Report( {
      airlineEmail,
      airlineLogo,
      pdf,
    } );

    // send email to airline email address with pdf attached
    const transporter = nodemailer.createTransport( {
      host: 'smtp.gmail.com',
      port: 465,
      auth: {
        user: 'kigaliairport@gmail.com',
        pass: 'Bit*2021',
      },
    } );

    const mailOptions = {
      from: '"Kigali International Airport" <info@kia.com>',
      to: airlineEmail,
      subject: 'Company flights report',
      text: 'Check out this attached pdf file for your flights report',
      attachments: [
        {
          filename: 'flight-report.pdf',
          path: pdf,
          contentType: 'application/pdf',
        },
      ],
    };

    transporter.sendMail( mailOptions, ( error, info ) => {
      if ( error ) {
        console.log( error );
      } else {
        console.log( `Email sent: ${info.response}` );
      }
    } );

    await report.save();
    return response( res, 200, 'Success', { report } );
  } catch ( err ) {
    return response( res, 500, 'Error', err );
  }
};

/**
 * Get all reports
 *
 * @param {object} req server request
 * @param {object} res server response
 * @return {object} response object
 */
const getAllReports = async ( req, res ) => {
  try {
    const reports = await Report.find();
    return response( res, 200, 'Success', { reports } );
  } catch ( err ) {
    return response( res, 500, 'Error', err );
  }
};

const deleteReport = async ( req, res ) => {
  try {
    const { id } = req.params;
    const report = await Report.findOne( { _id: id } );
    if ( !report ) return response( res, 404, 'Error', { message: 'report not found!' } );
    await report.remove();
    return response( res, 200, 'Success', { message: 'Report deleted successfully!' } );
  } catch ( err ) {
    return response( res, 500, 'Error', err );
  }
};

export default {
  createReport,
  getAllReports,
  deleteReport,
};
