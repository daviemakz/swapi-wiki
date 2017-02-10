var React = require('react');
var API = require('./../../../lib/api/api.js');
var PaginationBar = require('./../pagination');
var List = require('./../list/list');
import LoadingGif from './../../../images/content/loading.gif';

var entity = 'planet';

var Characters = React.createClass({
  propTypes: {
    actionHandlers: React.PropTypes.object
  },
  getInitialState: function () {
    return {
      dataReady: 0,
      dataList: undefined,
      paginationNumber: 1,
      maxPages: undefined,
      error: 0
    }
  },
  getDefaultProps: function () {
    return {
      pageState: {}
    };
  },
  buildOutput: function () {
    var self = this;
    if (this.state.dataReady) {
      return (
        <div>
          <List listType={entity}
          listData={this.state.dataList.results}
          actionHandlers={self.props.actionHandlers}/>
          <PaginationBar
            currentPaginationNumber={this.state.paginationNumber}
            maxPaginationNumber={this.state.maxPages}
            handleOnClick={this.getNewPage}
          />
        </div>
      );
    } else {
      return (
        <div>
          <img src={LoadingGif} className="loading-img"/>
          <PaginationBar
            currentPaginationNumber={this.state.paginationNumber}
            maxPaginationNumber={this.state.maxPages}
            handleOnClick={this.getNewPage}
          />
        </div>
      );
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
        maxPages: Math.round(
          data.count/(data.results.length == 10 ? data.results.length : 10)
        )
      });
    }
  },
  getNewPage: function (value) {
    // update pagination number
    this.setState({
      paginationNumber: value,
      dataReady: 0,
    });
    // update data
    API.getPlanets(value,this.updateComponentData);
  },
  componentDidMount : function () {
    API.getPlanets(this.state.paginationNumber,this.updateComponentData);
  },
  render : function () {
    return (
      this.buildOutput()
    );
  }
});

module.exports = Characters;
