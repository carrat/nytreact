
// set dependencies
var express = require('express');
var router = express.Router();

// Dependencies
var Article = require("../models/Article.js");

// define routes
router.get('/', function (req, res) {

	home: (req, res) => {  
      res.send('index.html');
  }
	
});

router.get('/api/saved', function (req, res) {
	Articles.find({}).exec(function (err, doc){ 

        res.json(doc);
    });
});

router.post('/api/saved', function (req, res) {

	Articles.findOneAndUpdate({title:req.query.title}, {title: req.query.title, url: req.query.url },
	{safe: true, 
    upsert: true, 
    new : true
  },
  	function(err, model) {
      	if(err){
        	console.log(err);
    	}
      
    	Articles.find({})
      .exec(function (err, doc) { 
        	res.json(doc);
    	});
    });
});


router.delete('/api/saved', function (req, res) {
	Articles.findByIdAndRemove(req.query.id)
  .exec(function (err, doc) { 
    // find updated list of saved articles
      	Articles.find({})
        .exec(function (err, doc) { 
         	res.json(doc);
      	});
  });
});



// export router
module.exports = router;
