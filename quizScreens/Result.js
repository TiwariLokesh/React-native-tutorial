import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Result = ({navigation,route}) => {
  const {score} = route.params
 
  const resultBanner = score>40 ? "https://img.freepik.com/free-vector/people-celebrating-goal-achievement_23-2148823078.jpg?t=st=1722174515~exp=1722178115~hmac=28dac0fdc09e5dd3b739e34cdec33aad85f56b10ced343133cca5475a200a377&w=1060" : "https://img.freepik.com/free-vector/hand-drawn-flat-design-overwhelmed-people-illustration_23-2149352794.jpg?t=st=1722175116~exp=1722178716~hmac=d6dd6469a2c51589757339c79a74844a5fc2ea606b49d922cb09aa5fb5ee3643&w=740"
  return (
    <View style={styles.container}>

      <View><Text style={styles.title}>RESULT</Text></View>
      <View><Text style={styles.scoreValue}>{score}</Text></View>

      <View style={styles.bannerContainer}>
        <Image source={{uri:resultBanner}}  style={styles.banner} resizeMode='contain'/>
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
    paddingBottom:50
    },
  banner: {
    width: 450,
    height: 450,
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
    backgroundColor:'#d9d9d9',
    alignSelf:'center'
      },
      scoreValue:{
        fontSize: 40,
        fontWeight:'800',
        color:'#CC0651',
        alignSelf:'center'
      }
})