var React = require('react');
var ListItemCharacters = require('./item/item-character');
var ListItemPlanets = require('./item/item-planet');
var ListItemStarships = require('./item/item-starship');

var List = React.createClass({
  propTypes: {
    listData: React.PropTypes.array,
    listType: React.PropTypes.string
  },
  getInitialState: function () {
    return {
      listData: undefined,
      listType: undefined
    }
  },
  buildList: function () {
    // main variable
    var outputList = [];
    var self = this;
    this.props.listData.forEach(function(element,index,array){
      self.props.listType == 'character' && outputList.push(<ListItemCharacters key={index + 1} itemData={element} />);
      self.props.listType == 'planet' && outputList.push(<ListItemPlanets key={index + 1} itemData={element} />);
      self.props.listType == 'starship' && outputList.push(<ListItemStarships key={index + 1} itemData={element} />);
    });
    // build list
    return (
      <div className="ui middle aligned divided list">
        {outputList}
      </div>
    );
  },
  render : function () {
    return (
      this.buildList()
    );
  }
});

module.exports = List;
