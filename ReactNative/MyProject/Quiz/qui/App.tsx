import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Home from './Screens/Home'
import Quiz from './Screens/Quiz'
import Result from './Screens/Result'
import { NavigationContainer } from '@react-navigation/native';
import MyStack from './Navigation'

function App() {
  return (
      <NavigationContainer>
        <MyStack/>
      </NavigationContainer>
  )
}

export default App
const styles=StyleSheet.create({
  container:{
      paddingTop: 40,
      paddingHorizontal: 14,
  }

})