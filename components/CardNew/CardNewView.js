import React, { Component } from 'react';

import { connect } from 'react-redux';
import { createCardAPI } from '../../actions';
import { normalize } from '../../utils/helpers';
import CardNewJSX from './CardNewJSX';

class CardNewView extends Component {
  state = {
    question: '',
    answer: ''
  };

  changeQuestion = (question) => {
    this.setState({ question });
  };

  changeAnswer = (answer) => {
    this.setState({ answer });
  };

  submitCard = (question, answer) => {
    question = normalize(question);
    answer = normalize(answer);
    if (question.length === 0 || answer.length === 0) {
      return;
    }
    this.props.createCardAPI(question, answer);
    this.setState({
      question: '',
      answer: ''
    },
      () => {
        this.props.goBack();
      });
  };

  render() {
    const props = {
      question: this.state.question,
      answer: this.state.answer,
      changeQuestion: this.changeQuestion,
      changeAnswer: this.changeAnswer,
      submitCard: this.submitCard
    };
    return (
      <CardNewJSX {...props} />
    );
  }
}

function mapStateToProps ({}) {
  return {};
}

function mapDispatchToProps (dispatch, { navigation }) {
  const titleAug = navigation.state.params.deckTitleAug;
  return {
    createCardAPI: (question, answer) => {
      dispatch(createCardAPI(titleAug, {question, answer}));
    },
    goBack: () => {
      navigation.goBack();
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CardNewView);