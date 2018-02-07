import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Alert, 
  Button, TextInput, ScrollView
} from 'react-native';

export default class Files extends React.Component {
    static navigationOptions = ({navigation}) => ({
    title: 'Jot',
    headerStyle: {
      backgroundColor: '#b3e4f9',
    },
    headerLeft: (<View></View>),
    headerRight: (
      <Button
        onPress={() => navigation.navigate('Home')}
        title="new note"
        color="#173566"
        fontSize="50"
      />
    ),
  });
    

  constructor(props) {
    super(props);

    this.state = {
      text: "Jot something down"
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.container}>
          <View style={styles.file}/>
          <View style={styles.file}/>
          <View style={styles.file}/>
          <View style={styles.file}/>
          <View style={styles.file}/>
          <View style={styles.file}/>
        </ScrollView>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    backgroundColor: '#F5FCFF',
  },
  file: {
    width: 80,
    height: 100,
    margin: 20,
    backgroundColor: 'skyblue'
  }
});