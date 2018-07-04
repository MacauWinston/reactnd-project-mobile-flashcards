import React, { Component } from 'react';

import { connect } from 'react-redux';
import DeckDetailJSX from './DeckDetailJSX';

class DeckDetailView extends Component {
  render() {
    const props = {
      deck: this.props.deck,
      goCardAddView: this.props.goCardAddView,
      goDeckQuizView: this.props.goDeckQuizView,
      goBack: this.props.goBack
    };
    return (
      <DeckDetailJSX {...props} />
    );
  }
}

function mapStateToProps ({ decksState }, { navigation }) {
  const { deckTitleAug } = navigation.state.params;
  const myDeckObject = decksState
      ? decksState.deckJson
      : {};
  return {
    deck: (deckTitleAug in myDeckObject) ? myDeckObject[deckTitleAug] : {}
  };
}

function mapDispatchToProps (dispatch, { navigation }) {
  return {
    goCardAddView: () => {
      navigation.navigate(
        'CardNewView',
        { deckTitleAug: navigation.state.params.deckTitleAug }
      );
    },
    goDeckQuizView: () => {
      navigation.navigate(
        'DeckQuizView',
        { deckTitleAug: navigation.state.params.deckTitleAug }
      );
    },
    goBack: () => {
      navigation.goBack();
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DeckDetailView);