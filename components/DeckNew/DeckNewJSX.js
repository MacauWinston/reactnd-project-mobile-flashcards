import React from 'react';
import { View } from 'react-native';
import { normalize } from '../../utils/helpers';
import {
  Content,
  H1,
  Item,
  Input,
  Button,
  Text
} from 'native-base';

const DeckNewJSX = ({
  title,        // state (string)
  changeTitle,  // function (string)
  submitTitle,  // function (string)
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
          marginTop: 72,
        }}>
        <H1 style={{
          textAlign: 'center',
          marginBottom: 36
        }}>
          What is the title of your new deck?
        </H1>
        <Item regular style={{
          marginBottom: 36
        }}>
          <Input
            placeholder='Deck Title'
            value={title}
            onChangeText={text => changeTitle(text)}
            />
        </Item>
        <Button
          block
          success={normalize(title).length > 0}
          light={normalize(title).length === 0}
          onPress={() => submitTitle(title)}
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

export default DeckNewJSX;