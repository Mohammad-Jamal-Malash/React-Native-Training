import { View, Text,SafeAreaView } from 'react-native'
import React from 'react'
import { PropsWithChildren } from 'react'


// Navigation
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

//Screens

import Home from './screens/Home'
import Detailes from './screens/Detailes'


// This is not must do it is just for type safty shit
export type RootStackParamList = {
  Home: undefined;
  Details: {productID: string}
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen 
            name='Home'
            component={Home}
            options={{
              title:'Trending Products'
            }}
          />
          <Stack.Screen 
            name= 'Details'
            component={Detailes}
            options={{
              title:'Products Details'
            }}
          />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

//! In this project we used three libs for the navigation process
//! This is the two libs, 'you can know there name from the docs links and the instalation process'

//1. npm install @react-navigation/native
//2. npm install react-native-screens react-native-safe-area-context
//! These two docs are => (https://reactnavigation.org/docs/getting-started)
//3. npm install @react-navigation/native-stack
//! This lib docs are => (https://reactnavigation.org/docs/native-stack-navigator)



//! Note: we also used the type safty, this is the doc => https://reactnavigation.org/docs/typescript/#type-checking-screens

export default App