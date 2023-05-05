import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { globalStyles } from './styles/global';

export default function ReviewDetails({navigation}:any) {
  // function  presshandler(){
  //   navigation.goBack();
  // }
  return (
    <View style={globalStyles.container}>
      {/* <Text>ReviewDetails</Text> */}
      <Text>{navigation.getParam('title')}</Text>
      <Text>{navigation.getParam('body')}</Text>
      <Text>{navigation.getParam('rating')}</Text>
      {/* <Button title='back to home' onPress={presshandler}></Button> */}
    </View>
  );
}

