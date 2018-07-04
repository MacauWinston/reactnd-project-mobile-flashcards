import React, { Component } from 'react';
import { View } from 'react-native';

import { connect } from 'react-redux';
import { normalize, extractDeckProperties } from '../../utils/helpers';
import {
  clearLocalNotification as clearLocalNotificationN,
  setLocalNotification as setLocalNotificationN
} from '../../utils/NotificationAPI';
import DeckQuizJSX from './DeckQuizJSX';
import DeckQuizEndJSX from './DeckQuizEndJSX';

class DeckQuizView extends Component {
  state = {
    currentNum: 0,
    correctNum: 0,
    isQuestion: true
  };

  toggleQA = () => {
    this.setState((prevState) => ({
      isQuestion: !prevState.isQuestion
    }));
  };

  submitCorrect = () => {
    this.setState((prevState) => ({
      currentNum: prevState.currentNum + 1,
      correctNum: prevState.correctNum + 1,
      isQuestion: true
    }));
  };

  submitIncorrect = () => {
    this.setState((prevState) => ({
      currentNum: prevState.currentNum + 1,
      isQuestion: true
    }));
  };

  submitStartOver = () => {
    this.setState({
      currentNum: 0,
      correctNum: 0,
      isQuestion: true
    });
  };

  render() {
    const currentNum = this.state.currentNum;
    const correctNum = this.state.correctNum;
    const {questions} = extractDeckProperties(this.props.deck);
    const total = questions.length;
    const question = total > currentNum
      ? normalize(questions[currentNum].question)
      : '';
    const answer = total > currentNum
      ? normalize(questions[currentNum].answer)
      : '';
    const props = {
      currentNum,
      correctNum,
      total,
      question,
      answer,
      isQuestion: this.state.isQuestion,
      toggleQA: this.toggleQA,
      submitCorrect: this.submitCorrect,
      submitIncorrect: this.submitIncorrect,
      goBackDeckDetailView: this.props.goBackDeckDetailView,
      submitStartOver: this.submitStartOver
    };
    if (total === 0) {
      return (
        <View></View>
      );
    } else if (total === currentNum) {
      clearLocalNotificationN()
        .then(setLocalNotificationN);
      return (
        <DeckQuizEndJSX {...props} />
      );
    } else {
      return (
        <DeckQuizJSX {...props} />
      );
    }
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
    goBackDeckDetailView: () => {
      navigation.pop(1);
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DeckQuizView);