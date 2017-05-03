import React, { Component } from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native';


export default class TestComponent extends Component {
  constructor(){
    super();
    this.state = {
      testState: ''
    };
  };

  //e.target.value doesn't actually exist
  //thinking in mobile is HARD
  changeState(text){
    this.setState({
      testState: text
    });
  };

  //NOTHING MAKES SENSE
  //ALL OF THESE NEW COMPONENT BLOCKS
  //I CAN'T USE STANDARD HTML
  //WHY IS THIS A THING
  render(){
    return(
      <Text>
        <TextInput style={styles.textField} onChangeText={(text) => this.props.setStateToThis(text)} placeholder='write some stuff here' />
      </Text>
    )
  }
}
const styles = StyleSheet.create({
  textField: {
    backgroundColor: 'rebeccapurple',
    width: '200%',
    height: '40%'
  },
  text: {
    color: 'aliceblue',
    width: '100%',
    height: '10%'
  },
  header: {
    fontSize: 25,
    fontWeight: '900',
    textAlign: 'center',
    width: '100%',
    height: '100%'
  }
});
