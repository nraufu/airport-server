import validations from '../middlewares/validations';
import departure from '../controllers/departures';
import verifyToken from '../middlewares/verifyToken';

const departureRouter = ( router ) => {
  router.post( '/departure', verifyToken, validations.departure, departure.createDeparture );
  router.get( '/departure/:id', departure.getOneDeparture );
  router.get( '/departures', departure.getAllDepartures );
  router.patch( '/departure/:id', verifyToken, validations.departure, departure.updateDeparture );
  router.delete( '/departure/:id', verifyToken, departure.deleteDeparture );
};

export default departureRouter;
