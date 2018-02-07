
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Alert, Button, TextInput, ScrollView
} from 'react-native';
import Files from './Files.js';
import { StackNavigator } from 'react-navigation';

export default class NewNote extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      text: "Jot something down"
    }
  }

  static navigationOptions = ({navigation}) => {
    const params = navigation.state.params || {};
    return {
        title: 'Jot',
        headerStyle: {
        backgroundColor: '#b3e4f9',
        },
        headerLeft: (
        <Button onPress={() => navigation.navigate('Files')}
            title="my files" color="#173566" />
        ),
        headerRight: (
            <Button onPress={params.postNote}
            title="save" color="#173566" />
        ),}
  };

  componentWillMount() {
    this.props.navigation.setParams({ postNote: this._postNote });
  }

  _postNote = () => {
    // fetch('https://mywebsite.com/endpoint/', {
    //     method: 'POST',
    //     headers: {
    //         Accept: 'application/json',
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //         firstParam: 'yourValue',
    //         secondParam: 'yourOtherValue',
    //     }),
    //     });
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.textBox}>
            <TextInput
              style={{ borderColor: '#F5FCFF', borderWidth: 1}}
              multiline={true}
              onChangeText={(text) => this.setState({text})}
              value={this.state.text}
            />
          </View>
        </ScrollView>
      </View>
    );
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
  },
  textBox: {
    flex: 1,
    padding: 15,
  }
});



