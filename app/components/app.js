var React = require('react');

// load component classes
var Nav = require('./nav/nav');
var Content = require('./content/content');
var LocalStorage = require('./../lib/storage/storage');
var API = require('./../lib/api/api');

var App = React.createClass({
  getInitialState: function () {
    return {
      pageState: {
        currentPage: 'characters',
      },
      profile: {
        entityType: undefined,
        entityData: undefined
      },
      handlers: {
        navigatePage : this.handleNavigatePage,
        navigateProfile : this.handleNavigateProfile,
        getPageType : this.getProfileType
      }
    };
  },
  getProfileType: function () {
    return this.state.profile.entityType;
  },
  getProfilePage: function (objType,objData) {
    // set profile information
    this.setState({
      profile: {
        entityType: objType,
        entityData: objData
      }
    });
    // change active page to profile
    this.setState({
      pageState: {
        currentPage: 'profile',
      }
    });
  },
  handleNavigateProfile: function (id,type,data) {
    // use existing data or get new data
    if (data) {
      // append id & load profile
      data.apiId = id;
      this.getProfilePage(type,data);
    } else {
      // get new data
      API.getObject(id,type,function (objectData) {
        // append id & load profile
        data.apiId = id;
        this.getProfilePage(type,objectData);
      })
    }
  },
  handleNavigatePage: function (p) {
    // change active page
    this.setState({
      pageState: {
        currentPage: p,
      }
    });
  },
  render : function () {
    return (
      <div className="container-fluid">
        <Nav currentStatus={this.state} />
        <Content currentStatus={this.state} />
      </div>
    );
  }
});

module.exports = App;
