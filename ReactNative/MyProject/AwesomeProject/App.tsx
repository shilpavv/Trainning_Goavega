import React, {useState} from 'react';
import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
export default function App() {
  const [people, setPeople] = useState([
    {name: 'shilpa', id: '1'},
    {name: 'sai', id: '2'},
  ]);
  const handleclick = (id: any) => {
    // console.log('hfhfh');
    console.log(id)
    setPeople((prev)=>{
      return prev.filter(people=>people.id != id)
    })
  };
  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        keyExtractor={item => item.id}
        data={people}
        renderItem={({item}) => (
          <TouchableOpacity onPress={()=>handleclick(item.id)}>
            <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>
        )}
        />
    </View>     
        // <View>
        // {people.map((item:any)=>(
        //     <View>
        //     <Text> {item.name}</Text>
        //     </View>
        // ))}
        // </View>
        // <View style={styles.container}>
        //   <View style={styles.header}>
        //     <Text style={styles.boldText}>Hello, World!</Text>
        //   </View>
        //   <View style={styles.body}>
        //     <Text style={styles.boldText}>Apple <Text>Is</Text><Text>Good</Text></Text>
        //     <Text>Orange</Text>
        //     <Text>Strawberry</Text>
        //   </View>
        
        // </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  item: {
    flex: 1,
    marginHorizontal: 10,
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24,
  },
});
