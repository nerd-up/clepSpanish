
import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    homePageContainer:{
      flex: 1,
      backgroundColor: 'green',
      padding:10,
      alignItems: 'center',
      alignContent: 'center',
      fontFamily:'Irish Grover'
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
      margin:2,
      padding:5,
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
    marginTop:2,
    padding:5,
  }
  })

  