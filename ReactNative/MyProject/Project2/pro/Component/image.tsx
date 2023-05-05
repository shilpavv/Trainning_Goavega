import React from 'react';
import {View, Text, Image, ScrollView, TextInput} from 'react-native';

const Images = () => {
  return (
    <ScrollView>
      <Text>LIZA</Text>
      <View>
        <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
          }}
          style={{width: 200, height: 200}}
        />
      </View>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
        }}
        defaultValue="You can type in me"
      />
    </ScrollView>
  );
};

export default Images;