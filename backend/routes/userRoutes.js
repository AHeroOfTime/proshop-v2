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
} from '../controllers/userController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

// post req => register, get => admin, get all users
router.route('/').post(registerUser).get(protect, admin, getUsers);
// route to logout
router.post('/logout', logoutUser);
// to login
router.post('/auth', authUser);
// route to get profile or update profile
router
  .route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);
// routes for users
router
  .route('/:id')
  .delete(protect, admin, deleteUser)
  .get(protect, admin, getUserByID)
  .put(protect, admin, updateUser);

export default router;
