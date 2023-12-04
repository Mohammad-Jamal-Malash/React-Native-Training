import { ActivityIndicator, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, {useState, useEffect} from 'react'

import {setupPlayer,addTrack} from '../musicPlayerServices'
import MusicPlayer from './screens/MusicPlayer';

export default function App() {
    //This state is for rerendering the app at the first time 
    // and whanever the player is ready
  const [isPlayerReady, setIsPlayerReady] = useState(false);


  async function setup() {
    let isSetup = await setupPlayer();

    if (isSetup) {
      await addTrack();
    }
    setIsPlayerReady(isSetup);

  }

  useEffect(() => {
    setup();
    // this [] list is for dependeniys i dont know what it its but search for it 
    // when it comes for the need
  }, [])
  
  if (!isPlayerReady) {
    <SafeAreaView>

      {/*This acctivityIndicator is like a circle that keeps loading
      an example is the youtupe buffering   */ }
      <ActivityIndicator />
    </SafeAreaView>
  }



  return (
    <View style={styles.container}>
    <StatusBar barStyle={"light-content"} />
    <MusicPlayer />
  </View>
  )
}

//! In this project we used a third party lib for music tracking
// Called //! React Native Track Player
//This is how You can Download it => npm install --save react-native-track-player
//! This is the doc's for this lib => https://rntp.dev/docs/basics/installation 


//! annother lib for the slider called --> react-native-community/slider
// This is how You can Download it --> npm i @react-native-community/slider
//! //! This is the doc's for this lib => https://www.npmjs.com/package/@react-native-community/slider

const styles = StyleSheet.create({
  container:{
    flex: 1
  }
})