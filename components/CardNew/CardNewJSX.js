import React from 'react';
import { View } from 'react-native';
import { normalize } from '../../utils/helpers';
import {
  Content,
  H1,
  Textarea,
  Button,
  Text
} from 'native-base';

const CardNewJSX = ({
  question,       // state (string)
  answer,         // state (string)
  changeQuestion, // function (string)
  changeAnswer,   // function (string)
  submitCard,     // function (string, string)
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
          marginBottom: 36
        }}>
          What is the question and answer of your new card?
        </H1>
        <Textarea
          rowSpan={3}
          bordered
          placeholder='Card Question'
          value={question}
          onChangeText={question => changeQuestion(question)}
          style={{
            width: '100%',
            marginBottom: 36
          }}
          />
        <Textarea
          rowSpan={5}
          bordered
          placeholder='Card Answer'
          value={answer}
          onChangeText={answer => changeAnswer(answer)}
          style={{
            width: '100%',
            marginBottom: 36
          }}
          />
        <Button
          block
          success={
            normalize(question).length > 0
            && normalize(answer).length > 0
          }
          light={
            normalize(question).length === 0
            || normalize(answer).length === 0
          }
          onPress={() => submitCard(question, answer)}
          style={{
            marginBottom: 216
          }}
          >
          <Text>Submit</Text>
        </Button>
      </View>
    </Content>
  );
}

export default CardNewJSX;