var http = require("http");
var lru = require("lru-cache")
  , options = { max: 500
              , length: function (n, key) { return n * 2 + key.length }
              , dispose: function (key, n) { n.close() }
              , maxAge: 1000 * 60 * 60 }
  , cache = lru(options)
  , otherCache = lru(50)


// swapi api base url
var baseUrl = 'http://swapi.co/api/';

// api call - get characters
function getCharacters(pageNumber, callback) {
  makeRequest('people/?page=' + pageNumber, callback);
}

// api call - get planets
function getPlanets(pageNumber, callback) {
  makeRequest('planets/?page=' + pageNumber, callback);
}
// api call - starships
function getStarships(pageNumber, callback) {
  makeRequest('starships/?page=' + pageNumber, callback);
}

// api call - single object
function getObject(id, type, callback) {
  makeRequest(type + '/' + id, callback);
}

// make http api request
function makeRequest(slug, callback) {
  // return empty object literal if no slug defined
  if (!slug) { callback({ error: 1 }) }
  // check if its in cache and return that or get the request
  if (cache.peek(slug)) {
    callback(cache.get(slug));
  } else {
    // make http request
    var request = http.get(baseUrl + slug, function (response) {
      var buffer = "",
        data, route;
      response.on("data", function (chunk) {
        buffer += chunk;
      });
      response.on("end", function (err) {
        if (err) {
          callback({
            error: 2
          })
        } else {
          var responseBody = JSON.parse(buffer);
          // save in cache
          cache.set(slug, responseBody);
          // callback
          callback(responseBody);
        }
      });
    });
  }


}

// exports
module.exports.getCharacters = getCharacters;
module.exports.getPlanets = getPlanets;
module.exports.getStarships = getStarships;
module.exports.getObject = getObject;
