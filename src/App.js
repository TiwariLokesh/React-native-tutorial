// import { View, Text, SafeAreaView, ScrollView } from 'react-native'
// import React from 'react'

// //Navigation
// import { NavigationContainer } from '@react-navigation/native'
// import { createNativeStackNavigator } from '@react-navigation/native-stack'

// //screens
// import Home from './screens/Home'
// import Details from './screens/Details'

// export type RootStackParamList = {
//   Home: undefined;
//   Details: {productId: string}
// };
// // import FlatCards from '../components/FlatCards'
// // import ElevatedCards from '../components/ElevatedCards'
// // import FancyCard from '../components/FancyCard'

// const Stack = createNativeStackNavigator<RootStackParamList>()

// const App = () => {
//   return (
//     // <SafeAreaView>
//     // <ScrollView>
//     // <FlatCards/>
//     // <ElevatedCards/>
//     // <FancyCard/>
//     // </ScrollView>

//     // </SafeAreaView>

//     <NavigationContainer>
//       <Stack.Navigator initialRouteName='Home'>
// <Stack.Screen
//   name='Home'
//   component={Home}
//   options={{
//     title:"Trending Products"
//   }}
// />

// <Stack.Screen
//   name='Details'
//   component={Details}
//   options={{
//     title:"Product Details"
//   }}
// />
//       </Stack.Navigator>
//     </NavigationContainer>
//   )
// }

// export default App

//Drawer

// import * as React from 'react';
// import { Button, View } from 'react-native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { NavigationContainer } from '@react-navigation/native';
// import Home from './screens/Home';
// import Details from './screens/Details';
// import Ionicons from 'react-native-vector-icons/Ionicons';

// function HomeScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button
//         onPress={() => navigation.navigate('Notifications')}
//         title="Go to notifications"
//       />
//     </View>
//   );
// }

// function NotificationsScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button onPress={() => navigation.goBack()} title="Go back home" />
//     </View>
//   );
// }

// const Drawer = createDrawerNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator initialRouteName="Home">
//         <Drawer.Screen name="Home" component={Home} />
//         <Drawer.Screen name="Notifications" component={Details} />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// }

//for maps

// import MainContainer from './screens/MainContainer'
// import Home from '../components/Home';
// import Design from '../components/Design'

//webview
// import { StyleSheet, Text, View,SafeAreaView } from 'react-native'
// import {WebView} from 'react-native-webview';
// import React from 'react'
// // import BottomNav from './screens/BottomNav'

// const App = () => {
//   return (

//   <SafeAreaView style={styles.container}>
//     <WebView style={{marginTop:20}} source={{uri:"https://www.wikipedia.org"}}/>
//   </SafeAreaView>

//   )
// }

// const styles = StyleSheet.create({
// container:{
//   flex:1,
//   backgroundColor:'#F5FCFF'
// }
// })

// export default App

import React from 'react';
import {StyleSheet,View} from 'react-native';
import QuizHome from '../quizScreens/QuizHome';
import Quiz from '../quizScreens/Quiz'
import Result from '../quizScreens/Result'
import { NavigationContainer } from '@react-navigation/native';
import MyStack from '../navigation';
import Payment from '../components/Payment';
function App() {
  return (
    // <View style={styles.container}>
    // <NavigationContainer>
    //   <MyStack />
    // </NavigationContainer>
    // </View>
    <Payment/>
  );
}

export default App;

// const styles = StyleSheet.create({
//   container: {
//     paddingTop: 10,
//     paddingHorizontal: 10,
//     flex: 1,
//   },
// });
