import validations from '../middlewares/validations';
import driver from '../controllers/drivers';
import verifyToken from '../middlewares/verifyToken';

const driverRouter = ( router ) => {
  router.post( '/driver', verifyToken, validations.driver, driver.createDriver );
  router.get( '/driver/:id', driver.getOneDriver );
  router.get( '/drivers', driver.getAllDrivers );
  router.patch( '/driver/:id', verifyToken, validations.driver, driver.updateDriver );
  router.delete( '/driver/:id', verifyToken, driver.deleteDriver );
};

export default driverRouter;
