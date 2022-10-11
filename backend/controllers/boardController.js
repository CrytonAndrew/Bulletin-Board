import asyncHandler from 'express-async-handler'
import Board from '../models/boardModel.js'

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
const getBoards = asyncHandler(async (req, res) => {
    const boards = await Board.find({})
    res.json(boards)
})

// @desc    Fetch single product
// @route   GET /api/products/:id
// @access  Public
const getBoardById = asyncHandler(async (req, res) => {
    const product = await Board.findById(req.params.id)
  
    if (product) {
      res.json(product)
    } else {
      res.status(404)
      throw new Error('Product not found')
    }
  })


// @desc    Delete a product
// @route   DELETE /api/products/:id
// @access  Private/Admin
const deleteBoard = asyncHandler(async (req, res) => {
    const product = await Board.findById(req.params.id)
  
    if (product) {
      await product.remove()
      res.json({ message: 'Product removed' })
    } else {
      res.status(404)
      throw new Error('Product not found')
    }
  })

// @desc    Create a product
// @route   POST /api/products
// @access  Private/Admin
const createBoard = asyncHandler(async (req, res) => {
    const product = new Board({
      name: 'Sample Name',
      user: req.user._id,
      description: 'This is the sample description',
      category: "Main",
      department: "None"
    })
  
    const createdProduct = await product.save()
    res.status(201).json(createdProduct)
  })

  // @desc    Update a product
// @route   PUT /api/products/:id
// @access  Private/Admin
const updateProduct = asyncHandler(async (req, res) => {
    const {
      name,
      description,
      category,
      department,
    } = req.body
  
    const product = await Board.findById(req.params.id)
  
    if (product) {
      product.name = name
      product.description = description
      product.category = category
      product.department = department
  
      const updatedProduct = await product.save()
      res.json(updatedProduct)
    } else {
      res.status(404)
      throw new Error('Product not found')
    }
  })

  export {
    updateProduct,
    deleteBoard,
    createBoard,
    getBoardById,
    getBoards
  }