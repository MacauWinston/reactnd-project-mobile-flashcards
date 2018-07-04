import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { red } from '../../utils/colors';
import { normalize } from '../../utils/helpers';
import {
  Content,
  H1,
  H2,
  Button,
  Text
} from 'native-base';

const DeckQuizJSX = ({
  currentNum,       // state (int)
  total,            // props (int)
  question,         // props (string)
  answer,           // props (string)
  isQuestion,       // state (boolean)
  toggleQA,         // function ()
  submitCorrect,    // function ()
  submitIncorrect,  // function ()
}) => {
  return (
    <Content style={{
      padding: 12
    }}>
      <H2 style={{
          textAlign: 'left',
          marginTop: 12,
          marginBottom: 36
          }}>
          {`${currentNum+1}/${total}`}
        </H2>
      <View style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
        
        <H1 style={{
          textAlign: 'center',
          marginBottom: 36
        }}>
          {isQuestion ? normalize(question) : normalize(answer)}
        </H1>
        <TouchableOpacity onPress={() => toggleQA()}>
          <H2 style={{
            color: red,
            textAlign: 'center',
            marginBottom: 72
            }}>
            {isQuestion ? 'Answer' : 'Question'}
          </H2>
        </TouchableOpacity>
        <Button
          block
          success
          onPress={() => submitCorrect()}
          style={{
            marginBottom: 12
          }}
          >
          <Text>Correct</Text>
        </Button>
        <Button
          block
          danger
          onPress={() => submitIncorrect()}
          style={{
            marginBottom: 216
          }}
          >
          <Text>Incorrect</Text>
        </Button>
      </View>
    </Content>
  );
}

export default DeckQuizJSX;