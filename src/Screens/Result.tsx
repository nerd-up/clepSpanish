import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Result = () => {
    
  return (
    <View style={styles.ResultContainer }>
      <Text>Result</Text>
    </View>
  )
}
const styles=StyleSheet.create({
    ResultContainer: {
        flex: 1, backgroundColor: 'green', alignItems: 'center', justifyContent: 'center', alignContent: 'center'
    }
})
export default Result