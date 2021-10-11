import adminRouter from './admin';
import airlineRouter from './airline';
import departureRouter from './departure';
import arrivalRouter from './arrival';
import newsRouter from './news';
import reportRouter from './report';

const routes = ( router ) => {
  router.route( '/' ).get( ( req, res ) => {
    res.json( 'Welcome to kigali Airport International API 👋!' );
  } );

  // admin route
  adminRouter( router );

  // airline route
  airlineRouter( router );

  // departure route
  departureRouter( router );

  // arrival route
  arrivalRouter( router );

  // news route
  newsRouter( router );

  // report route
  reportRouter( router );
};

export default routes;
