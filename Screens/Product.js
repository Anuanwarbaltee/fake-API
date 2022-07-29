import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const Product = ({navigation, route}) => {
  console.log(route.params.mydata);

  return (
    <>
      <View style={{flex: 1}}>
        <View style={styles.container}>
          <View style={styles.Title}>
            <Text style={{fontSize: 20, marginBottom: 5}}>PRODUCT Name</Text>
            <Text style={{color: 'black'}}>{route.params.mydata.title}</Text>
          </View>
          <View style={{height:"40%", width: 300, marginLeft: 20}}>
            <Image
              source={{uri: route.params.mydata.image}}
              style={{height: '97%', width: '98%', margin: 3}}
            />
          </View>
          <View style={{flexDirection: 'row',height:"10%",marginTop:15,}}>
            <Text style={{color: 'red', marginLeft: '10%'}}>
              Rs {route.params.mydata.price}
            </Text>
            <Text style={{color: 'green',fontSize:18, marginLeft: '20%'}}>
              {route.params.mydata.category}
            </Text>
          </View>
          <View style={{textAlign: 'center' ,height:"20%",marginLeft:"5%"}}>
         <Text> {route.params.mydata.description}</Text>
          </View>
        </View>
      </View>
      
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightgray',
    height: 650,
  },
  Title: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    width: '100%',
    height:"20%",
    borderColor: 'gray',
    //  marginBottom:10,
    marginTop: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
  },
});
export default Product;
