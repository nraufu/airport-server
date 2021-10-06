import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import routes from './routes';
import insertAdmin from './seeds/admin';

dotenv.config();

const app = express();
const router = express.Router();
const PORT = process.env.PORT || 5000;

// pass router to routes
routes( router );

app.use( express.json( { limit: '50mb', extended: true } ) );
app.use( express.urlencoded( { limit: '50mb', extended: true } ) );
app.use( cors() );
app.use( '/api/', router );

app.use(
  cors( {
    origin: '*',
    methods: 'GET, HEAD, PUT, PATCH, POST, DELETE, OPTIONS',
    preflightContinue: false,
    optionsSuccessStatus: 204,
  } ),
);

app.use( ( req, res, next ) => {
  res.header( 'Access-Control-Allow-Origin', '*' );
  res.header( 'Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept' );
  next();
} );

app.use( ( req, res, next ) => {
  res.status( 400 ).json( { Error: 'request not found!' } );
  next();
} );

mongoose
  .connect( process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  } )
  .then( () => {
    // insert admin credentials
    insertAdmin();
    console.log( 'database SuccessFully connected!' );
  } );

app.listen( PORT, () => {
  console.log( `Listening on port ${PORT}` );
} );
