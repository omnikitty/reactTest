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
        title="+"
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
        <ScrollView>
          <View style={styles.textBox}>
            <Text>This is a new page, where a list of files appears</Text>
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
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    textAlignVertical: 'center',

  },
  topbar: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor:'#b3e4f9',
    marginBottom: 5,
  },
  topbarEle: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  topbarBut: {
    backgroundColor: '#173566',
    width: 10,
  },
  textBox: {
    flex: 1,
    padding: 15,
  }
});