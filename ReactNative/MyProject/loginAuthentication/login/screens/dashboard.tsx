import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
  
  } from 'react-native';

  const Dashboard = ({navigation}:any) => {
   
  
    return (
      <View style={styles.container}>
         <View style={styles.dashboardwrapper}>
        <Text  style={styles.userText}>Hey User</Text>
        <TouchableOpacity style={styles.logoutBtn}>
            <Text  style={styles.logoutText} onPress={() => navigation.navigate('Signin')}>LOGOUT</Text>
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
    userText:{
        fontSize:30,
        fontWeight:"bold"
    },
    dashboardwrapper:{

    },
    logoutBtn:{
            backgroundColor:"red",
            paddingVertical:10,
            width:100,
            alignSelf:"center"
    },
    logoutText:{
            color:"#fff",
            textAlign:"center",
            fontWeight:"bold"
    }
  });
  
  export default Dashboard;
  