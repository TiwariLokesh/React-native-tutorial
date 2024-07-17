// import { StyleSheet, Text, View,Button } from 'react-native'
// import React from 'react'

// //navigation
// import { NativeStackScreenProps } from '@react-navigation/native-stack'
// import { RootStackParamList } from '../App'

// type HomeProps = NativeStackScreenProps<RootStackParamList,'Home'>


// const Home = ({navigation}: HomeProps) => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.smallText}>Home Screen</Text>
//       <Button 
//        title='Go to details'
//       //  onPress={()=> navigation.navigate("Details",{
//       //   productId: "86"
//       // })}
//       onPress={()=> navigation.push('Details',{
//         productId: "86"
//       })}
//       />
//     </View>
//   )
// }

// export default Home

// const styles = StyleSheet.create({
//     container:{
//         flex:1,
//         alignItems:'center',
//         justifyContent:'center'
//     },
//     smallText:{
//         color:"#000000"
//     }
// })



 // Home.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
  },
});

export default Home;
