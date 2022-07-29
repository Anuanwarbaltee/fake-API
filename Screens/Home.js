import React, { useEffect, useState } from 'react'
import { Button, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import axios from 'axios'


const Home = ({navigation,route}) => {
    const [auth,setauth] = useState(false);
    const [details, setDetails] = useState([]);
    const [data , setData] = useState([]);
  

    const NavigateData = (e) => {

      setData(e);

      navigation.navigate('Product',{mydata:data});

    }

    useEffect(()=>{
      axios.get('https://fakestoreapi.com/products').then(res=>{
        setDetails(res.data)
        // console.log(res.data);
        // console.log(route.params)
    });
    if(!auth){
        navigation.navigate('LogIn')
    }
    },[])
  return (
    <>
   
   <ScrollView>
   {details.map((e, i)=>(

    <View key={i} style={styles.container}>
    
     <View style={styles.imagecontainer}>
      <Image  source={{uri:e.image}} style={{height:"97%",width:"98%",margin:3}}/>
     </View >
       <View style={{flexDirection:"row" , marginTop:20}}>
       
       <Text style={{fontSize:16,color:"red"}}>RS: {e.price}</Text>
       <TouchableOpacity onPress={() => NavigateData(e)}>
       <Text style={{fontSize:16,color:"green",marginLeft:"40%"}}>Details</Text>
      </TouchableOpacity>
       </View>
    </View>
   
       ))}
   </ScrollView>

    </>
  )
}
const styles =StyleSheet.create({
  container:{
    justifyContent:"center",
    alignItems:"center",
    height:300,
    width:"99%",
    borderColor:"gray",
    //  marginBottom:10,
     marginTop:5,
    shadowColor: "#000",
shadowOffset: {
	width: 5,
	height: 5,
},
shadowOpacity: 0.36,
shadowRadius: 6.68,

elevation: 11,
    
  },
  imagecontainer:{
    height:200,
    width:300,
    marginTop:15,
    borderBottomWidth:1,
    borderLeftWidth:1,
    borderRightWidth:1,
    borderEndWidth:1,
    borderTopWidth:1,
    borderBottomEndRadius:10,
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10,
    borderBottomStartRadius:10,
    borderTopLeftRadius:10,
    borderTopRightRadius:10,

  }
}) 
export default Home