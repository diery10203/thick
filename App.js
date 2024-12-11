import * as React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {Provider} from "react-redux";
import {store} from "./src/redux/store"

import Screen1 from "./src/pages/Screen1";
import Screen2 from "./src/pages/Screen2"

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
        <Provider store ={store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName = "Screen1">
              <Stack.Screen name = "Screen1" component = {Screen1}/>
              <Stack.Screen name = "Screen2" component = {Screen2}/>
          </Stack.Navigator>    
        </NavigationContainer>
        </Provider>
  );
}
