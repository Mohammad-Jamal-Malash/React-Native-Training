import { Image, ImageSourcePropType, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import {PropsWithChildren} from 'react'
import ReactNativeHapticFeedback from "react-native-haptic-feedback";


// if you tryed to import an image like this it will give an error,
//the reason is like react-native was not knowing that you can import
// an image like this way, soo we let it know that there is this way
//and this was done by working on index.d.ts (//!Note:"The file naming is very important")
// wich is a module declaration that says pring all the images (//!the * says this)
// that is with extention (png).
// !Note: WE LITERALLY PUT AN IMAGE IN A VARIABLE NOT THE IMAGE URL
// if you have more moduls you can declare them in the same file.

import DiceOne from '../assets/One.png'
import DiceTwo from '../assets/Two.png'
import DiceThree from '../assets/Three.png'
import DiceFour from '../assets/Four.png'
import DiceFive from '../assets/Five.png'
import DiceSix from '../assets/Six.png'

const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};
// This prop here is to make the programe less error,
// we can pass to the compmonent a string that contains the image url,
// but this approach like i say what ever i pass it is an image.
type  DiceProps = PropsWithChildren <{
  ImageUrl :ImageSourcePropType
}>

// the JSX.Element is not must to write but is a good practice,
// and will make the code documntaion lot easier.

const Dice =({ImageUrl}:DiceProps):JSX.Element =>{
  return (<View>
    <Image style = {styles.diceImage} source={ImageUrl}/>


  </View>)

}

export default function App():JSX.Element{
  //! <ImageSourcePropType> this will let the useState just to accetpt a variable from
  // ! type image
  const [diceImage , setDiceImage] = useState <ImageSourcePropType>(DiceOne);

  const rollTheDice = ()=>{
    let Dice = Math.floor(Math.random() * 6) + 1;
    switch (Dice) {
      case 1:
        setDiceImage(DiceOne);
        break;
        case 2:
        setDiceImage(DiceOne);
        break;
        case 3:
        setDiceImage(DiceTwo);
        break;
        case 4:
        setDiceImage(DiceThree);
        break;
        case 5:
        setDiceImage(DiceFive);
        break;
        case 6:
        setDiceImage(DiceSix);
        break;
      default:
        setDiceImage(DiceOne);
        break;
    }
    // this lib is like user feedback when the user press the button the phon will react
    // you can see this on Viduo 31 from the react series 
    ReactNativeHapticFeedback.trigger("clockTick", options);
  }
  return (
    <View style = {styles.container}>
      <Dice ImageUrl={diceImage}/>
        <Pressable style = {styles.diceContainer} onPress={rollTheDice}>
          <Text style = {styles.rollDiceBtnText}>
            Roll The Dice
          </Text>
        </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF2F2',
  },
  diceContainer: {
    margin: 12,
  },
  diceImage: {
    width: 200,
    height: 200,
  },
  rollDiceBtnText: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#E5E0FF',
    fontSize: 16,
    color: '#8EA7E9',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
});