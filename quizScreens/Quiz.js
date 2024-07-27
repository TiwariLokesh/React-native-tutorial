import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Quiz = () => {
  return (
    <View style={styles.container}>

      <View style={styles.top}>
        <Text>Imagine this is a really cool question</Text>
      </View>

      <View style={styles.option}>
      <TouchableOpacity><Text>Cool Option 1</Text></TouchableOpacity>
      <TouchableOpacity><Text>Cool Option 2</Text></TouchableOpacity>
      <TouchableOpacity><Text>Cool Option 3</Text></TouchableOpacity>
      <TouchableOpacity><Text>Cool Option 4</Text></TouchableOpacity>
      </View>

      <View style={styles.bottom}>
        <TouchableOpacity><Text>SKIP</Text></TouchableOpacity>
        <TouchableOpacity><Text>NEXT</Text></TouchableOpacity>
      </View>

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
  }
})