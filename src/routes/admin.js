import adminLogin from '../controllers/admin';

const adminRouter = ( router ) => {
  router.post( '/admin/login', adminLogin );
};

export default adminRouter;
