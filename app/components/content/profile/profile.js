/*

This component class is pretty big, ideally it should be broken down!

*/

var React = require('react');
var LocalStorage = require('./../../../lib/storage/storage');

// bootstrap
import Button from 'react-bootstrap/lib/Button';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';

// images
import AvatarLena from './../../../images/avatars/lena.png';
import AvatarLindsay from './../../../images/avatars/lindsay.png';
import AvatarMark from './../../../images/avatars/mark.png';
import AvatarMolly from './../../../images/avatars/molly.png';
import PlanetDefault from './../../../images/planet/planet.png';
import SpaceshipDefault from './../../../images/spaceship/spaceship.png';

// list of random avatars
function RandomAvatar (entityObj) {
  // people avatars
  var Avatars = [
    AvatarLena,
    AvatarLindsay,
    AvatarMark,
    AvatarMolly
  ];
  // other avatars
  if (entityObj == 'planet') { return PlanetDefault; }
  if (entityObj == 'starship') { return SpaceshipDefault; }
  return Avatars[Math.floor(Math.random()*Avatars.length)];
}

var Profile = React.createClass({
  propTypes: {
    profileData: React.PropTypes.object,
    actionHandlers: React.PropTypes.object
  },
  applyChanges: function () {
    // variables
    var profData = this.props.profileData.entityData;
    var apiId = this.props.profileData.entityData.apiId;
    var entity = this.props.profileData.entityType;
    // apply changes
    if (LocalStorage.isFavorite(apiId,entity)) {
      LocalStorage.removeFavorite(apiId,entity)
    } else {
      LocalStorage.setFavorite(apiId,entity)
    }
    // refresh page
    this.props.actionHandlers.navigateProfile(apiId,entity,profData);
  },
  buildProfile: function () {

    // variables
    var output = [];
    var apiId = this.props.profileData.entityData.apiId;
    var entity = this.props.profileData.entityType;

    // get favorite status
    var buttonStyle = LocalStorage.isFavorite(apiId,entity) ? 'danger' : 'success';
    var buttonValue = LocalStorage.isFavorite(apiId,entity) ? 'Remove From Favorites' : 'Add To Favorites';

    // characters
    entity == 'people' && output.push(
      <div id="profile-content">
        <br/>
        <br/>
        <div className="profile-img-ava">
          <p>
            <img src={RandomAvatar(entity)}/>
          </p>
        </div>
        <br/>
        <br/>
        <p className="profile-content-para"><b>Name:</b> {this.props.profileData.entityData.name}</p>
        <p className="profile-content-para"><b>Birth Year:</b> {this.props.profileData.entityData.birth_year}</p>
        <p className="profile-content-para"><b>Gender:</b> {this.props.profileData.entityData.gender}</p>
        <p className="profile-content-para"><b>Height:</b> {this.props.profileData.entityData.height}</p>
        <p className="profile-content-para"><b>Mass:</b> {this.props.profileData.entityData.mass}</p>
        <p className="profile-content-para"><b>Eye Colour:</b> {this.props.profileData.entityData.eye_color}</p>
        <p className="profile-content-para"><b>Hair Colour:</b> {this.props.profileData.entityData.hair_color}</p>
        <p className="profile-content-para"><b>Skin Colour:</b> {this.props.profileData.entityData.skin_color}</p>
      </div>
    );

    // planets
    entity == 'planet' && output.push(
      <div id="profile-content">
        <br/>
        <br/>
        <div className="profile-img-ava">
          <p>
            <img src={RandomAvatar(entity)}/>
          </p>
        </div>
        <br/>
        <p className="profile-content-para"><b>Name:</b> {this.props.profileData.entityData.name}</p>
        <p className="profile-content-para"><b>Diameter:</b> {this.props.profileData.entityData.diameter}</p>
        <p className="profile-content-para"><b>Gravity:</b> {this.props.profileData.entityData.gravity}</p>
        <p className="profile-content-para"><b>Population:</b> {this.props.profileData.entityData.population}</p>
        <p className="profile-content-para"><b>Orbital Period:</b> {this.props.profileData.entityData.orbital_period}</p>
        <p className="profile-content-para"><b>Rotational Period:</b> {this.props.profileData.entityData.rotation_period}</p>
        <p className="profile-content-para"><b>Surface Water:</b> {this.props.profileData.entityData.surface_water}</p>
        <p className="profile-content-para"><b>Climate:</b> {this.props.profileData.entityData.climate}</p>
        <p className="profile-content-para"><b>Terrain:</b> {this.props.profileData.entityData.terrain}</p>
      </div>
    );

    // starships
    entity == 'starship' && output.push(
      <div id="profile-content">
        <br/>
        <br/>
        <div className="profile-img-ava">
          <p>
            <img src={RandomAvatar(entity)}/>
          </p>
        </div>
        <br/>
        <br/>
        <p className="profile-content-para"><b>Name:</b> {this.props.profileData.entityData.name}</p>
        <p className="profile-content-para"><b>Cargo Capacity:</b> {this.props.profileData.entityData.cargo_capacity}</p>
        <p className="profile-content-para"><b>Consumables:</b> {this.props.profileData.entityData.consumables}</p>
        <p className="profile-content-para"><b>Cost In Credit:</b> {this.props.profileData.entityData.cost_in_credits}</p>
        <p className="profile-content-para"><b>Crew:</b> {this.props.profileData.entityData.crew}</p>
        <p className="profile-content-para"><b>Hyper Drive Rating:</b> {this.props.profileData.entityData.hyperdrive_rating}</p>
        <p className="profile-content-para"><b>Length:</b> {this.props.profileData.entityData.length}</p>
        <p className="profile-content-para"><b>Manufacturer:</b> {this.props.profileData.entityData.manufacturer}</p>
        <p className="profile-content-para"><b>Max Atmospheric Speed:</b> {this.props.profileData.entityData.max_atmosphering_speed}</p>
        <p className="profile-content-para"><b>Model:</b> {this.props.profileData.entityData.model}</p>
        <p className="profile-content-para"><b>Passengers:</b> {this.props.profileData.entityData.passengers}</p>
        <p className="profile-content-para"><b>Starship Class:</b> {this.props.profileData.entityData.starship_class}</p>
      </div>
    );

    // return profile
    return (
      <div>
        <div id="profile">
          {output}
        </div>
        <div id="fav">
          <hr/>
            <Button onClick={this.applyChanges} bsStyle={buttonStyle} bsSize="small" block>{buttonValue}</Button>
          <hr/>
        </div>
      </div>
    );
  },
  render : function () {
    return (
      this.buildProfile()
    );
  }
});

module.exports = Profile;
