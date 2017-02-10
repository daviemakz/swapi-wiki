var React = require('react');
var API = require('./../../../lib/api/api.js');

var Favorites = React.createClass({
  propTypes: {
    pageState: React.PropTypes.object
  },
  getInitialState: function () {
    return {
      dataReady: 0,
      dataList: undefined,
      paginationNumber: 1,
    }
  },
  getDefaultProps: function () {
    return {
      pageState: {}
    };
  },
  buildOutput: function () {
    if (this.state.dataReady) {
      return <p style={{textAlign: 'center'}}>Feature not implemented as of yet!</p>;
    } else {
      return <p style={{textAlign: 'center'}}>Loading...</p>;
    }
  },
  updateComponentData: function (data) {
    if (data.error) {
      this.setState({
        error: 1,
        dataReady: 0,
      });
      alert("An error occured - please try again!");
    } else {
      this.setState({
        dataReady: 1,
        dataList: data,
      });
    }
  },
  getNewPage: function (e) {
    return;
  },
  componentDidMount : function () {
    API.getCharacters(this.state.paginationNumber,this.updateComponentData)
  },
  render : function () {
    return (
      this.buildOutput()
    );
  }
});

module.exports = Favorites;
