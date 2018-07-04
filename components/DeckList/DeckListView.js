import React, { Component } from 'react';
import sortBy from 'sort-by';

import { connect } from 'react-redux';
import DeckListJSX from './DeckListJSX';

class DeckListView extends Component {
  render() {
    const props = {
      deckList: this.props.deckList,
      goDeckDetailView: this.props.goDeckDetailView
    };
    return (
      <DeckListJSX {...props} />
    );
  }
}

function mapStateToProps ({ decksState }) {
  const myDeckList = decksState
      ? Object.values(decksState.deckJson).sort(sortBy('timestamp')).reverse()
      : [];
  return {
      deckList: myDeckList && myDeckList.length > 0 ? myDeckList : []
  };
}

function mapDispatchToProps (dispatch, { navigation }) {
  return {
    goDeckDetailView: (deckTitleAug) => {
      navigation.navigate(
        'DeckDetailView',
        { deckTitleAug }
      )
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DeckListView);