import { createStackNavigator } from '@react-navigation/stack';
import Quiz from '../Screens/Quiz';
import Home from '../Screens/Home';
import Result from '../Screens/Result';
import React from 'react'

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home}  options={{headerShown: false}}/>
      <Stack.Screen name="Quiz" component={Quiz} />
      <Stack.Screen name="Result" component={Result} />
    </Stack.Navigator>
  );
}
 export default MyStack