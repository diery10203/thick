import * as React from 'react';
import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View, Image, TouchableOpacity,} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function Screen1(){
  const navigation = useNavigation();
  return(
    <View style = {styles.container} >
     
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems: 'center',
  },
  btn_ls:{
    flexDirection: 'row',
    padding: 10,
  },
  btn_log:{
    borderWidth: 1,
    borderRadius: 5,
  },
})