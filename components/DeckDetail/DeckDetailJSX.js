import React from 'react';
import { View } from 'react-native';
import { extractDeckProperties } from '../../utils/helpers';
import { lightGray } from '../../utils/colors';
import {
  Content,
  H1,
  H2,
  Button,
  Text
} from 'native-base';

const DeckDetailJSX = ({
  deck,             // props (object)
  goCardAddView,    // function ()
  goDeckQuizView,   // function ()
  goBack,           // function ()
}) => {
  if (deck && Object.keys(deck).length === 0) {
    goBack();
  }
  const {
    title,
    questions
  } = extractDeckProperties(deck);
  const deckSize = questions.length;
  return (
    <Content style={{
      padding: 12
    }}>
      <View style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 72,
          }}>
        <H1 style={{
          marginBottom: 12,
          textAlign: 'center'
          }}>
            {title}
        </H1>
        <H2 style={{
          color: lightGray,
          marginBottom: 72,
          textAlign: 'center'
          }}>
          {`${deckSize} ${deckSize === 1 ? 'card' : 'cards'}`}
        </H2>
        <Button
          block
          dark
          bordered
          onPress={() => goCardAddView()}
          style={{
            marginBottom: 12
          }}
          >
          <Text>Add Card</Text>
        </Button>
        <Button
          block
          light={deckSize === 0}
          dark={deckSize > 0}
          onPress={
            deckSize > 0 
              ? () => goDeckQuizView()
              : null
          }
          style={{
            marginBottom: 216
          }}
          >
          <Text>Start Quiz</Text>
        </Button>
      </View>
    </Content>
  );
};

export default DeckDetailJSX;