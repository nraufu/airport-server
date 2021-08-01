import validations from '../middlewares/validations';
import airline from '../controllers/airlines';

const airlineRouter = ( router ) => {
  router.post( '/airline', validations.airline, airline.createAirline );
};

export default airlineRouter;
