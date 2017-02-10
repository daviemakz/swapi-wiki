var React = require('react');
var ReactDOM = require('react-dom');

import AvatatLena from './../../../../images/avatars/lena.png';
import AvatatLindsay from './../../../../images/avatars/lindsay.png';
import AvatatMark from './../../../../images/avatars/mark.png';
import AvatatMolly from './../../../../images/avatars/molly.png';

// list of random avatars
function RandomAvatar () {
  var Avatars = [
    AvatatLena,
    AvatatLindsay,
    AvatatMark,
    AvatatMolly
  ];
  return Avatars[Math.floor(Math.random()*Avatars.length)];
}

var ListSingleItem = React.createClass({
  propTypes: {
    id: React.PropTypes.number,
    itemData: React.PropTypes.object,
    goToEntity: React.PropTypes.func
  },
  render : function () {
    var apiId = this.props.itemData.url.match(/(.+\/)(\d+)(\/)/)[2]
    return (
      <div id={this.props.id} className="item">
        <div className="right floated content">
          <div id={apiId}
            onClick={() => this.props.goToEntity(apiId,'people',this.props.itemData)}
            className="ui button">More Info</div>
        </div>
        <img className="ui avatar image" src={RandomAvatar()}/>
        <div className="content">
          {this.props.itemData.name}
        </div>
        <div className="content content-list-description">
          {`Birth Year: ${this.props.itemData.birth_year} |
          Gender: ${this.props.itemData.gender} |
          Eye Colour: ${this.props.itemData.eye_color} |
          Hair Colour: ${this.props.itemData.hair_color} |
          Height: ${this.props.itemData.height}`}
        </div>
      </div>
    );
  }
});

module.exports = ListSingleItem;
