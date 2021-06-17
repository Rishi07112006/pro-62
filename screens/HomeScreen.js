import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import AppHeader from '../components/AppHeader';
import db from '../Config';


export default class HomeScreen extends React.Component {
  rishi1Pressed(){
    var rishi1 = db.ref('Rishi/' + '/')
    rishi1.update({
      'absent' : 'true'
    })
  }

    rishi2Pressed(){
    var rishi2 = db.ref('Rishi/' + '/')
    rishi2.update({
      'Present' : 'true'
    })
  }

   sreenikethan1Pressed(){
    var sreenikethan1 = db.ref('Sreenikethan/' + '/')
    sreenikethan1.update({
      'absent' : 'true'
    })
  }

    sreenikethan2Pressed(){
    var sreenikethan2 = db.ref('Sreenikethan/' + '/')
    sreenikethan2.update({
      'Present' : 'true'
    })
  }

   sriram1Pressed(){
    var sriram1 = db.ref('Sriram/' + '/')
    sriram1.update({
      'absent' : 'true'
    })
  }

    sriram2Pressed(){
    var sriram2 = db.ref('Sriram/' + '/')
    sriram2.update({
      'Present' : 'true'
    })
  }

   tanvi1Pressed(){
    var tanvi1 = db.ref('Tanvi/' + '/')
    tanvi1.update({
      'absent' : 'true'
    })
  }

  tanvi2Pressed(){
    var tanvi2 = db.ref('Tanvi/' + '/')
    tanvi2.update({
      'Present' : 'true'
    })
  }

  goToSummaryScreen = () => {
    this.props.navigation.navigate('SummaryScreen', {color: 'yellow'});
  };

  render(){
    return(
      <View>
      <AppHeader />

      <Text style={styles.studenChartContainer}>Rishi</Text>
      <Text style={styles.studenChartContainer}>Sreenikethan</Text>
      <Text style={styles.studenChartContainer}>Sriram</Text>
      <Text style={styles.studenChartContainer}>Tanvi</Text>

      <TouchableOpacity
      style={styles.button}
      onPress={() => {
        this.rishi1Pressed();
      }}>
      <Text style={styles.buttonText}>Absent</Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.button}
      onPress={() => {
        this.sreenikethan1Pressed();
      }}>
      <Text style={styles.buttonText}>Absent</Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.button}
      onPress={() => {
        this.sriram1Pressed();
      }}>
      <Text style={styles.buttonText}>Absent</Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.button}
      onPress={() => {
        this.tanvi1Pressed();
      }}>
      <Text style={styles.buttonText}>Absent</Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.button2}
      onPress={() => {
        this.rishi2Pressed();
      }}>
      <Text style={styles.button2Text}>Present</Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.button2}
      onPress={() => {
        this.sreenikethan2Pressed();
      }}>
      <Text style={styles.button2Text}>Present</Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.button2}
      onPress={() => {
        this.sriram2Pressed();
      }}>
      <Text style={styles.button2Text}>Present</Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.button2}
      onPress={() => {
        this.tanvi2Pressed();
      }}>
      <Text style={styles.button2Text}>Present</Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.button3}
      onPress={() => {
        this.goToSummaryScreen('yellow');
      }}>
      <Text style={styles.button3Text}>Submit</Text>
      </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
container: {
  flex : 1
},
text: {
  fontSize : 20,
  fontWeight : 'bold',
  marginTop : 30,
},
studenChartContainer: {
  flexDirection : 'row',
  padding : 10,
  alignItems : 'center',
  margin : 20,
},
button: {
  justifyContent : 'center',
  alignSelf : 'center',
  borderWidth : 2,
  borderRadius : 5,
  marginTop : -95,
  marginLeft : 200,
  width : 100,
  height : 30,
  backgroundColor : 'red'
},
buttonText: {
  textAlign : 'center',
  color : 'white',
},
button2: {
  justifyContent : 'center',
  alignSelf : 'center',
  borderWidth : 2,
  borderRadius : 5,
  marginTop :15,
  marginLeft : -3,
  width : 100,
  height : 30,
  backgroundColor : 'green',
},
button2Text: {
  textAlign : 'center',
  color : 'white',
},
button3: {
  justifyContent : 'center',
  alignSelf : 'center',
  borderWidth : 2,
  borderRadius : 5,
  marginTop : 90,
  marginLeft : 40,
  width : 200,
  height : 50,
  backgroundColor : 'yellow',
},
button3Text: {
  textAlign : 'center',
  color : 'purple',
},
});


