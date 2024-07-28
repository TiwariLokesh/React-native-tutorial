import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Title from '../quizComponent/Title';

const QuizHome = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Title />
      <View style={styles.bannerContainer}>
        <Image source={{uri:'https://img.freepik.com/free-vector/appointment-booking-illustrated-concept_23-2148579431.jpg?t=st=1722107039~exp=1722110639~hmac=da7db16ad81ba67e22664c91ce530b15cb730ba9928502d9d474b76398ff01e6&w=740'}}  style={styles.banner} resizeMode='contain' />

      </View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Quiz")}><Text style={styles.text}>Start</Text></TouchableOpacity>
    </View>
  );
};

export default QuizHome;

const styles = StyleSheet.create({
  banner: {
    width: 350,
    height: 350,
    
  },
  bannerContainer:{
    justifyContent:'center',
    alignItems:'center',
  },
  container:{
  paddingHorizontal:10,
  flex:1,
  flexDirection:'column',
  },
  button:{
    marginTop:40,
    justifyContent:'flex-end',
    alignItems:'flex-end',
    width:'100%',
    backgroundColor:'#CC0651',
    padding:10,
    borderRadius:60,
    justifyContent:'center',
    alignItems:'center',
  },
  text:{
    fontSize:25,
    color:'#fff',
    fontWeight:'600'
  }
});
