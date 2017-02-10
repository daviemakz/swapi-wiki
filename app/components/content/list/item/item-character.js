var React = require('react');

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
  notImplemented: function () {
    alert("Currently not implemented!")
  },
  render : function () {
    return (
      <div id={this.props.key} className="item">
        <div className="right floated content">
        <div onClick={this.notImplemented} className="ui button">More Info</div>
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
