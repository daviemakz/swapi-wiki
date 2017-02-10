var React = require('react');
var Characters = require('./characters/characters');
var Planets = require('./planets/planets');
var Starships = require('./starships/starships');
var Profile = require('./profile/profile');

var Content = React.createClass({
  propTypes: {
    currentStatus: React.PropTypes.object
  },
  render : function () {
    return (
      <div>
        <div className="screen-warning">
          <p>Please expand you window!</p>
        </div>
        <div id="cont" className="container-cont container-common">
          <div id="row" className="container-area">
          {(this.props.currentStatus.pageState.currentPage == 'characters') &&
          <Characters actionHandlers={this.props.currentStatus.handlers} />}
          {(this.props.currentStatus.pageState.currentPage == 'planets') &&
          <Planets actionHandlers={this.props.currentStatus.handlers} />}
          {(this.props.currentStatus.pageState.currentPage == 'starships') &&
          <Starships actionHandlers={this.props.currentStatus.handlers} />}
          {(this.props.currentStatus.pageState.currentPage == 'profile') &&
          <Profile actionHandlers={this.props.currentStatus.handlers}
          profileData={this.props.currentStatus.profile} />}
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Content;
