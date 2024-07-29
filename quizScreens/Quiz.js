import React , { useEffect, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const  shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
}



const Quiz = ({navigation}) => {
  const [questions,setQuestions] = useState();
  const [ques, setQues] = useState(0);
  const [options, setOptions] = useState([]);
const [score,setScore] = useState(0);
const [isLoading,setIsLoading] = useState(false);


  const getQuiz = async () => {
    setIsLoading(true)
   const url = 'https://opentdb.com/api.php?amount=10&category=9&type=multiple&encode=url3986';
   const res = await fetch(url); 
   const data = await res.json();
   setQuestions(data.results);
   setOptions(generateOptionsAndShuffle(data.results[0]))
   setIsLoading(false)
  };

  useEffect(()=> {
    getQuiz();
  },[]);

  const handleNextPress = () => {
    setQues(ques+1)
   setOptions(generateOptionsAndShuffle(questions[ques+1]))
  }

  const generateOptionsAndShuffle = (_question) => {
  const options = [..._question.incorrect_answers]
  options.push(_question.correct_answer)
shuffleArray(options);
return options
  }

  const handleSelectedOption = (_option) => {
    if(_option == questions[ques].correct_answer){
      setScore(score+10)
    }
    if(ques!==9){
      setQues(ques+1)
      setOptions(generateOptionsAndShuffle(questions[ques+1]))
    }
    if(ques == 9){
      handleShowResult()
    }
  }

  const handleShowResult = () => {
    navigation.navigate("Result",{
      score: score
    })
  }

  return (
    <View style={styles.container}>
{isLoading ? <View style={{display:'flex',justifyContent:'center',alignItems:'center',height:'100%'}}><Text style={{fontSize:32,fontWeight:'700'}}>LOADING...</Text></View> : questions && (
  <View style={styles.parent}>
      <View style={styles.top}>
        <Text style={styles.question}>Q. {decodeURIComponent( questions[ques].question)}</Text>
      </View>

      <View style={styles.option}>
      <TouchableOpacity style={styles.optionButton} onPress={()=>handleSelectedOption(options[0])}><Text style={styles.optionText}> {decodeURIComponent( options[0])}</Text></TouchableOpacity>
      <TouchableOpacity style={styles.optionButton} onPress={()=>handleSelectedOption(options[1])}><Text style={styles.optionText}>{decodeURIComponent( options[1])}</Text></TouchableOpacity>
      <TouchableOpacity style={styles.optionButton} onPress={()=>handleSelectedOption(options[2])}><Text style={styles.optionText}>{decodeURIComponent( options[2])}</Text></TouchableOpacity>
      <TouchableOpacity style={styles.optionButton} onPress={()=>handleSelectedOption(options[3])}><Text style={styles.optionText}> {decodeURIComponent( options[3])}</Text></TouchableOpacity>
      </View>

      <View style={styles.bottom}>
        <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>PREV</Text></TouchableOpacity>
        {ques!==9 &&
        <TouchableOpacity onPress={handleNextPress} style={styles.button}><Text style={styles.buttonText}>SKIP</Text></TouchableOpacity>
        }

        {ques ===9 &&
        <TouchableOpacity onPress={()=> handleShowResult()} style={styles.button}><Text style={styles.buttonText}>SHOW RESULTS</Text></TouchableOpacity>
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