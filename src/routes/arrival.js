import validations from '../middlewares/validations';
import arrival from '../controllers/arrivals';
import verifyToken from '../middlewares/verifyToken';

const arrivalRouter = ( router ) => {
  router.post( '/arrival', verifyToken, validations.arrival, arrival.createArrival );
  router.get( '/arrival/:id', arrival.getOneArrival );
  router.get( '/arrivals', arrival.getAllArrivals );
  router.patch( '/arrival/:id', verifyToken, validations.arrival, arrival.updateArrival );
  router.delete( '/arrival/:id', verifyToken, arrival.deleteArrival );
};

export default arrivalRouter;
