import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Result = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.ResultContainer }>
      <Text style={{fontSize: 49, color: 'white', margin: 5}}>Result</Text>
      <Image source={require('../../images/senorita.jpg')}></Image>
      <Text style={{fontSize: 49, color: 'white', margin: 5}}>Score: 100</Text>
      <TouchableOpacity onPress={()=>navigation.popToTop()}>
      <Text style={{fontSize: 49, color: 'white', margin: 5}}>New Quiz</Text>
      </TouchableOpacity>
    </View>
  )
}
const styles=StyleSheet.create({
    ResultContainer: {
        flex: 1, backgroundColor: 'green', alignItems: 'center', justifyContent: 'center', alignContent: 'center'
    }
})
export default Result