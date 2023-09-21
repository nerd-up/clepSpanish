import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Quiz from "./src/Screens/Quiz";
import { NavigationContainer } from "@react-navigation/native";
import MyStack from "./src/navigation/Navigator";
const App =()=>{
  return(
   <NavigationContainer>
    <MyStack />
   </NavigationContainer>
  );
}

export default App;
