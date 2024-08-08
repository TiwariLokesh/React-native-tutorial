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

// import React from 'react';
// import {StyleSheet,View} from 'react-native';
// import QuizHome from '../quizScreens/QuizHome';
// import Quiz from '../quizScreens/Quiz'
// import Result from '../quizScreens/Result'
// import { NavigationContainer } from '@react-navigation/native';
// import MyStack from '../navigation';
// import {StripeProvider } from '@stripe/stripe-react-native';
// import PaymentScreen from '../components/PaymentScreen';


// function App() {
//   return (
//     // <View style={styles.container}>
//     // <NavigationContainer>
//     //   <MyStack />
//     // </NavigationContainer>
//     // </View>
//     <StripeProvider publishableKey="pk_test_51PgO3MCsFbF0FBd0w0E3jyrIEcZTELgcvJrFk8pjKb3irPqS2YCYLdYi3ytefvsJZBgJ2hmIXRXckDw5XkXNIEKj00p4lnvsYY">
//     <PaymentScreen/>
//   </StripeProvider>

//   );
// }

// export default App;

// // const styles = StyleSheet.create({
// //   container: {
// //     paddingTop: 10,
// //     paddingHorizontal: 10,
// //     flex: 1,
// //   },
// // });





import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
const App = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(null);
  // Auth state listener
  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(authUser => {
      setUser(authUser);
    });
    // Clean up
    return () => unsubscribe();
  }, []);

  // Fetch users from Firestore
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const snapshot = await firestore().collection('user').get();
        const usersList = snapshot.docs.map(doc => doc.data());
        // Fetching all records from USER
        setUsers(usersList);
      } catch (error) {
        console.error('Failed to fetch users:', error);
      }
    };
    fetchUsers();
  }, []);

  // Sign in anonymously
  const signInAnonymously = async () => {
    try {
      await auth().signInAnonymously();
    } catch (error) {
      console.error('Failed to sign in anonymously:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Firebase Integration Example</Text>
      
      {/* Display fetched users */}
      <Text style={styles.subHeader}>Users:</Text>
      {users.length > 0 ? (
        users.map((user, index) => (
          <Text key={index} style={styles.user}>{user.nm} {user.age}</Text>
        ))
      ) : (
        <Text style={styles.user}>No users found</Text>
      )}

      {/* Authentication */}
      <View style={styles.authContainer}>
        {user ? (
          <Text style={styles.userInfo}>Signed in anonymously</Text>
        ) : (
          <Button title="Sign In Anonymously" onPress={signInAnonymously} />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  user: {
    fontSize: 16,
    marginBottom: 5,
  },
  authContainer: {
    marginTop: 20,
  },
  userInfo: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default App;