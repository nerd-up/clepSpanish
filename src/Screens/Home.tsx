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
      <TouchableOpacity style={styles.moduleBtn} onPress={()=>navigation.navigate('Quiz',{section:'Drill 1'})} ><Text style={styles.sectionStyle}>Uno</Text></TouchableOpacity>
      <TouchableOpacity style={styles.moduleBtn} onPress={()=>navigation.navigate('Quiz',{section:'Drill 2'})} ><Text style={styles.sectionStyle}>Dos</Text></TouchableOpacity>
      <TouchableOpacity style={styles.moduleBtn} onPress={()=>navigation.navigate('Quiz',{section:'Drill 3'})} ><Text style={styles.sectionStyle}>Tres</Text></TouchableOpacity>
      <TouchableOpacity style={styles.moduleBtn} onPress={()=>navigation.navigate('Quiz',{section:'Drill 4'})} ><Text style={styles.sectionStyle}>Quatro</Text></TouchableOpacity>
      <TouchableOpacity style={styles.moduleBtn} onPress={()=>navigation.navigate('Quiz',{section:'Drill 5'})} ><Text style={styles.sectionStyle}>Cinco</Text></TouchableOpacity>
      <TouchableOpacity style={styles.moduleBtn} onPress={()=>navigation.navigate('Quiz',{section:'Drill 6'})} ><Text style={styles.sectionStyle}>Seis</Text></TouchableOpacity>
      <TouchableOpacity style={styles.moduleBtn} onPress={()=>navigation.navigate('Quiz',{section:'Drill 7'})} ><Text style={styles.sectionStyle}>Siete</Text></TouchableOpacity>
      <TouchableOpacity style={styles.moduleBtn} onPress={()=>navigation.navigate('Quiz',{section:'Drill 8'})} ><Text style={styles.sectionStyle}>Ocho</Text></TouchableOpacity>
      <TouchableOpacity style={styles.moduleBtn} onPress={()=>navigation.navigate('Quiz',{section:'Drill 9'})} ><Text style={styles.sectionStyle}>Nueve</Text></TouchableOpacity>
      <TouchableOpacity style={styles.moduleBtn} onPress={()=>navigation.navigate('Quiz',{section:'Drill 10'})} ><Text style={styles.sectionStyle}>Deiz</Text></TouchableOpacity>
    </View>
  )
}

export default Home