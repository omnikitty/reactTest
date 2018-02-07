
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Alert, 
  Button, TextInput, ScrollView
} from 'react-native';
import Files from './Files.js';
import { StackNavigator } from 'react-navigation';

// class LogoTitle extends React.Component {
//   constructor(props) {
//     super(props);

//     this.onButtonPress = this.onButtonPress.bind(this);
//   }

// onButtonPress() {
//     this.props.navigation.navigate('Files');
// }

//   render() {
//     return (
//       <View style={styles.topbar}>
//         <View style={styles.topbarEle}>
//           <Button style={styles.topbarBut} title="back" onPress={this.onButtonPress} />
//         </View>
//         <View style={styles.topbarEle}>
//           <Text style={styles.welcome}> Jot </Text>
//         </View>
//         <View style={styles.topbarEle}></View>
//       </View>
//     );
//   }
// }


export default class NewNote extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      text: "Jot something down"
    }
  }

  static navigationOptions = ({navigation}) => ({
    title: 'Jot',
    headerStyle: {
      backgroundColor: '#b3e4f9',
    },
    headerLeft: (
      <Button
        onPress={() => navigation.navigate('Files')}
        title="back"
        color="#173566"
      />
    ),
  });

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
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    textAlignVertical: 'center',

  },
  topbar: {
    height: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor:'#b3e4f9',

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



