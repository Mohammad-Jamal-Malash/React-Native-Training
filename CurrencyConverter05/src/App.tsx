import { FlatList, Pressable, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { Component, useState } from 'react'

// constants
import { currencyByRupee } from './constants'

// Component
import CurrencyButton from '../components/CurrencyButton'

import Snackbar from 'react-native-snackbar'

export default function App() {
const [inputValue, setInputValue] = useState('')
  const [resultValue, setResultValue] = useState('')
  const [targetCurrency, setTargetCurrency] = useState('')


    //! this currency type came from the interface that we declared before
    // ! it is like an object.
    const buttonPressed= (targetValue:Currency)=>{
        if(!inputValue)
        {
          return Snackbar.show({
            text:"Enter Value to Convert",
            backgroundColor:"#EA7773",
            textColor:"#000000"
          })
        }
        const inputAmount = parseFloat(inputValue);
        
        //! isNaN : is short stand for => is Not a Number

        if(!isNaN(inputAmount)){
          const convertedValue = inputAmount * targetValue.value;
          const result  =  `${targetValue.symbol} ${convertedValue.toFixed(2)} 🤑 `
        setResultValue(result);
        setTargetCurrency(targetValue.name);
        }
        else 
          {
            return Snackbar.show({
              text:"Not Valid number to convert",
              backgroundColor:"#EA7773",
              textColor:"#000000"
            })
          }
    } 

  return (
    <>
      <View style ={styles.container}>
        <View style = {styles.topContainer}>
          <View style = {styles.rupeesContainer}>
          <Text style = {styles.rupee}>$</Text>
          <TextInput 
          maxLength={14}
          placeholder='Enter some value'
          value={inputValue}
          clearButtonMode='always'
          onChangeText={setInputValue}
          keyboardType='number-pad'/>
        </View>
        {
          resultValue ? (
          <Text style = {styles.resultTxt}>
          {resultValue}
          </Text>):null
        }
          </View>
          <View>
            <FlatList
            numColumns={3}
            data={currencyByRupee}
            //! CBR is just a variablename to see if i can choose another name other
            //! than the name "item"
            keyExtractor={CBR => CBR.name}
            renderItem={({item}) =>(
              // or Pressable both will work as the same
              <TouchableOpacity
              style = {[
                styles.button,
                // This targeyCurrency is a state defiend up that work for the condtional
                // rendering when we change the pressed currency we change the state
                targetCurrency === item.name && styles.selected
              ]}
              onPress={()=>buttonPressed(item)}
              >
                {
                  //!the three dots is like i take every variable of the 
                  //! currencyByRupee array and passed it to the CurrencyButton component
                }
                <CurrencyButton  {...item}/>
              </TouchableOpacity>
            )}
             />
          </View>

          </View>
           </>)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#515151',
  },
  topContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  resultTxt: {
    fontSize: 32,
    color: '#000000',
    fontWeight: '800',
  },
  rupee: {
    marginRight: 8,

    fontSize: 22,
    color: '#000000',
    fontWeight: '800',
  },
  rupeesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputAmountField: {
    height: 40,
    width: 200,
    padding: 8,
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: '#FFFFFF',
  },
  bottomContainer: {
    flex: 3,
  },
  button: {
    flex: 1,

    margin: 12,
    height: 60,

    borderRadius: 12,
    backgroundColor: '#fff',
    elevation: 2,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  selected: {
    backgroundColor: '#ffeaa7',
  },
});



// ? What is Snack Bar?
// Snack Bar is like a notifacation can pop-up for
// the user based on a condtion or an event.
//! Can be installed using 'npm i react-native-snackbar'
//! This is the Link for the documntaion. => (https://www.npmjs.com/package/react-native-snackbar) 