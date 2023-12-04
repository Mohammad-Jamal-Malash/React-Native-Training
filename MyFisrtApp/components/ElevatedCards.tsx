import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
  return (
<View>
     <Text style={styles.headingText} >Elevated Cards</Text>
    <ScrollView horizontal = {true} showsHorizontalScrollIndicator ={false} style={styles.contianer}>
    <View style = {[styles.Card, styles.ElevatedCards]}>
        <Text>Scroll</Text>
        </View>
        <View style = {[styles.Card, styles.ElevatedCards]}>
            <Text>me</Text>
            </View>
        <View style = {[styles.Card, styles.ElevatedCards]}>
            <Text >for</Text>
            </View>
        <View style = {[styles.Card, styles.ElevatedCards]}>
            <Text>more ...</Text>
            </View>
        <View style = {[styles.Card, styles.ElevatedCards]}>
            <Text>😁</Text>
            </View>
    </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    contianer:{
        padding:8,
   
    },
    headingText:{
        paddingHorizontal:8,
        fontSize:24,
        fontWeight:'bold',
        color:'white',
        
    },
    Card:{
        width:100,
        height:100,
        borderRadius:5,
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        margin:8,
  
    },
    ElevatedCards:{
        backgroundColor:'#CAD5E2',
        elevation:4, // must set this prop in order to the shadow to work
        shadowOffset:{
            width:15,
            height:15,

        },
        shadowColor:'blue',
        
    },



})