var React = require('react');
var Characters = require('./characters/characters');
var Favorites = require('./favorites/favorites');
var Planets = require('./planets/planets');
var Starships = require('./starships/starships');

var Content = React.createClass({
  propTypes: {
    pageState: React.PropTypes.object
  },
  render : function () {
    return (
      <div>
        <div className="screen-warning">
          <p>Please expand you window!</p>
        </div>
        <div id="cont" className="container-cont container-common">
          <div id="row" className="container-area">
          {(this.props.pageState.currentPage == 'characters') && <Characters />}
          {(this.props.pageState.currentPage == 'planets') && <Planets />}
          {(this.props.pageState.currentPage == 'starships') && <Starships />}
          {(this.props.pageState.currentPage == 'favorites') && <Favorites />}
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Content;
