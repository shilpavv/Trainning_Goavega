import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FancyCard = () => {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card,styles.cardEle]}>
      <Image 
      source=
      {{uri: 'https://reactjs.org/logo-og.png'}}
       style={styles.cardImg} 
       />
      </View>
    </View>
  )
}

export default FancyCard

const styles = StyleSheet.create({
    headingText:{
        
    },
    card:{

    },cardEle:{

    },
    cardImg:{
        height:180
    }
})