// where data is stored...
var data = {
  people : [],
  planet : [],
  starship : []
}

// set favorite
function setFavorite (id,type) {
  if (!(data[type].indexOf(id) > -1)) {
    data[type].push(id);
  }
  return;
}

// check if favorite
function isFavorite (id,type) {
  if ((data[type].indexOf(id) > -1)) {
    return true;
  } else {
    return false;
  }
}

// remove favorite
function removeFavorite (id,type) {
  if ((data[type].indexOf(id) > -1)) {
    data[type].splice(data[type].indexOf(id), 1);
  }
  return;
}

// get data object - debug
function getData () {
  return data;
}

// exports
module.exports = {
  isFavorite: isFavorite,
  setFavorite: setFavorite,
  removeFavorite: removeFavorite,
  getData: getData
}
