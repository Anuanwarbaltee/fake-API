// import React from 'react'
// import { Text, View } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialIcons';

// const LogIn = () => {
//   return (
//     <View>
//         <Text><Icon name='edit' size={20} color='green'/>Api</Text>
//     </View>
//   )
// }

// export default LogIn

import {
    ImageBackground,
    StyleSheet,
    Text,
    View,
    TextInput,
    Linking,
    Button,
  } from 'react-native';
 
  
  import React, { useState } from 'react';
 
  const  LogIn = ({ navigation}) => {
    const[name, setName]= useState('');
    const [Password, setPassword] = useState('');

    const LogInUser = () =>{
        navigation.navigate('Home',{name:name})
    }
    return (
    
        <View style={{backgroundColor:"lightblue"}}> 
        <View style={styles.container}>
         
          
          <View style={styles.InputBox}>
            <TextInput
              style={styles.inputs}
              placeholder="User Name"
              onChangeText={(e) => setName(e)}
              placeholderTextColor="#ffff">
            
              </TextInput>
            <TextInput
              style={styles.inputs}
              placeholder="Password"
              onChangeText={(e) => setPassword(e)}
              placeholderTextColor="#fff"></TextInput>
          </View>
          <View style={styles.rememberBox}>
            <Text style={styles.forget} onPress={() => Linking.openURL('')}>
              Forget Password
            </Text>
          </View>
          <View style={styles.Button}>
            <Button
              title="LOG IN"
              onPress={LogInUser}
            />
          </View>
          <View style={styles.textBox}>
            <Text style={styles.Text}>Don't have an account ?</Text>
            <Text
              onPress={() => {
                Linking.openURL('');
              }}
              style={styles.Text1}>
              SignUp now
            </Text>
          </View>
          <Text style={styles.Text}>Or</Text>
          <Text style={styles.Text}>Login with</Text>
        </View>
      </View>
    );
  };
  
  export default  LogIn;
  const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '100%',
      backgroundColor: 'black',
      opacity: 0.7,
    },
    ImageBackground: {
      width: '100%',
      height: '100%',
      opacity: 0.9,
    },
    inputs: {
      // margin: 15,
      fontSize: 15,
      fontWeight: 'normal',
      borderBottomWidth: 1.5,
      borderBottomColor: '#ffff',
      color: '#ffff',
      margin: 10,
    },
    InputBox: {
      width: '80%',
      // height: '100%',
      justifyContent: 'center',
      // color: '#ffff',
  
      padding: 10,
      fontSize: 15,
    },
    rememberBox: {},
    forget: {
      color: '#ffff',
      marginLeft: 100,
      marginTop: 30,
    },
    Button: {
      margin: 20,
      width: 250,
      fontWeight: 'bold',
    },
    textBox: {
      alignItems: 'center',
      flexDirection: 'row',
      margin: 10,
    },
    Text: {
      color: '#fff',
      margin: 10,
    },
    Text1: {
      color: '#2cdb72',
  
      margin: 10,
    },
  });