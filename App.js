import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation'; 
import {createBottomTabNavigator} from 'react-navigation-tabs';

import BookTransactionScreen from './screens/FaceBookScreen';
import SearchScreen from './screens/InstagramScreen';
import FaceBookScreen from './screens/FaceBookScreen';
import InstagramScreen from './screens/InstagramScreen';

export default class App extends React.Component {
  render() {
    return (
        <Appcontainer />
    )
  }
}

const TabNavigator = createBottomTabNavigator({
  FaceBook:{screen:FaceBookScreen},
  Instagram:{screen:InstagramScreen} 
})
const Appcontainer = createAppContainer(TabNavigator)