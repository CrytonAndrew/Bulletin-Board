import express from 'express'
const router = express.Router()
import asyncHandler from 'express-async-handler'

import {
    createBoard,
    updateProduct,
    getBoardById,
    getBoards,
    deleteBoard
} from '../controllers/boardController.js'

import Board from '../models/boardModel.js'

router.route('/').get(getBoards).post(createBoard)
router
  .route('/:id')
  .get(getBoardById)
  .delete(deleteBoard)
  .put(updateProduct)

export default router