import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style = {[styles.card, styles.cardElevated]}>
        <Image
        source={{uri:'https://wanderingcarol.com/wp-content/uploads/2023/08/gold-dome-in-jerusalem.jpg'}}
         style= {styles.ImageStyling} />
         
         <View style = {styles.CardBody}>
            <Text style = {[styles.CardTitle,{color:'black'}]}>The Doom of the Rock</Text>
            <Text style = {[styles.CardLable,{color:'black'}]}>The holy Land, jerusalem</Text>
             <Text style = {[styles.CardDecription,{color:'black'}]}>An Islamic shrine at the center of the Al-Aqsa mosque compound on the Temple Mount in the Old City of Jerusalem.</Text>
             <Text style = {[styles.CardFooter,{color:'#192A56'}]}>Three Hours away from Hebron</Text>
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
    ImageStyling:{
      height:300,
      borderTopLeftRadius:100,
      borderTopRightRadius:20,
      borderBottomLeftRadius:20,
      borderBottomRightRadius:100,
      margin:12,

      
    }, 
    card:{
      borderRadius:5,
      width:'95%',
      marginVertical:12,
      marginHorizontal:11,    
    },
    cardElevated:{
      backgroundColor:'white'
      
    },
    CardBody:{
     flex:1,
     flexGrow:1,
     paddingHorizontal:12,
     
    },
    CardTitle:{
      fontWeight:'bold',
      fontSize:22,
      marginBottom:4,
    },
    CardLable:{
      fontWeight:'bold',
      fontSize:16,
      marginBottom:6,
    },
    CardDecription:{
      fontWeight:'bold',
      fontSize:14,
      marginBottom:12,
      marginTop:6,
    },
    CardFooter:{
      fontWeight:'bold',
      fontSize:14,
    },  
})