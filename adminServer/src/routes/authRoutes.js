const express = require('express');
const { successResponse, errorResponse } = require('../services/ApiResponse');
const AuthController = require('../controllers/authController');
const {body, validationResult} = require('express-validator');

const router = express.Router();

router.post('/login', 
  [
    body('email')
      .isEmail()
      .withMessage('Please enter a valid email.')
      .normalizeEmail(),
    body('password')
      .trim()
      .isLength({ min: 5 }),
  ], 
  async (req, res) => {
  try {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
      const error = new Error('Validation failed.');
      error.statusCode = 422;
      throw error;
    }
    const email = req.body.email;
    const password = req.body.password;
    const controller = new AuthController();
    const response = await controller.login(email, password);
    res
      .status(200)
      .json(successResponse('success response', response, res.statusCode));
  } catch (error) {
    res
      .status(500)
      .json(errorResponse("error in login", res.statusCode));
  }
});

router.post('/signup-email',
  [
    body('email')
      .isEmail()
      .withMessage('Please enter a valid email.')
      .normalizeEmail(),
    body('password')
      .trim()
      .isLength({ min: 5 }),
    body('name')
      .trim()
      .not()
      .isEmpty(),
  ],
  async (req, res) => {
  try {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
      const error = new Error('Validation failed.');
      error.statusCode = 422;
      throw error;
    }
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;
    const controller = new AuthController();
    const response = await controller.signupEmail(email, password, name);
    res
      .status(200)
      .json(successResponse('success response', response, res.statusCode));
  } catch (error) {
    res
      .status(500)
      .json(errorResponse("error in creating account", res.statusCode));
  }
});

router.post('/change-password', async (req, res) => {
  try {
    const controller = new AuthController();
    const response = await controller.changePassword();
    res
      .status(200)
      .json(successResponse('success response', response, res.statusCode));
  } catch (error) {
    res
      .status(500)
      .json(errorResponse("error in login", res.statusCode));
  }
});

router.post('/forget-password', async (req, res) => {
  try {
    const controller = new AuthController();
    const response = await controller.forgetPassword();
    res
      .status(200)
      .json(successResponse('success response', response, res.statusCode));
  } catch (error) {
    res
      .status(500)
      .json(errorResponse("error in login", res.statusCode));
  }
});

module.exports = router;