var React = require('react');
var NavLogo = require('./logo/logo');
var NavMenu = require('./menu/menu');

var Nav = React.createClass({
  propTypes: {
    currentStatus: React.PropTypes.object
  },
  render : function () {
    return (
      <div id="nav" className="container-nav container-common">
        <NavLogo />
        <NavMenu pageState={this.props.currentStatus.pageState}
        actionHandlers={this.props.currentStatus.handlers} />
      </div>
    );
  }
});

module.exports = Nav;
