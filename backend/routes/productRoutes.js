import express from 'express';
const router = express.Router();
import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  createProductReview,
  getTopProducts,
} from '../controllers/productController.js';
import { protect, admin } from '../middleware/authMiddleware.js';
import checkObjectId from '../middleware/checkObjectId.js';

// route for all products
router.route('/').get(getProducts).post(protect, admin, createProduct);
router.get('/top', getTopProducts);
// route for single product
router
  .route('/:id')
  .get(checkObjectId, getProductById)
  .put(protect, admin, checkObjectId, updateProduct)
  .delete(protect, admin, checkObjectId, deleteProduct);
// route for adding a review
router.route('/:id/reviews').post(protect, checkObjectId, createProductReview);

export default router;
