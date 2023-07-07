const express = require('express');
const { successResponse, errorResponse } = require('../services/ApiResponse');
const CategoryController = require('../controllers/categoryControllers');
const isAuth = require('../middleware/is-auth');
const router = express.Router();

router.get('/list', isAuth, async (req, res) => {
  try {
    const controller = new CategoryController();
    const response = await controller.getCategoryList();
    res
      .status(200)
      .json(successResponse('success response', response, res.statusCode));
  } catch (error) {
    res
      .status(500)
      .json(errorResponse("error in fetching News", res.statusCode));
  }
});

router.post('/create-category', isAuth, async (req, res) => {
  try {
    const data = req.body;
    const controller = new CategoryController();
    const response = await controller.createCategory(data);
    res
      .status(200)
      .json(successResponse('success response', response, res.statusCode));
  } catch (error) {
    res
      .status(500)
      .json(errorResponse("error in fetching News", res.statusCode));
  }
});

router.patch('/edit-category', isAuth, async (req, res) => {
  try {
    const data = req.body;
    const controller = new CategoryController();
    const response = await controller.editCategory(data);
    res
      .status(200)
      .json(successResponse('success response', response, res.statusCode));
  } catch (error) {
    res
      .status(500)
      .json(errorResponse("error in fetching News", res.statusCode));
  }
});

router.delete('/delete-category', isAuth, async (req, res) => {
  try {
    const id = req.query.id;
    const controller = new CategoryController();
    const response = await controller.DeleteCategory(id);
    res
      .status(200)
      .json(successResponse('success response', response, res.statusCode));
  } catch (error) {
    res
      .status(500)
      .json(errorResponse("error in fetching News", res.statusCode));
  }
});

module.exports = router;