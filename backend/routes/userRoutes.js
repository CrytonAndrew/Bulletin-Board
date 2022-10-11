import express from 'express'
const router = express.Router()

import {registerUser, authUser, getUserProfile, getUserById, getUsers, updateUserProfile, deleteUser} from '../controllers/userController.js'

router.route('/').post(registerUser).get(getUsers)
router.post('/login', authUser)
router
  .route('/profile')
  .get(getUserProfile)
  .put(updateUserProfile)

router
  .route('/:id')
  .delete(deleteUser)
  .get(getUserById)

export default router