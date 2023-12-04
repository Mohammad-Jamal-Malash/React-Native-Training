import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

export default function App() {
  const [randomColor, setRandomColor] = useState("#FFFFFF");
  const [randomColor2, setRandomColor2] = useState("cyan");

  const Hex = '012345789ABCDEF'
  const generateColor = () =>{
    let color = "#";
    let color2 = "#";
    for (let index = 0; index < 6; index++) {
      color += Hex[Math.floor(Math.random() * 16) ];
      color2 += Hex[Math.floor(Math.random() * 16) ];
    }

    setRandomColor(color);
    setRandomColor2(color2);
  }

  return (
    <>
    <View style = {[styles.container, {backgroundColor:randomColor}]}>
      <TouchableOpacity style = {styles.actionBtn} 
      onPress={generateColor}>
        <Text style = {{color:'black', fontSize:24}}>
            Click Me
        </Text>
      </TouchableOpacity>

      <View style= {[styles.secondBox, {backgroundColor:randomColor2} ]}>
          <Text style = {{fontSize:15, color:'black',fontWeight:'bold'}}>
            Anothr Container
          </Text>
      </View>  
    </View>
    
    </>
  )
}

const styles = StyleSheet.create({
  container:{
      flex:1,
      alignItems:'center',
      justifyContent:'center'
  },
  actionBtn:{
    backgroundColor:"darkgray",
    paddingHorizontal:40,
    paddingVertical:10,
    borderRadius:10,
    position:"absolute"
  },
  secondBox:{
    width:150,
    height:150,
    borderRadius:10,
    marginEnd:'auto',
    marginTop:'auto',
    alignItems:'center',
    justifyContent:'center'
  }
})