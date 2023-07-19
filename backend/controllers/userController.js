import asyncHandler from '../middleware/asyncHandler.js';
import User from '../models/userModel.js';

// @desc    Auth user & get token
// @route   POST /api/users/login
// @access  public
const authUser = asyncHandler(async (req, res) => {
  res.send('auth user');
});

// @desc    Register user
// @route   POST /api/users
// @access  public
const registerUser = asyncHandler(async (req, res) => {
  res.send('register user');
});

// @desc    Logout user / clear cookie
// @route   POST /api/users/logout
// @access  private
const logoutUser = asyncHandler(async (req, res) => {
  res.send('logout user');
});

// @desc    Get user profile
// @route   POST /api/users/profile
// @access  Private
const getUserProfile = asyncHandler(async (req, res) => {
  res.send('get user profile');
});

// @desc    Update user profile
// @route   PUT /api/users/profile
// @access  private
const updateUserProfile = asyncHandler(async (req, res) => {
  res.send('update user profile');
});

// @desc    Get users
// @route   POST /api/users
// @access  private/admin
const getUsers = asyncHandler(async (req, res) => {
  res.send('get users');
});

// @desc    Get user by ID
// @route   POST /api/users/:id
// @access  private/admin
const getUserByID = asyncHandler(async (req, res) => {
  res.send('get user by id');
});

// @desc    Delete user
// @route   DELETE /api/users:id
// @access  private/admin
const deleteUser = asyncHandler(async (req, res) => {
  res.send('delete user');
});

// @desc    Update user
// @route   PUT /api/users/:id
// @access  private/admin
const updateUser = asyncHandler(async (req, res) => {
  res.send('update user');
});

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserByID,
  updateUser,
};
