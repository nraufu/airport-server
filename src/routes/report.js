import report from '../controllers/reports';
import verifyToken from '../middlewares/verifyToken';

const reportRouter = ( router ) => {
  router.post( '/report', verifyToken, report.createReport );
  router.get( '/reports', report.getAllReports );
  router.delete( '/report/:id', report.deleteReport );
};

export default reportRouter;
