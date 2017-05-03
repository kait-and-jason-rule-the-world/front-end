/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import TestComponent from './TestComponent';
import ScrollTest from './ScrollTest';
import MapView from 'react-native-maps';

export default class kaitAndJasonRuleTheWorld extends Component {
  constructor(){
    super();
    this.state = {
      passThisDown: ''
    }
  }

  setStateToThis(text){
    this.setState({
      passThisDown: text
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Kait and Jason Rule the World
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
        <MapView initialRegion={{
          latitude: 40.739885,
          longitude: -73.990082,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
        />
        <TestComponent setStateToThis={this.setStateToThis.bind(this)} />
        <Text style={styles.instructions}>{this.state.passThisDown}</Text>
        <ScrollTest />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('kaitAndJasonRuleTheWorld', () => kaitAndJasonRuleTheWorld);
