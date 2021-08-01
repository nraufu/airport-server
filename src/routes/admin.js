import adminLogin from '../controllers/admin';
import validations from '../middlewares/validations';

const adminRouter = ( router ) => {
  router.post( '/admin/login', validations.adminLogin, adminLogin );
};

export default adminRouter;
