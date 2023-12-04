import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    SafeAreaView,
    Touchable,
    TouchableOpacity,
    TextInput

} from 'react-native'
import React, {useState} from 'react'

import * as Yup from 'yup';
import { Formik } from 'formik';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

const Validator  = Yup.object().shape({
  password: Yup.number()
  .min(8,"The minmum number of charecters is 8")
  .max(16,"The maximum number of charecters is 16")
  .required("This feild is required")
});



export default function () {
  const [password, setPassword] = useState('');
  const [isPassGenerated, setIsPassGenerated] = useState(false);

  const [lowerCase, setLowerCase] = useState(true);
  const [upperCase, setUpperCase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);

  const generatePasswordString = (passwordLength:number) =>{
     let charcterList = '';

     const upperCaseChars= 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
     const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz'
     const digitChars = '123456789'
     const specialChars = '!@#$%^&*()_+'
     if(upperCase){charcterList += upperCaseChars;}
     if(lowerCase){charcterList += lowerCaseChars;}
     if(numbers){charcterList += digitChars;}
     if(symbols){charcterList += specialChars;}

     const passwordResult = createPassword(charcterList, passwordLength);
     setPassword(passwordResult);
     setIsPassGenerated(true);
  }

  const createPassword = (charecters:string, passwordLength:number) =>{
    let result= '';
    for (let i = 0; i < passwordLength; i++) {
      const charecterIndex = Math.round(Math.random() * charecters.length);
       // In order to garntee that my indexes at the range that the charcters array 
      // as example the random method generate decimal numbers from 0 to 1
      // when i multibly the random number with the length of the array of charecters
      // as example, if the function recived the array of lower case letters
      // the lenght is 26 so i will get an index between 0 and 25 
      // the only problem here is that maybe an index will come more than one
      
      //the charecters is an array of letters or numbers or even symbols,
      // this charecters comes to this function based in a condition if the password,
      //does not contain one from this array this function will pic random locations
      // from this charecters array and add it to the password that will be generated 
      result+=charecters.charAt(charecterIndex)
    }
    return result;

}

const resetPassword = () =>{
  setPassword('');
  setIsPassGenerated(false);
  setLowerCase(true);
  setNumbers(false);
  setSymbols(false)
  setUpperCase(false);
}

  


  return (
    <ScrollView keyboardShouldPersistTaps='handled'>
      <SafeAreaView style = {styles.appContainer}>
        <View style = {styles.formContainer}>
          <Text style ={styles.title}> Password Generator</Text>
            <Formik
       initialValues={{password : ''}}
       validationSchema={Validator}
      onSubmit={ values => {
        console.log(values);
        generatePasswordString(+values.password);
      }}  
     >
       {({ // These are set of propertes we put them in a {} to make them object
       // for the arrow function
         values,
         errors,
         touched,
         isValid,
         handleChange,
         handleSubmit,
         handleReset,
         /* and other goodies */
       }) => (
        <>
        <View style = {styles.inputWrapper}>
          <View style = {styles.inputColumn}> 
            <Text style = {styles.heading}>Password Length</Text>
            {touched.password  && errors.password && (
              <Text style ={styles.errorText}>
                { errors.password}
              </Text>
            )}
          </View>

              <TextInput  
            style = {styles.inputStyle}
            value={values.password}
            onChangeText={handleChange('password')}
            placeholder='Ex. 8' 
            keyboardType='numeric'/>
            

        </View>
        <View style = {styles.inputWrapper}>
          <Text style = {styles.heading}> Include Lower Case</Text>
          <BouncyCheckbox
          disableBuiltInState
          isChecked= {lowerCase}
          onPress={() => setLowerCase(!lowerCase)}
          fillColor='#29AB87'/>
        </View>
        <View style = {styles.inputWrapper}>
          <Text style = {styles.heading}> Include Upper Case</Text>
          <BouncyCheckbox
          disableBuiltInState
          isChecked= {upperCase}
          onPress={() => setUpperCase(!upperCase)}
          fillColor='#FED85D'/>
        </View>
        <View style = {styles.inputWrapper}>
          <Text style = {styles.heading}> Include Numbers</Text>
          <BouncyCheckbox
          disableBuiltInState
          isChecked= {numbers}
          onPress={() => setNumbers(!numbers)}
          fillColor='#C9A0DC'/>
        </View>
        <View style = {styles.inputWrapper}>
          <Text style = {styles.heading}> Include Sympols</Text>
          <BouncyCheckbox
          disableBuiltInState
          isChecked= {symbols}
          onPress={() => setSymbols(!symbols)}
          fillColor='#FC80A5'/>
        </View>
        
        <View style = {styles.formActions}>
        <TouchableOpacity
        disabled = {!isValid}
        style ={styles.primaryBtn}
        onPress={() =>{
          handleSubmit();
        }}
        >

          <Text style ={styles.primaryBtnTxt}>
            Generete Password
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={styles.secondaryBtn}
        onPress={()=>{
          handleReset();
          resetPassword();
        }}>
          <Text style={styles.secondaryBtnTxt}>
            Reset
          </Text>
        </TouchableOpacity>
        </View>
        </>
       )}
     </Formik>
        </View>
        {isPassGenerated ? (
          <View style = {[styles.card, styles.cardElevated]}>
            <Text style = {styles.subTitle}>Result: </Text>
            <Text style = {styles.description}>Long Press to Copy </Text>
            <Text selectable= {true} style= {styles.generatedPassword}>{password}</Text>
          </View>
        ) : null}
        
      </SafeAreaView>
    </ScrollView>
  )
}

/*
In this project we used some third party lib
1- yup =>  npm i yup,
    🎈 this lib is used for the validation process.
           this is the DOCs Link(https://www.npmjs.com/package/yup)

2- formik => npm install formik --save
    🎈 this lib used to biuld forms, and can validate the input
     but most pepole just use yup 
     this is the DOCs Link(https://formik.org/docs/overview)

3- react-native-bouncy-checkbox => npm i react-native-bouncy-checkbox
      🎈 this lib is for checboxes
      this is the DOCs Link(https://www.npmjs.com/package/react-native-bouncy-checkbox?activeTab=readme)

*/

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  formContainer: {
    margin: 8,
    padding: 8,
  },
  title: {
    fontSize: 32,
    fontWeight: '600',
    marginBottom: 15,
  },
  subTitle: {
    fontSize: 26,
    fontWeight: '600',
    marginBottom: 2,
  },
  description: {
    color: '#758283',
    marginBottom: 8,
  },
  heading: {
    fontSize: 15,
  },
  inputWrapper: {
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  inputColumn: {
    flexDirection: 'column',
  },
  inputStyle: {
    padding: 8,
    width: '30%',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#16213e',
  },
  errorText: {
    fontSize: 12,
    color: '#ff0d10',
  },
  formActions: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  primaryBtn: {
    width: 120,
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 8,
    backgroundColor: '#5DA3FA',
  },
  primaryBtnTxt: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700',
  },
  secondaryBtn: {
    width: 120,
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 8,
    backgroundColor: '#CAD5E2',
  },
  secondaryBtnTxt: {
    textAlign: 'center',
  },
  card: {
    padding: 12,
    borderRadius: 6,
    marginHorizontal: 12,
  },
  cardElevated: {
    backgroundColor: '#ffffff',
    elevation: 1,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  generatedPassword: {
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 12,
    color:'#000'
  },
});

