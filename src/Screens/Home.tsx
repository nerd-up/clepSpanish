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
  const loadSections=async()=>{
    const databaseRef = firebase.database().ref('/sections');

    // Fetch data from the database
    databaseRef.once('value')
      .then((snapshot) => {
        const data = snapshot.val();
        for (const i in data){
          sections.push(i);
        }
        setSection(sections);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }
  
  useEffect(()=>{
    loadSections();
  },[])
    const navigation= useNavigation();
  return (
    <View style={styles.homePageContainer} >
    <View style={styles.headingContainer}><Text style={styles.headingStyle}>Spanish Exam</Text></View>
      <Text style={styles.selectSectionStyle}>Select Section</Text>
       {
        section.map((data:any)=>
        <TouchableOpacity style={styles.moduleBtn} onPress={()=>navigation.navigate('Quiz',{section:'Drill 1'})} >
          <Text style={styles.sectionStyle}>{data}</Text>
        </TouchableOpacity>
      )}
     </View>
  )
}

export default Home