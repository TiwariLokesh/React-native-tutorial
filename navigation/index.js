import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import QuizHome from '../quizScreens/QuizHome';
import Quiz from '../quizScreens/Quiz';
import Result from '../quizScreens/Result';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={QuizHome} options={{headerShown:false}}/>
      <Stack.Screen name="Quiz" component={Quiz} options={{headerShown:false}}/>
      <Stack.Screen name="Result" component={Result} options={{headerShown:false}}/>
     
    </Stack.Navigator>
  );
}

export default MyStack;