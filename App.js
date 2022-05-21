/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  StyleSheet,
  Text,
  View,
  Button,
  Linking,
} from 'react-native';
import NativeLinkingManager from 'react-native/Libraries/Linking/NativeLinkingManager';


const App = () => {
  return (
    <View style={styles.body}>
      <Text style = {styles.text}>Hello World!</Text>
      <Button onPress={() =>{Linking.openURL('https://www.google.com')}} title='google'></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#fffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#0000ff',
    fontSize: 20,
    fontStyle: 'italic',
    margin: 10,
  }
});

export default App;
