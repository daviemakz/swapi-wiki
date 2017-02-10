var http = require("http");

// SWAPI API Base URL
var baseUrl = 'http://swapi.co/api/';

// api call - get characters
function getCharacters (pageNumber,callback) {
  makeRequest('people/?page='+pageNumber,callback);
}

// api call - get planets
function getPlanets (pageNumber,callback) {
  makeRequest('planets/?page='+pageNumber,callback);
}
// api call - starships
function getStarships (pageNumber,callback) {
  makeRequest('starships/?page='+pageNumber,callback);
}

// api call - single object
function getObject (id,type,callback) {
  makeRequest(type + '/' + id,callback);
}

// make http api request
function makeRequest(slug,callback) {
  // return empty object literal if no slug defined
  if (!slug) { callback({ error : 1 }) }
  // make http request
  var request = http.get(baseUrl + slug, function (response) {
    var buffer = "", data,route;
    response.on("data", function (chunk) {
        buffer += chunk;
    });
    response.on("end", function (err) {
      if (err) {
        callback({ error : 2 })
      } else {
        callback(JSON.parse(buffer))
      }
    });
  });
}

// exports
module.exports.getCharacters = getCharacters;
module.exports.getPlanets = getPlanets;
module.exports.getStarships = getStarships;
module.exports.getObject = getObject;
