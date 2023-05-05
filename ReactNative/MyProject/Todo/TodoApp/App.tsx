import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Alert,TouchableWithoutFeedback,Keyboard} from 'react-native';
import Header from './Components/header';
import TodoItem from './Components/todoitem';
import AddTodo from './Components/addTodo';
import Sandbox from './Components/sandbox';

export default function App() {
  const [todos, setTodos] = useState([
    { text: 'buy coffee', key: '1' },
    { text: 'create an app', key: '2' },
    { text: 'play on the switch', key: '3' }
  ]);

  const pressHandler = (key:any) => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.key != key);
    });
  };
  const submitHandler = (text:any) => {
    if(text.length >3){
      setTodos(prevTodos => {
        return [
          {text:text,key:Math.random().toString()},
          ...prevTodos
        ]
      });
    }else{
      Alert.alert('OOPS!','Todo must over 3 char long',[
        {text:'UnderStood',onPress:(()=>console.log("alert closed"))}
      ])
    }
  };

  return (
    // <Sandbox/>
    <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>

    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        {/* add todo form */}
        <AddTodo submitHandler={submitHandler}/>
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <TodoItem item={item} pressHandler={pressHandler} />
            )}
          />
        </View>
      </View>
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    padding: 40,
  },
  list: {
     flex: 1,
    marginTop: 20,
  },
});