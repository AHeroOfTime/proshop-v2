import express from 'express';
const router = express.Router();
import {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserByID,
  updateUser,
} from '../controllers/productController.js';

// post req => register, get => admin, get all users
router.route('/').post(registerUser).get(getUsers);
// route to logout
router.post('/logout', logoutUser);
// to login
router.post('/login', authUser);
// route to get profile or update profile
router.route('/profile').get(getUserProfile).put(updateUserProfile);
// routes for users
router.route('/:id').delete(deleteUser).get(getUserByID).put(updateUser);

export default router;
