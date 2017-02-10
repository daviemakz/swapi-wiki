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
            onClick={() => this.props.goToEntity(apiId,'planet',this.props.itemData)}
            className="ui button">More Info</div>
        </div>
        <img className="ui avatar image" src={RandomAvatar()}/>
        <div className="content">
          {this.props.itemData.name}
        </div>
        <div className="content content-list-description">
          {`Rotational Period: ${this.props.itemData.rotation_period} |
          Diameter: ${this.props.itemData.diameter} |
          Gravity: ${this.props.itemData.gravity} |
          Terrain: ${this.props.itemData.terrain}`}
        </div>
      </div>
    );
  }
});

module.exports = ListSingleItem;
