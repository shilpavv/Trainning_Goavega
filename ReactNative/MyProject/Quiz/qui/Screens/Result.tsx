import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Title from '../component/title';

const Result = ({navigation, route}: any) => {
  const {score} = route.params;
  const resultBanner =
    score > 60
      ? 'https://cdni.iconscout.com/illustration/premium/thumb/men-celebrating-victory-4587301-3856211.png'
      : 'https://cdni.iconscout.com/illustration/free/thumb/concept-about-business-failure-1862195-1580189.png';
  return (
    <View style={styles.container}>
      <Title titleText="RESULTS" />
      <Text style={styles.scoreValue}>{score}</Text>
      <View style={styles.bannerContainer}>
        {/* <Image source={require('../assets/images/quiz.png')} */}
        <Image
          source={{
            uri: resultBanner,
          }}
          style={styles.banner}
          resizeMode="contain"
        />
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        style={styles.button}>
        <Text style={styles.buttonText}>Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Result;

const styles = StyleSheet.create({
  banner: {
    height: 300,
    width: 300,
  },
  bannerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
    height: '100%',
  },
  button: {
    maxWidth: '25%',
    backgroundColor: '#1A759F',
    padding: 12,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 30,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: '600',
    color: 'white',
  },
  scoreValue: {
    fontSize: 24,
    fontWeight: '800',
    alignSelf: 'center',
  },
});
