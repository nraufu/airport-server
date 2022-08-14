import nodemailer from 'nodemailer';

const sendEmail = ( email, subject, text ) => {
  const transporter = nodemailer.createTransport( {
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
      user: 'kigaliairport@gmail.com',
      pass: 'eccrcgzuixshwqhq',
    },
  } );

  const mailOptions = {
    from: '"Kigali International Airport" <info@kia.com>',
    to: email,
    subject,
    text,
  };

  transporter.sendMail( mailOptions, ( error, info ) => {
    if ( error ) {
      console.log( error );
    } else {
      console.log( `Email sent: ${info.response}` );
    }
  } );
};

export default sendEmail;
