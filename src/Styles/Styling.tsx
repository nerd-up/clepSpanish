
import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    homePageContainer:{
      flex: 1,
      backgroundColor: 'green',
      padding:10,
      alignItems: 'center',
      alignContent: 'center',
      fontFamily:'Irish Grover',
      justifyContent: 'center'
    },
    headingContainer:{
      padding: 10,
      margin: 8,
    },
    headingStyle:{
      fontSize: 31,
      color: 'white',
      fontFamily: 'arial',
      fontStyle: 'italic', 
    },
    sectionStyle: {
      color: 'white',
      fontSize: 20, 
      margin: 5
  
    },
    selectSectionStyle:{
      color: 'white',
      fontSize: 20, 
     
      margin: 5
    },
    
    moduleBtn:{
      margin:5,
      padding:5,
      flex:1,
      width:'50%',
      alignItems:'center',
      borderRadius:15,
      backgroundColor:'rgba(0,1,0,0.2)',
      borderWidth:3,
      borderColor:'white'
    }
    ,

    /** for the quiz screen */
     quizContainer:{
        margin:20,
        top:60,
        height:'auto',
        justifyContent:'center',
        
     },

     heading:{
        margin:5,
        padding:5,
        alignItems:'center',
        
     },
     headingText:{
        color:'#fff',
        fontWeight:'bold',
        fontSize:28,

     },
     question:{
  padding:5,
  margin:2,
  marginTop:10,


     }
  ,
  questionText:{
    fontSize:22,
    color:'#fff',

  },
  answers:{
    padding:5,
    margin:2,
  },
  answerText:{
    fontSize:18,
    color:'#fff',
    margin:5,
    padding:10,
    backgroundColor:'rgba(0,1,0,0.2)',
    borderRadius:30,
    borderWidth:1,
  },
  selectedAnswerText:{
    fontSize:18,
    color:'white',
    margin:5,
    padding:10,
    backgroundColor:'rgba(0,1,0,0.5)',
    borderRadius:30,
    borderWidth:1,
  }
  })

  