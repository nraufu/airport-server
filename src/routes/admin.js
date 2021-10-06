import admin from '../controllers/admin';
import validations from '../middlewares/validations';
import verifyToken from '../middlewares/verifyToken';

const adminRouter = ( router ) => {
  router.post( '/admin/login', validations.adminLogin, admin.adminLogin );
  router.patch( '/admin/password', verifyToken, validations.adminPassword, admin.changePassword );
};

export default adminRouter;
