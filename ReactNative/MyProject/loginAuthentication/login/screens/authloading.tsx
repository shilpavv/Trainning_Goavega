import {
    View,
    StyleSheet,
    ActivityIndicator
  
  } from 'react-native';

  const Loading = () => {
   
    return (
      <View style={styles.container}>
        <ActivityIndicator/>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  
  export default Loading;
  