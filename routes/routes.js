"use strict";

const express = require('express'),
    controller = require('../controllers/application_controller.js'),
    router = express.Router();

router.get('/', router.home);


//Get previously saved articles
router.get('/api/saved', router.searchArticles);

//Save an article
router.post('/api/saved', router.saveArticle);

//Delete an article
router.delete('/api/saved', router.deleteArticle);


module.exports = router;