import React, { Component } from 'react';

import { connect } from 'react-redux';
import { loadDeckJsonAPI } from '../../actions';
import {
  setLocalNotification as setLocalNotificationN
} from '../../utils/NotificationAPI';
import HomeJSX from './HomeJSX';

class HomeView extends Component {
  componentDidMount () {
    this.props.loadDeckJsonAPI();
    setLocalNotificationN();
  }

  render() {
    return (
      <HomeJSX />
    );
  }
}

function mapStateToProps () {
  return {};
}

function mapDispatchToProps (dispatch) {
  return {
    loadDeckJsonAPI: () => {
      dispatch(loadDeckJsonAPI());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeView);