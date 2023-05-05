// export default App
import React, { useState } from 'react';
import {Animated, Text, TouchableOpacity, View} from 'react-native';
  const Animation = () => {
    // const value=useState(new Animated.ValueXY({x:0,y:0}))[0]
    const leftValue=useState(new Animated.Value(0))[0]
    function moveBall() {
      Animated.timing(leftValue, {
        toValue: 100,
        duration: 2000,
        useNativeDriver: false,
      }).start();
       
    }
    return ( 
      <View style={{flex:1}}>
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
          <Animated.View style={[{width: 100,
        height: 100,
        borderRadius:100/2,
        marginLeft:leftValue,
        backgroundColor: 'red'}]}/>

        <TouchableOpacity onPress={moveBall}>
          <Text>Clickme</Text>
        </TouchableOpacity>
        </View>
      </View>
     );
  } 
  export default Animation;