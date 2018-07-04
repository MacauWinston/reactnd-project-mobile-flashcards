import React from 'react';
import { View, StatusBar } from 'react-native';
import { Constants } from 'expo'
import { Container } from 'native-base';
import { gray, white } from '../../utils/colors';
import {
  createMaterialTopTabNavigator,
  createStackNavigator
} from 'react-navigation';

import DeckListView from '../DeckList/DeckListView';
import DeckNewView from '../DeckNew/DeckNewView';
import DeckDetailView from '../DeckDetail/DeckDetailView';
import CardNewView from '../CardNew/CardNewView';
import DeckQuizView from '../DeckQuiz/DeckQuizView';

const StatusBarJSX = ({
  backgroundColor, ...props
}) => {
  return (
    <View style={{
      backgroundColor,
      height: Constants.statusBarHeight }}
      >
      <StatusBar
        translucent
        backgroundColor={backgroundColor}
        {...props}
        />
    </View>
  );
}

const Tabs = createMaterialTopTabNavigator({
  DeckListView: {
    screen: DeckListView,
    navigationOptions: {
      tabBarLabel: 'DECKS'
    }
  },
  DeckNewView: {
    screen: DeckNewView,
    navigationOptions: {
      tabBarLabel: 'NEW DECK'
    }
  }
}, {
  tabBarOptions: {
    style: {
      backgroundColor: gray
    }
  }
});

const MainNavigator = createStackNavigator({
  Home: {
    screen: Tabs,
    navigationOptions: {
      title: 'Home',
      header: null
    }
  },
  DeckDetailView: {
    screen: DeckDetailView,
    navigationOptions: ({ navigation }) => {
      const titleAug = navigation.state.params.deckTitleAug;
      const n = titleAug.lastIndexOf('@');
      const title = titleAug.substring(0, n);
      return {
        title: title,
        headerTintColor: white,
        headerStyle: {
          backgroundColor: gray
        }
      }
    }
  },
  CardNewView: {
    screen: CardNewView,
    navigationOptions: {
      title: 'Add Card',
      headerTintColor: white,
      headerStyle: {
        backgroundColor: gray
      }
    }
  },
  DeckQuizView: {
    screen: DeckQuizView,
    navigationOptions: {
      title: 'Quiz',
      headerTintColor: white,
      headerStyle: {
        backgroundColor: gray
      }
    }
  }
}, {
  cardStyle: {
    backgroundColor: white
  }
});

const HomeJSX = () => {
  return (
    <Container>
      <StatusBarJSX
        backgroundColor={gray}
        barStyle='light-content'
        />
        <MainNavigator />
    </Container>
  );
}

export default HomeJSX;