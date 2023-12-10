import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'


import {RootStackParamList} from '../App'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

//this also belong to the type saftiy shit
type HomeProps = NativeStackScreenProps<RootStackParamList,'Home'>

const Home = ({navigation}:HomeProps) => {
  return (
    <View style = {styles.container}>
      <Text style = {styles.smallText}>Home Screen</Text>

      <Button title='Go Details' 
      // onPress={() =>{
      //   navigation.navigate("Details" ,{ productID:"86"})
      // }}

      // Another way using 'push'
      onPress={()=> navigation.push('Details',{productID:'86 '})}
      />

    </View>
  )
}

export default Home

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