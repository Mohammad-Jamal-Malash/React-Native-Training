import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCards() {
  return (
    <View>
      <Text style={styles.headingText}>Flat Cards</Text>
      <View style={styles.container}>
            <View style={[styles.card,styles.cardOne]}>
                <Text>Red</Text>
            </View>
            <View style={[styles.card,styles.cardTwo]}>
                <Text>Blue</Text>
            </View>
            <View style={[styles.card,styles.cardThree]}>
                <Text>Green</Text>
            </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        paddingHorizontal:8,
        fontSize:24,
        fontWeight:'bold',
        color:'white',
    },
    container:{
      flex:1,
      flexDirection:'row',
      padding:8,
    },
    card:{
      width:100,
      height:100,
      borderRadius:5,
      flex:1,
      alignItems:'center',
      justifyContent:'center',
      margin:8,

    },
    cardOne:{
      backgroundColor:'red',
    },
    cardTwo:{
      backgroundColor:'blue',
    },
    cardThree:{
      backgroundColor:'green',
    },


})