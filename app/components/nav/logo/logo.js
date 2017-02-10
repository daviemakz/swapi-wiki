var React = require('react');

// import image(s)
import LogoImg from './../../../images/nav/logo.png';

var Logo = React.createClass({
  render : function () {
    return (
      <div id="nav-logo">
        <img src={LogoImg} className="nav-logo-img"/>
      </div>
    );
  }
});

module.exports = Logo;
