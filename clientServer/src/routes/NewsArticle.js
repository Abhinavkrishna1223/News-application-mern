const express = require('express');
const { successResponse, errorResponse } = require('../services/ApiResponse');
const NewsArticle = require('../controllers/NewsArticle');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const controller = new NewsArticle();
    const response = await controller.getHomePageNews();
    res
      .status(200)
      .json(successResponse('success response', response, res.statusCode));
  } catch (error) {
    res
      .status(500)
      .json(errorResponse("error in fetching News", res.statusCode));
  }
});

router.get('/section-news', async (req, res) => {
  try {
    const section = req.query.section;
    const controller = new NewsArticle();
    const response = await controller.getSectionPageNews(section);
    res
      .status(200)
      .json(successResponse('success response', response, res.statusCode));
  } catch (error) {
    res
      .status(500)
      .json(errorResponse("error in fetching News", res.statusCode));
  }
});

router.get('/single-article', async (req, res) => {
  try {
    const id = req.query.id;
    const controller = new NewsArticle();
    const response = await controller.getNewsArticle(id);
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