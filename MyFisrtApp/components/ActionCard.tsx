import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function ActionCard() {
    function openWebSite(webSiteURL:string){
        Linking.openURL(webSiteURL);
    }
  return (
    <View>
      <Text style = {styles.headingText}>Blog Card</Text>
        <View style = {[styles.card, styles.ElevatedCard ]}>
            <View  style = {styles.HeaderContainer}> 
                <Text style = {styles.HeaderText}>
                    What's new in Javascript 21 - ES12
                </Text>
            </View>
            <Image 
            source={
                {uri:'https://images.pexels.com/photos/1261427/pexels-photo-1261427.jpeg?auto=compress&cs=tinysrgb&w=1600'}}
               style ={styles.ImageStyling} />
               <View style ={styles.BodyContiner}>
                    <Text numberOfLines={3} style = {{color:'#D7D7D9' , fontSize:15,
                margin:5}}>
                        Just Like Every Year, Javascript brings
                        in new featuers. This year Javascript is bringing
                        4 new featuers, which are almost in production 
                        rollout. I won't wasting much more time and directly
                        jump to code with easy understanding examples.
                    </Text>
               </View>
               <View style ={styles.FooterContiner}>
               <TouchableOpacity onPress={() => openWebSite('https://instagram.com/mohammad_jamal_mj?igshid=MzMyNGUyNmU2YQ%3D%3D&utm_source=qr')}>
                        <Text style = {styles.socialLinks}>Follow Me</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => openWebSite('https://www.pexels.com/search/nodejs/')}>
                        <Text style = {styles.socialLinks}>Read More</Text>
                    </TouchableOpacity>
                    
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
    card:{
        borderRadius:5,
        width:'95%',
        marginVertical:12,
        marginHorizontal:11, 
    },
    ElevatedCard:{
        backgroundColor:'#385956'
    },
    HeaderContainer:{
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        height:40,      
    },
    HeaderText:{
        color:'#D7D7D9',
        fontSize:18, 
        paddingTop:8,
        fontWeight:'500'

    },
    ImageStyling:{
        height:300,
        borderTopLeftRadius:100,
        borderTopRightRadius:20,
        borderBottomLeftRadius:20,
        borderBottomRightRadius:100,
        margin:12,
  
    },
    BodyContiner:{
        flex:1,
        flexGrow:1,
        paddingHorizontal:8,
        
        
    },
    FooterContiner:{
        flex:1,
        flexDirection:'row-reverse',
        
    },
    socialLinks:{
        margin:20,
        padding:10,
        fontSize:18,
        backgroundColor:'#BF7B3F',
        borderRadius:5,
        fontWeight:'bold',
        color:'white',
    },
})