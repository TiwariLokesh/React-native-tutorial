import React , { useEffect, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'


const Quiz = ({navigation}) => {
  const [questions,setQuestions] = useState();
  const [ques, setQues] = useState(0);
  const getQuiz = async () => {
   const url = 'https://opentdb.com/api.php?amount=10&category=9&type=multiple&encode=url3986';
   const res = await fetch(url); 
   const data = await res.json();
   setQuestions(data.results);
  };

  useEffect(()=> {
    getQuiz();
  },[]);

  const handleNextPress = () => {
    setQues(ques+1)
  }

  return (
    <View style={styles.container}>
{ questions && (
  <View style={styles.parent}>
      <View style={styles.top}>
        <Text style={styles.question}>Q. {decodeURIComponent( questions[ques].question)}</Text>
      </View>

      <View style={styles.option}>
      <TouchableOpacity style={styles.optionButton}><Text style={styles.optionText}>Cool Option 1</Text></TouchableOpacity>
      <TouchableOpacity style={styles.optionButton}><Text style={styles.optionText}>Cool Option 2</Text></TouchableOpacity>
      <TouchableOpacity style={styles.optionButton}><Text style={styles.optionText}>Cool Option 3</Text></TouchableOpacity>
      <TouchableOpacity style={styles.optionButton}><Text style={styles.optionText}>Cool Option 4</Text></TouchableOpacity>
      </View>

      <View style={styles.bottom}>
        <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>SKIP</Text></TouchableOpacity>
        {ques!==9 &&
        <TouchableOpacity onPress={handleNextPress} style={styles.button}><Text style={styles.buttonText}>NEXT</Text></TouchableOpacity>
        }

        {ques ===9 &&
        <TouchableOpacity onPress={()=> null} style={styles.button}><Text style={styles.buttonText}>SHOW RESULTS</Text></TouchableOpacity>
        }
      </View>
      </View>
    )}
    </View>
  )
}

export default Quiz

const styles = StyleSheet.create({
  container:{
    padding:12,
    height:'100%'
  },
  top:{
    marginVertical:16,
  },
  option:{
marginVertical:16,
flex:1,
  },
  bottom:{
    marginBottom:16,
    paddingVertical:16,
    justifyContent:'space-between',
    flexDirection:'row'
  },
  button:{
    marginBottom:10,
    backgroundColor:'#CC0651',
    padding:12,
    paddingHorizontal:30,
    borderRadius:10,
  },
  buttonText:{
fontSize:18,
    color:'#fff',
    fontWeight:'600'
  },
  question:{
fontSize:28,
color:'#1c1c1c'
  },
optionText:{
fontSize:18,
fontWeight:'500',
color:'#fff'

},
optionButton:{
paddingVertical:14,
marginVertical:8,
backgroundColor:'#ef476f',
paddingHorizontal:12,
borderRadius:12
},
parent:{
  height:'100%'
}
})