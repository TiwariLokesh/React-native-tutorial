import React from 'react'
import { StyleSheet, Text, View,useColorScheme } from 'react-native'

export default function App() {
  const isDarkMode = useColorScheme() === 'dark'
  return (
  <View style={styles.container}>
   <Text style={isDarkMode ? styles.whiteText : styles.darkText }>Hello World</Text>
  </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center'
  },
  whiteText:{
    color:'#fff'
  },
  darkText:{
    color:'#000'
  }
})