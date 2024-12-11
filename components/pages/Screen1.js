import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function Screen1() {
  const navigation = useNavigation();
  return(
    <View style = {styles.container}>

    <View style = {styles.container_title1}>
    <Text>A premium online store for</Text>
    <Text>and their stylish choice</Text>
    </View>

    <View style = {styles.container_bike}>
      //Bluebike
    </View>

    <View style ={styles.container_title2}>
      <Text>POWER BIKE SHOP</Text>
    </View>

    <View style={styles.container_btn}>
      <TouchableOpacity style={styles.btn1} onPress ={()=>navigation.navigate('Screen2')}>
        <Text>Get Started</Text>
      </TouchableOpacity>
    </View>
  </View>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },

    container_title1:{
      width: 351,
      height: 87,
      alignItems: 'center',
      justifyContent: 'center',
  },
    container_bike:{
      width: 359,
      height: 388,
      alignItems: 'center',
      justifyContent: 'center'
  },
    container_title2:{
      width: 375,
      height: 61,
      alignItems: 'center',
      justifyContent: 'center',
    },
    container_btn:{
      width: 320,
      height: 61,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 61,
      borderWidth: 1,
      backgroundColor: 'red',
      borderBlockColor: 'red',
    },
  });