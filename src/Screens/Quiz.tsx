import { View, Text, TouchableOpacity } from 'react-native'
import React,{useState,useEffect} from 'react'
import { styles } from '../Styles/Styling'
import { useNavigation, useRoute } from '@react-navigation/native'
import firestore from '@react-native-firebase/firestore'
import database from '@react-native-firebase/database';

const Quiz = (navigation:any) => {
    const loadData=()=>{
        database()
        .ref('/sections/Dos/')
        .once('value')
        .then(snapshot => {
          console.log('User data: ', snapshot.val());
        });
      }
      useEffect(()=>{loadData()},[])
    const route=useRoute();
    const sectionNumber=route.params?.section
    const [selected, setSelected] = useState(false);
    const updateSelected=()=>{
        setSelected(true);
    }
    navigation= useNavigation();
    return (
        <View style={{ backgroundColor: 'green', flex: 1, padding: 10, }}>
            <View style={styles.quizContainer}>
                <View style={styles.heading}>
                    <Text style={styles.headingText}>
                        {route.params?.section}
                    </Text>
                </View>
                <View style={{ marginTop: 10, padding: 10, }}>
                    <View style={styles.question}>
                        <Text style={styles.questionText}>Q. Ramiro es mas guapo</Text>
                    </View>
                    <View style={styles.answers}>
                        <TouchableOpacity onPress={updateSelected}><Text style={selected?styles.selectedAnswerText:styles.answerText}>(a): que  </Text></TouchableOpacity>
                        <TouchableOpacity onPress={updateSelected}><Text style={selected?styles.selectedAnswerText:styles.answerText}>(b): como</Text></TouchableOpacity>
                        <TouchableOpacity onPress={updateSelected}><Text style={selected?styles.selectedAnswerText:styles.answerText}>(c): de</Text></TouchableOpacity>
                        <TouchableOpacity onPress={updateSelected}><Text style={selected?styles.selectedAnswerText:styles.answerText}>(d): que</Text></TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={{alignItems:'center', justifyContent:'center', marginTop:100}}>
             <TouchableOpacity onPress={()=>navigation.navigate('Result')}>
                <Text style={styles.headingText}>Next</Text>
             </TouchableOpacity>
            </View>
        </View>
    )
}

export default Quiz