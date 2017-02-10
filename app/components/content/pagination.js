var React = require('react');
import Pagination from 'react-bootstrap/lib/Pagination';

var PaginationBar = React.createClass({
  propTypes: {
    currentPaginationNumber: React.PropTypes.number,
    maxPaginationNumber: React.PropTypes.number,
    handleOnClick: React.PropTypes.func
  },
  getDefaultProps: function () {
    return {
      currentPaginationNumber: 1,
      maxPaginationNumber: undefined,
    };
  },
  getInitialState: function () {
    return {
      currentPaginationNumber: this.props.currentPaginationNumber,
      maxPaginationNumber: this.props.maxPaginationNumber,
      handleOnClick: this.props.handleOnClick
    };
  },
  render : function () {
    return (
      <div className="pagination-area">
      <Pagination
        bsSize="large"
        items={this.props.maxPaginationNumber}
        activePage={this.props.currentPaginationNumber}
        onSelect={this.props.handleOnClick}
      />
      </div>
    );
  }
});

module.exports = PaginationBar;
