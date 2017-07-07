var axios = require('axios');

module.exports = { //export object from this file
    fetchPopularRepos: function (language) { //fetch popular repos from github-api
        var encodedURI = window.encodeURI('https://api.github.com/search/repositories?q=stars:>1+language:'+ language + '&sort=stars&order=desc&type=Repositories'); //fetch accorging to link
        return axios.get(encodedURI) //response
            .then(function (response) {
                return response.data.items;
      });
    }
}