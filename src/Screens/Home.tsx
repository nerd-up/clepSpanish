import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from '../Styles/Styling'
import { useNavigation } from '@react-navigation/native'
const Home = () => {
    const navigation= useNavigation();
  return (
    <View style={styles.homePageContainer} >
    <View style={styles.headingContainer}><Text style={styles.headingStyle}>Spanish Exam</Text></View>
      <TouchableOpacity style={styles.moduleBtn} onPress={()=>navigation.navigate('Quiz')}><Text style={styles.selectSectionStyle}>Select Section</Text></TouchableOpacity>
      <TouchableOpacity style={styles.moduleBtn} onPress={()=>navigation.navigate('Quiz')} ><Text style={styles.sectionStyle}>Section Uno</Text></TouchableOpacity>
      <TouchableOpacity style={styles.moduleBtn} onPress={()=>navigation.navigate('Quiz')} ><Text style={styles.sectionStyle}>Spanish Dos</Text></TouchableOpacity>
      <TouchableOpacity style={styles.moduleBtn} onPress={()=>navigation.navigate('Quiz')} ><Text style={styles.sectionStyle}>Spanish Tres</Text></TouchableOpacity>
      <TouchableOpacity style={styles.moduleBtn} onPress={()=>navigation.navigate('Quiz')} ><Text style={styles.sectionStyle}>Spanish Quatro</Text></TouchableOpacity>
      <TouchableOpacity style={styles.moduleBtn} onPress={()=>navigation.navigate('Quiz')} ><Text style={styles.sectionStyle}>Spanish Cinco</Text></TouchableOpacity>
      <TouchableOpacity style={styles.moduleBtn} onPress={()=>navigation.navigate('Quiz')} ><Text style={styles.sectionStyle}>Spanish Seis</Text></TouchableOpacity>
      <TouchableOpacity style={styles.moduleBtn}onPress={()=>navigation.navigate('Quiz')} ><Text style={styles.sectionStyle}>Spanish Siete</Text></TouchableOpacity>
      <TouchableOpacity style={styles.moduleBtn}onPress={()=>navigation.navigate('Quiz')} ><Text style={styles.sectionStyle}>Spanish Ocho</Text></TouchableOpacity>
      <TouchableOpacity style={styles.moduleBtn}onPress={()=>navigation.navigate('Quiz')} ><Text style={styles.sectionStyle}>Spanish Nueve</Text></TouchableOpacity>
      <TouchableOpacity style={styles.moduleBtn}onPress={()=>navigation.navigate('Quiz')} ><Text style={styles.sectionStyle}>Spanish Deiz</Text></TouchableOpacity>
    </View>
  )
}

export default Home