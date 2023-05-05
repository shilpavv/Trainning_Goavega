import {
  View,
  Text,
  Image,
  StyleSheet,
  TextComponent,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
const Signin = ({navigation}:any) => {
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../assets/images/logo.png')}
      />
      <View style={styles.formwrapper}>
        <View style={styles.row}>
          <TextInput 
          style={styles.input} 
          placeholder="Username" />
        </View>
        <View style={styles.row}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
        />
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}  onPress={() => navigation.navigate('Dashboard')}>Sign In</Text>
      </TouchableOpacity>
    </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  input: {
    height: 40,
    paddingHorizontal: 10,
    backgroundColor: '#ddd',
    color: '#333',
  },
  formwrapper: {
    width: '80%',
  },
  row: {
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 10,
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Signin;
