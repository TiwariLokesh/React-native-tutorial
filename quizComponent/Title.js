import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Title = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quiz App</Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  title:{
    fontSize: 30,
    fontWeight:'600',
    color:'#000',
paddingHorizontal:110,
paddingVertical:5,
borderRadius:60,
backgroundColor:'#d9d9d9'
  },
  container:{
    paddingVertical:16,
    justifyContent:'center',
    alignItems:'center'
  }
});
