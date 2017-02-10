var React = require('react');

// import bootstrap components
import Button from 'react-bootstrap/lib/Button';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';

var Menu = React.createClass({
  propTypes: {
    pageState: React.PropTypes.object
  },
  getInitialState: function () {
    return {
      characters : "primary",
      planets : "default",
      starships : "default",
      favorites : "default",
    };
  },
  buttonOnClick: function(e) {
    // variables
    var previousPage = this.props.pageState.currentPage;
    var selectedPage = e.target.lastChild.textContent.toLowerCase();
    var parentComponent = this.props.pageState.handlers.navigatePage;
    // set button to primary if changed
    if (previousPage != selectedPage) {
      this.setState({
        [selectedPage] : "primary",
        [previousPage] : "default"
      });
    }
    // update parent component
    parentComponent(selectedPage);
    // return
    return;
  },
  render : function () {
    return (
      <div id="button-menu">
        <hr/>
          <Button onClick={this.buttonOnClick} bsStyle={this.state.characters} bsSize="large" block>Characters</Button>
          <Button onClick={this.buttonOnClick} bsStyle={this.state.planets} bsSize="large" block>Planets</Button>
          <Button onClick={this.buttonOnClick} bsStyle={this.state.starships} bsSize="large" block>Starships</Button>
          <Button onClick={this.buttonOnClick} bsStyle={this.state.favorites} bsSize="large" block>Favorites</Button>
        <hr/>
      </div>
    );
  }
});

// <h1>{this.props.pageState.currentPage}</h1>

module.exports = Menu;
