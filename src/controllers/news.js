import News from '../models/news';
import response from '../helpers/response';

/**
 * Add a new news
 *
 * @param {object} req server request
 * @param {object} res server response
 * @return {object} response object
 */
const createNews = async ( req, res ) => {
  try {
    const {
      title, img, description, body, thumbnail,
    } = req.body;
    const news = new News( {
      title,
      img,
      description,
      body,
      thumbnail,
    } );
    const isExist = await News.findOne( { title } );
    if ( isExist ) return response( res, 400, 'Error', { message: 'News already registered!' } );
    await news.save();
    return response( res, 200, 'Success', { news } );
  } catch ( err ) {
    return response( res, 500, 'Error', err );
  }
};

/**
 * Get all news
 *
 * @param {object} req server request
 * @param {object} res server response
 * @return {object} response object
 */
const getAllNews = async ( req, res ) => {
  try {
    const news = await News.find();
    return response( res, 200, 'Success', { news } );
  } catch ( err ) {
    return response( res, 500, 'Error', err );
  }
};

/**
 * Get single news
 *
 * @param {object} req server request
 * @param {object} res server response
 * @return {object} response object
 */
const getOneNews = async ( req, res ) => {
  try {
    const { id } = req.params;
    const news = await News.findOne( { _id: id } );
    if ( !news ) return response( res, 404, 'Error', { message: 'News not found!' } );
    return response( res, 200, 'Success', { news } );
  } catch ( err ) {
    return response( res, 500, 'Error', err );
  }
};

/**
 * Update a specific news
 *
 * @param {object} req server request
 * @param {object} res server response
 * @return {object} response object
 */
const updateNews = async ( req, res ) => {
  try {
    const { id } = req.params;
    const {
      title, img, description, body, thumbnail,
    } = req.body;
    const news = await News.findOne( { _id: id } );
    if ( !news ) return response( res, 404, 'Error', { message: 'News not found!' } );

    if ( title ) news.title = title;

    if ( img ) news.img = img;

    if ( description ) news.description = description;

    if ( body ) news.body = body;

    if ( thumbnail ) news.thumbnail = thumbnail;

    await news.save();
    return response( res, 200, 'Success', { news } );
  } catch ( err ) {
    return response( res, 500, 'Error', err );
  }
};

/**
 * Update a specific news
 *
 * @param {object} req server request
 * @param {object} res server response
 * @return {object} response object
 */

const deleteNews = async ( req, res ) => {
  try {
    const { id } = req.params;
    const news = await News.findOne( { _id: id } );
    if ( !news ) return response( res, 404, 'Error', { message: 'News not found!' } );
    await news.remove();
    return response( res, 200, 'Success', { message: 'News deleted successfully!' } );
  } catch ( err ) {
    return response( res, 500, 'Error', err );
  }
};

export default {
  createNews,
  getAllNews,
  getOneNews,
  updateNews,
  deleteNews,
};
