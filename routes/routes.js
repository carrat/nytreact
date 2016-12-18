"use strict";

const express = require('express'),
    controller = require('../controllers/application_controller'),
    router = express.Router();

router.get('/', controller.home);


//Get previously saved articles
router.get('/api/saved', controller.searchArticles);

//Save an article
router.post('/api/saved', controller.saveArticle);

//Delete an article
router.delete('/api/saved', controller.deleteArticle);


module.exports = router;