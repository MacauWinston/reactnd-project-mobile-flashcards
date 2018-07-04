import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { extractDeckProperties } from '../../utils/helpers';
import { lightGray } from '../../utils/colors';
import {
  Content,
  List,
  ListItem,
  H1,
  H2
} from 'native-base';

const DeckListJSX = ({
  deckList,         // props (array)
  goDeckDetailView, // function (titleAug)
}) => {
  return (
    <Content style={{
      padding: 12
    }}>
      {
        !deckList || deckList.length === 0
          ? <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 72
              }}>
              <H1>No Decks Are Found!</H1>
            </View>
          : <List dataArray={deckList}
              style={{
                marginBottom: 216
              }}
              renderRow={(deck) => {
                const {
                  title,
                  timestamp,
                  questions
                } = extractDeckProperties(deck);
                const titleAug = `${title}@${timestamp}`;
                const deckSize = questions.length;
                return (
                  <ListItem style={{
                      flex: 1,
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      paddingTop: 48,
                      paddingBottom: 48
                    }}>
                    <TouchableOpacity onPress={() => goDeckDetailView(titleAug)}>
                      <H1 style={{
                        marginBottom: 12,
                        textAlign: 'center'
                        }}>
                        {title}
                      </H1>
                      <H2 style={{
                        color: lightGray,
                        textAlign: 'center',
                        }}>
                        {`${deckSize} ${deckSize === 1 ? 'card' : 'cards'}`}
                      </H2>
                    </TouchableOpacity>
                  </ListItem>
                )}
              }>
            </List>
      }
    </Content>
  );
}

export default DeckListJSX;