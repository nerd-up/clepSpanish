import { View, Text, TouchableOpacity,ActivityIndicator } from 'react-native'
import React,{useState,useEffect} from 'react'
import { styles } from '../Styles/Styling'
import { useNavigation, useRoute } from '@react-navigation/native'
import firestore from '@react-native-firebase/firestore'
import database, { firebase } from '@react-native-firebase/database';


const Quiz = (navigation:any) => {
    const [dbQuestions,setDbQuestions]=useState([]);
    const [score, setScores]=useState(0);
    const [currentQuestionIndex, setCurrentQuestionIndex]=useState(0);
    const [options, setOptions]=useState([]);
    const setQuestionOptions=(index:any)=>{
        let setOption=[]
        if(index>=0){
            let setOption=dbQuestions[index]?.wrongAnswer;
            setOption.push(dbQuestions[index]?.correctAnswer);
            // console.log(setOption);
            setOptions(setOption);
            console.log(options.length);
        }
    }
    const setNextQuestion=()=>{
        setCurrentQuestionIndex(currentQuestionIndex+1);
        setQuestionOptions(currentQuestionIndex);
    }
        const loadData=()=>{
        const database=firebase.database();
        const loadSection=database.ref('sections/Uno');
        loadSection.on('value',(snapshot)=>{
           const data=snapshot.val();
           if(data!=null){
            const questions:any=Object.values(data);
            // console.log(questions);
            setDbQuestions(questions);
            setQuestionOptions(currentQuestionIndex);
            // console.log(dbQuestions);
           }
        });
    }
    useEffect(()=>{loadData()},[])
    const route=useRoute();
    const sectionNumber=route.params?.section
    const [selected, setSelected] = useState(-1);
    const updateSelected=(selectedIndex:any)=>{
        setSelected(selectedIndex);
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
                    <Text style={styles.questionText}>Q. {dbQuestions[currentQuestionIndex]?.question}</Text> 
                </View>
                <View style={styles.answers}>
                    <TouchableOpacity onPress={()=>updateSelected(0)}><Text style={selected==0?styles.selectedAnswerText:styles.answerText}>(a): {options[0]}</Text></TouchableOpacity>
                    <TouchableOpacity onPress={()=>updateSelected(1)}><Text style={selected==1?styles.selectedAnswerText:styles.answerText}>(b): {options[1]}</Text></TouchableOpacity>
                    <TouchableOpacity onPress={()=>updateSelected(2)}><Text style={selected==2?styles.selectedAnswerText:styles.answerText}>(c): {options[2]}</Text></TouchableOpacity>
                    <TouchableOpacity onPress={()=>updateSelected(3)}><Text style={selected==3?styles.selectedAnswerText:styles.answerText}>(d): {options[3]}</Text></TouchableOpacity>
                </View>
            </View>
        </View>
        <View style={{alignItems:'center', justifyContent:'center', marginTop:100}}>
         <TouchableOpacity onPress={dbQuestions.length>currentQuestionIndex?()=>setNextQuestion():()=>navigation.navigate('Result')}>
            <Text style={styles.headingText}>Next</Text>
         </TouchableOpacity>
        </View>
    </View>
    )
}

export default Quiz