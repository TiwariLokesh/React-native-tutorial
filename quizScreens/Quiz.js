import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Quiz = () => {
  return (
    <View>
      <View>
        <Text>Imagine this is a really cool question</Text>
      </View>
      <View>
      <TouchableOpacity><Text>Cool Option 1</Text></TouchableOpacity>
      <TouchableOpacity><Text>Cool Option 2</Text></TouchableOpacity>
      <TouchableOpacity><Text>Cool Option 3</Text></TouchableOpacity>
      <TouchableOpacity><Text>Cool Option 4</Text></TouchableOpacity>
      </View>
      <View></View>
    </View>
  )
}

export default Quiz

const styles = StyleSheet.create({})