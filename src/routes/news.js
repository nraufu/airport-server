import validations from '../middlewares/validations';
import news from '../controllers/news';
import verifyToken from '../middlewares/verifyToken';

const newsRouter = ( router ) => {
  router.post( '/news', verifyToken, validations.news, news.createNews );
  router.get( '/news/:id', news.getOneNews );
  router.get( '/news', news.getAllNews );
  router.patch( '/news/:id', verifyToken, validations.news, news.updateNews );
  router.delete( '/news/:id', verifyToken, news.deleteNews );
};

export default newsRouter;
