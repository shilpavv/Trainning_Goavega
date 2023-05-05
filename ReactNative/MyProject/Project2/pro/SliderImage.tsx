import { View, Text } from 'react-native'
import React from 'react'
import { SliderBox } from "react-native-image-slider-box";

export default function App() {
  const images=[
    require('./assets/images/image1.png'),
    require('./assets/images/image2.png'),
    require('./assets/images/image3.png'),
  ]
  return (
    <View>
      <SliderBox images={images} dotColor="red" inactivedotColor="black" dotStyle={{height:20,width:20,borderRadius:50}}/>
    </View>
  )
}