import React from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native';
import { globalStyles } from './styles/global';
import { FlatList } from 'react-native-gesture-handler';

export default function Home({navigation}:any) {
  const [reviews, setReviews] =  React.useState([
    { title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'lorem ipsum', key: '1' },
    { title: 'Gotta Catch Them All (again)', rating: 4, body: 'lorem ipsum', key: '2' },
    { title: 'Not So "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: '3' },
  ]);

  
  // const pressHandler = () => {
  //   navigation.navigate('ReviewDetails');
  //   // navigation.push('ReviewDetails');
  // }
  return (
    <View style={globalStyles.container}>
      {/* <Text>Home Screen</Text> */}
      {/* <Button title='to review details screen' onPress={pressHandler} /> */}
      <FlatList
      data={reviews}
      renderItem={({item})=>(
        <TouchableOpacity onPress={()=>navigation.navigate('ReviewDetails',item)}>
          <Text style={globalStyles.titleText}>{item.title}</Text>
        </TouchableOpacity>

      )}
      />
    </View>
  );
}

