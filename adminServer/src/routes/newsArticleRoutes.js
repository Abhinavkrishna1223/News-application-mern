const express = require('express');
const { successResponse, errorResponse } = require('../services/ApiResponse');
const NewsArticle = require('../controllers/newsArticleController');
const isAuth = require('../middleware/is-auth');
const UploadController = require('../controllers/uploadController');
const router = express.Router();

router.get('/news-list', isAuth, async (req, res) => {
  try {
    const page = req.query.page;
    const limit = req.query.limit;
    const sort = req.query.sort;
    const search = req.query.search;
    const category = req.query.category;
    const controller = new NewsArticle();
    const response = await controller.getNewsList(page, limit, sort, search, category);
    res
      .status(200)
      .json(successResponse('success response', response, res.statusCode));
  } catch (error) {
    res
      .status(500)
      .json(errorResponse("error in fetching News", res.statusCode));
  }
});

router.get('/news-detail', isAuth, async (req, res) => {
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

router.post('/create-news-article', isAuth, async (req, res) => {
  try {
    const data = req.body;
    const controller = new NewsArticle();
    const response = await controller.createNewsArticle(data);
    res
      .status(200)
      .json(successResponse('success response', response, res.statusCode));
  } catch (error) {
    res
      .status(500)
      .json(errorResponse("error in fetching News", res.statusCode));
  }
});

router.patch('/edit-news-article', isAuth, async (req, res) => {
  try {
    const data = req.body;
    const controller = new NewsArticle();
    const response = await controller.editNewsArticle(data);
    res
      .status(200)
      .json(successResponse('success response', response, res.statusCode));
  } catch (error) {
    res
      .status(500)
      .json(errorResponse("error in fetching News", res.statusCode));
  }
});

router.delete('/delete-news-article', isAuth, async (req, res) => {
  try {
    const id = req.query.id;
    const controller = new NewsArticle();
    const response = await controller.DeleteNewsArticle(id);
    res
      .status(200)
      .json(successResponse('success response', response, res.statusCode));
  } catch (error) {
    res
      .status(500)
      .json(errorResponse("error in fetching News", res.statusCode));
  }
});

router.post('/get-signed-url', async (req, res) => {
  try {
    const userId = req.query.userId || '';
    const data = req.body || '';
    console.log(data);
    const controller = new UploadController();
    const response = await controller.getSignedUrl(userId, data);
    res
      .status(201)
      .json(successResponse('upload response', response, res.statusCode));
  } catch (error) {
    console.log("error in upload", error);
    res
      .status(500)
      .json(errorResponse("error in upload", res.statusCode));
  }
});

module.exports = router;