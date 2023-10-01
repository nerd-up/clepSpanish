import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from '../Styles/Styling'
import { useNavigation } from '@react-navigation/native'
import firestore from '@react-native-firebase/firestore'
import database, { firebase } from '@react-native-firebase/database';
const Home = () => {
  interface clepSpanish{
    sectionNo:string
  }
  let sections: any=[]
  const [section, setSection]=useState([]);
  
  
  const navigation= useNavigation();
  return (
    <View style={styles.homePageContainer} >
    <View style={styles.headingContainer}><Text style={styles.headingStyle}>Spanish Exam</Text></View>
      <Text style={styles.selectSectionStyle}>Select Section</Text>
      <TouchableOpacity style={styles.moduleBtn} onPress={()=>navigation.navigate('Quiz',{section:'Drill 1'})} >
          <Text style={styles.sectionStyle}>Uno</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.moduleBtn} onPress={()=>navigation.navigate('Quiz',{section:'Drill 2'})} >
          <Text style={styles.sectionStyle}>Dos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.moduleBtn} onPress={()=>navigation.navigate('Quiz',{section:'Drill 3'})} >
          <Text style={styles.sectionStyle}>Tres</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.moduleBtn} onPress={()=>navigation.navigate('Quiz',{section:'Drill 4'})} >
          <Text style={styles.sectionStyle}>Coatro</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.moduleBtn} onPress={()=>navigation.navigate('Quiz',{section:'Drill 5'})} >
          <Text style={styles.sectionStyle}>Tinco</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.moduleBtn} onPress={()=>navigation.navigate('Quiz',{section:'Drill 6'})} >
          <Text style={styles.sectionStyle}>Seis</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.moduleBtn} onPress={()=>navigation.navigate('Quiz',{section:'Drill 7'})} >
          <Text style={styles.sectionStyle}>Siete</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.moduleBtn} onPress={()=>navigation.navigate('Quiz',{section:'Drill 8'})} >
          <Text style={styles.sectionStyle}>Ocho</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.moduleBtn} onPress={()=>navigation.navigate('Quiz',{section:'Drill 9'})} >
          <Text style={styles.sectionStyle}>Nuede</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.moduleBtn} onPress={()=>navigation.navigate('Quiz',{section:'Drill 10'})} >
          <Text style={styles.sectionStyle}>Deiz</Text>
        </TouchableOpacity>

     </View>
  )
}

export default Home