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

export default App