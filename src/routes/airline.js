import validations from '../middlewares/validations';
import airline from '../controllers/airlines';
import verifyToken from '../middlewares/verifyToken';

const airlineRouter = ( router ) => {
  router.post( '/airline', verifyToken, validations.airline, airline.createAirline );
  router.get( '/airline/:id', airline.getOneAirline );
  router.get( '/airlines', airline.getAllAirlines );
  router.patch( '/airline/:id', verifyToken, validations.airline, airline.updateAirline );
  router.delete( '/airline/:id', verifyToken, airline.deleteAirline );
};

export default airlineRouter;
