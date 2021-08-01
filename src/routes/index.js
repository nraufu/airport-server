import adminRouter from './admin';
import airlineRouter from './airline';

const routes = ( router ) => {
  router.route( '/' ).get( ( req, res ) => {
    res.json( 'Welcome to kigali Airport International API 👋!' );
  } );

  // admin route
  adminRouter( router );
  airlineRouter( router );
};

export default routes;
