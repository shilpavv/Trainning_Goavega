import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
const Header = () => {
    return ( 
        <View style={styles.header}>
            <Text style={styles.title}>My Todos</Text>

        </View>
     );
}
const styles=StyleSheet.create({
    header:{
        height:80,
        paddingTop:38,
        backgroundColor:'coral'

    },
    title:{

    }

})
 
export default Header;