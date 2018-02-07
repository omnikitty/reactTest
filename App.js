/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Alert, 
  Button, TextInput, ScrollView
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import NewNote from './NewNote.js';
import Files from './Files.js';

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}

const RootStack = StackNavigator({
    Home: {
      screen: NewNote,
    },
    Files: {
      screen: Files,
    },
  }, 
  {
    initialRouteName: 'Home',
    // navigationOptions: {
    //   title: 'Jot',
    //   headerStyle: {
    //     backgroundColor: '#f4511e',
    //   },
    //   headerTintColor: '#fff',
    //   headerTitleStyle: {
    //     fontWeight: 'bold',
    //   },
    // },

  });


