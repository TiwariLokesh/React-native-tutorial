import * as React from 'react';
import {View,Text} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'


//Screen
import ProductsScreen from './ProductsScreen';
import KycScreen from './KycScreen';
import AboutUsScreen from './AboutUsScreen';


//Screen names
const productsName = 'Products';
const kycName = 'Kyc';
const aboutName = 'AboutUs'


const Tab = createBottomTabNavigator();


const MainContainer = () => {
    return(
<NavigationContainer>
    <Tab.Navigator initialRouteName={productsName}
    screenOptions={({route}) => ({
        tabBarIcon: ({focused,color,size}) => {
            let iconName;
            let rn = route.name;

            if(rn === productsName){
                iconName = focused ? 'home' : 'home-outline';
            }else if (rn === kycName){
                iconName = focused ? 'list' : 'list-outline'
            }else if (rn === aboutName){
                iconName = focused ? 'settings' : 'settings-outline'
            }
            return <Ionicons name={iconName} size={size} color={color}/>
        },
    })}>

    <Tab.Screen name={productsName} component={ProductsScreen}/>

<Tab.Screen name ={kycName} component={KycScreen}/>
<Tab.Screen name={aboutName} component={AboutUsScreen}/>
    </Tab.Navigator>
</NavigationContainer>
    )
}

export default MainContainer;