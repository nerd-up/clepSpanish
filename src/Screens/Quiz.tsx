import { View, Text } from 'react-native'
import React from 'react'
import { styles } from '../Styles/Styling'

const Quiz = () => {
  return (
    <View style={{backgroundColor:'green', flex:1, padding:10,}}>
     <View style={styles.quizContainer}>
         <View style={styles.heading}>
            <Text style={styles.headingText}>
                The Alphabet
            </Text>
         </View>
         <View style={{marginTop:10,padding:10,}}>
         <View style={styles.question}>
            <Text style={styles.questionText}>Q. Ramiro es mas guapo</Text>
         </View>
         <View style={styles.answers}>
            <Text style={styles.answerText}>(a): que  </Text>
            <Text style={styles.answerText}>(b): como
 </Text>
            <Text style={styles.answerText}>
                (c): de
            </Text>
            <Text style={styles.answerText}>
                (d): que 
            </Text>
         </View>
         </View>
     </View>
    </View>
  )
}

export default Quiz