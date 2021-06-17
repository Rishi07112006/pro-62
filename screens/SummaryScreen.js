import * as React from 'react';
import { View, Text, TouchableOpacity,StyleSheet } from 'react-native';
import db from '../Config';

class SummaryScreen extends React.Component {

  render() {
    return(
      <TouchableOpacity
      stle={[styles.button, {backgroundColor: this.props.color}]}
      onPress={() => {
        this.props.navigation.navigate('HomeScreen');
      }}>
      <Text style={styles.buttonText}>Get Attendance</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    marginTop : 10,
    marginLeft : 80,
    borderWidth : 1,

    borderColor : 'rgba(0,0,0,0.2)',
    alignItems : 'center',
    justifyContent : 'center',
    width : 200,
    height : 30,
    backgroundColor : 'yellow',
    borderRadius : 10,
  },
  buttonText: {
    fontWeight : 'bold',
    fontSize : 20,
  },

});

export default SummaryScreen;