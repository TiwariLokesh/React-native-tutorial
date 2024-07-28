import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Result = ({navigation}) => {
  return (
    <View style={styles.container}>

      

      <View style={styles.bannerContainer}>
        <Image source={{uri:'https://img.freepik.com/free-vector/appointment-booking-illustrated-concept_23-2148579431.jpg?t=st=1722107039~exp=1722110639~hmac=da7db16ad81ba67e22664c91ce530b15cb730ba9928502d9d474b76398ff01e6&w=740'}}  style={styles.banner} resizeMode='contain'/>
      </View>

<View><TouchableOpacity onPress={()=>navigation.navigate('Home')}><Text>Home</Text></TouchableOpacity></View>
    </View>
  )
}

export default Result

const styles = StyleSheet.create({
  container:{
    paddingHorizontal:10,
    height:'100%'
    },
  banner: {
    width: 300,
    height: 300,
  },
  bannerContainer:{
    justifyContent:'center',
    alignItems:'center',
  }
})