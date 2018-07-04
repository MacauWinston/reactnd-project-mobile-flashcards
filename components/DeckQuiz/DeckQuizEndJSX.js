import React from 'react';
import { View } from 'react-native';
import { lightGray } from '../../utils/colors';
import {
  Content,
  H1,
  H2,
  Button,
  Text
} from 'native-base';

const DeckQuizEndJSX = ({
  correctNum,                 // state (int)
  total,                      // props (int)
  goBackDeckDetailView,       // function ()
  submitStartOver,            // function ()
}) => {
  return (
    <Content style={{
      padding: 12
    }}>
      <View style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 36,
        }}>
        <H1 style={{
          textAlign: 'center',
          marginBottom: 72
        }}>
          Scoreboard
        </H1>
        <H2 style={{
          textAlign: 'center',
          marginBottom: 36
          }}>
          {`${correctNum} out of ${total} questions answered correctly.`}
        </H2>
        <H2 style={{
          color: lightGray,
          textAlign: 'center',
          marginBottom: 72
          }}>
          {`${Number.parseFloat(correctNum*100.0/total).toFixed(2)}% is your score.`}
        </H2>
        <Button
          block
          bordered
          dark
          onPress={() => goBackDeckDetailView()}
          style={{
            marginBottom: 12
          }}
          >
          <Text>Back to Deck</Text>
        </Button>
        <Button
          block
          dark
          onPress={() => submitStartOver()}
          style={{
            marginBottom: 216
          }}
          >
          <Text>Start Over</Text>
        </Button>
      </View>
    </Content>
  );
}

export default DeckQuizEndJSX;