// Include the axios package for performing HTTP requests (promise based alternative to request)
import axios from "axios";

// Define API Authorization key
const authKey = "";

// Helper Functions
const helpers = {

// search for articles
  searchArticles: (searchTerm, startYear, endYear) => {

    // Did they specify a start year?
    if (start !== "") {
    	startDate = "&begin_date=" + startYear + "0101";
    } else {
    	startDate = "";
    }

    // Did they specify an end year?
    if (end !== "") {
    	endDate = "&end_date=" + endYear + "0101";
    } else {
    	endDate = "";
    }

    var queryURL = "http://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authKey + "&q=" + searchTerm + "&sort=newest" + startDate + endDate;

    return axios.get(queryURL).then((response) => {
      return response.data;
    });

  },
// If they choose to save an article, save it
  saveArticle: (article) => {

    var queryURL = "/api/saved?title=" + article.title + "&url=" + article.url;

    return axios.post(queryURL).then((response) => {
    	return response.data;
    });
  },

// If they choose to delete an article, delete it
  deleteArticle: (article) => {
    
    var queryURL = "/api/saved?id=" + article;

    return axios.delete(queryURL).then((response) => {
      return response.data;
    });
  },

// find all previously saved articles
  getSavedArticles: () => {
    
    var queryURL = "/api/saved";

    return axios.get(queryURL).then((response) => {
      return response.data;
    });
  }

};


export default helpers;
