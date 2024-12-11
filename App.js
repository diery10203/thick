import * as React from 'react';
import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View, Image, TouchableOpacity,} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function Screen1(){
  
  return(
    <View>
      <Image source={require('./assets/1.png')}/>
      <Text>Discover Your Home</Text>
    </View>
  )
}