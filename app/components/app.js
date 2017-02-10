var React = require('react');

// load component classes
var Nav = require('./nav/nav');
var Content = require('./content/content');
var Storage = require('./../lib/storage/storage');

var App = React.createClass({
  getInitialState: function () {
    return {
      pageState: {
        currentPage: 'characters',
        handlers: {
          navigatePage : this.handleNavigatePage
        }
      }
    };
  },
  handleNavigatePage: function (p) {
    this.setState({
      pageState: {
        currentPage: p,
        handlers: {
          navigatePage : this.handleNavigatePage
        }
      }
    });
  },
  render : function () {
    return (
      <div className="container-fluid">
        <Nav pageState={this.state.pageState} />
        <Content pageState={this.state.pageState} />
      </div>
    );
  }
});

module.exports = App;
