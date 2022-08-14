import validations from '../middlewares/validations';
import booking from '../controllers/bookings';
import verifyToken from '../middlewares/verifyToken';

const bookingRouter = ( router ) => {
  router.post( '/booking', validations.booking, booking.createBooking );
  router.post( '/booking/approve', verifyToken, booking.approveBooking );
  router.post( '/booking/reject', verifyToken, booking.rejectBooking );
  router.get( '/booking/:id', booking.getOneBooking );
  router.get( '/bookings', booking.getAllBookings );
  router.delete( '/booking/:id', verifyToken, booking.deleteBooking );
};

export default bookingRouter;
