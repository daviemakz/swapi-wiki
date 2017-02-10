var React = require('react');

// import bootstrap components
import Button from 'react-bootstrap/lib/Button';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';

var Menu = React.createClass({
  propTypes: {
    pageState: React.PropTypes.object,
    actionHandlers: React.PropTypes.object
  },
  getInitialState: function () {
    return {
      characters : "primary",
      planets : "default",
      starships : "default",
    };
  },
  buttonOnClick: function(e) {
    // variables
    var previousPage = this.props.pageState.currentPage;
    var selectedPage = e.target.lastChild.textContent.toLowerCase();
    var parentComponent = this.props.actionHandlers.navigatePage;
    // set button to primary if changed
    if (previousPage != selectedPage) {
      // clear previous page
      this.setState({
        characters : "default",
        planets : "default",
        starships : "default"
      });
      // set page to active
      this.setState({
        [selectedPage] : "primary"
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
        <hr/>
      </div>
    );
  }
});

module.exports = Menu;
