import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import {RootStackParamList} from '../App'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

//This hook is used to show athor way in the props thing
import { useNavigation } from '@react-navigation/native'


//! In the 'Details' Screen we recive some data (props) so we need anothe hook which is:
import {NativeStackNavigationProp} from '@react-navigation/native-stack'


//this also belong to the type saftiy shit
type DetailsProps = NativeStackScreenProps<RootStackParamList,'Details'>

//! There is another way not this that we used in the details here,
//! but the same as the Home Screen, and we do not use the hook 'NativeStackNavigationProp'
//! we used 'navigation' in the home as a paremeter, here we will use 'route' 


const Detailes = ({route}:DetailsProps) => {
  
  
  // Here because we used route to extract the data that we get from the page 
  // the got us here which is 'Home', the home will give us data (productId),
  // we wanna show this data we can just type like this and get the data
  // that can be later used.
  const {productID} = route.params;



  //! Here i did not understand good but it is like onther way to navigate between bages,
  //! using the Hook 'useNavigation' 
  const navigation  = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

  return (
    <View style = {styles.container}>
      <Text style = {styles.smallText}>Detailes: {productID}</Text>
      <Button
      title='Go to Home'
      //! There is more than way to go back to home.
      // in this way we cant say we go back to home we just go to a page,
      // called home, it is a good way but reed the docs to see if it using the stack
      // and keep pushing to it.
      //! onPress={()=>navigation.navigate('Home')}
      //Another way is to use goBack it will garantay that we go back one screen,
      // in case that we have more than two screens maybe it will not go to home
      //! onPress={()=>navigation.goBack()}
      // The pop methed is also a way to go to the home screen,
      // but we must mention how much screen we wanna go back, so it takes a number as a parameter
      //! onPress={() => navigation.pop(1)}
      // The best methed if we have alot of screens and we want to go to the home screen,
      // directly we must use the popToTop method
      onPress={()=> navigation.popToTop()}
       />
       {/*I will copy the buttons to see each method in a button */}
       <Button
      title='Go to Home using navigate method'
      onPress={()=> navigation.navigate('Home')}
       />

      <Button
      title='Go to Home using pop method'
      onPress={()=> navigation.pop(1)}
       />
       <Button
      title='Go to Home using goBack method'
      onPress={()=> navigation.goBack()}
       />
    </View>
  )
}

export default Detailes

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    smallText:{
        color:'black',
    }
})