import React, { Component } from 'react';

import { connect } from 'react-redux';
import { createDeckAPI } from '../../actions';
import { normalize } from '../../utils/helpers';
import DeckNewJSX from './DeckNewJSX';

class DeckNewView extends Component {
  state = {
    title: ''
  };

  changeTitle = (title) => {
    this.setState({ title });
  };

  submitTitle = (title) => {
    title = normalize(title);
    if (title.length === 0) {
      return;
    }
    this.props.createDeckAPI(title);
    this.setState({ title: '' },
      () => {
        this.props.goDeckListView();
      });
  };

  render() {
    const props = {
      title: this.state.title,
      changeTitle: this.changeTitle,
      submitTitle: this.submitTitle
    };
    return (
      <DeckNewJSX {...props} />
    );
  }
}

function mapStateToProps ({}) {
  return {};
}

function mapDispatchToProps (dispatch, { navigation }) {
  return {
    createDeckAPI: (title) => {
      dispatch(createDeckAPI(title));
    },
    goDeckListView: () => {
      navigation.navigate(
        'DeckListView'
      );
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DeckNewView);