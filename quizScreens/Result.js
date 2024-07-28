import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Result = ({navigation,route}) => {
  const params = route.params
  console.log(params)
  return (
    <View style={styles.container}>

      <View><Text style={styles.title}>Result</Text></View>

      <View style={styles.bannerContainer}>
        <Image source={{uri:'https://img.freepik.com/free-vector/appointment-booking-illustrated-concept_23-2148579431.jpg?t=st=1722107039~exp=1722110639~hmac=da7db16ad81ba67e22664c91ce530b15cb730ba9928502d9d474b76398ff01e6&w=740'}}  style={styles.banner} resizeMode='contain'/>
      </View>

<View><TouchableOpacity onPress={()=>navigation.navigate('Home')} style={styles.button}><Text style={styles.buttonText}>Home</Text></TouchableOpacity></View>
    </View>
  )
}

export default Result

const styles = StyleSheet.create({
  container:{
    paddingHorizontal:10,
    height:'100%',
    justifyContent:'space-around',
    
    },
  banner: {
    width: 350,
    height: 350,
  },
  bannerContainer:{
    justifyContent:'center',
    alignItems:'center',
  },
  button:{
    marginBottom:10,
    backgroundColor:'#CC0651',
    padding:12,
    paddingHorizontal:30,
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center'
  },
  buttonText:{
    fontSize:18,
        color:'#fff',
        fontWeight:'600'
      },
      title:{
        fontSize: 30,
        fontWeight:'600',
        color:'#000',
    paddingHorizontal:110,
    paddingVertical:5,
    borderRadius:60,
    backgroundColor:'#d9d9d9'
      },
})