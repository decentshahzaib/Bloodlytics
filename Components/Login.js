import React,{ useState} from "react";
import { StyleSheet, Text, View ,Button,TextInput,Image,Alert,Picker,TouchableOpacity,ImageBackground} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons,AntDesign,FontAwesome  } from '@expo/vector-icons';


function Login({ navigation }) {

  return ( 
    <>    
   
     <View style={{backgroundColor:"white"}}>
    <Image style={styles.logo} source = {require('./logo.png')} />
    </View>
    <View style={styles.Mscreen}>
  
    <Text style={styles.header}>Log in</Text>
    <Text style={styles.p}> Log in with data that you enter during your registration. </Text>
     
    <TextInput 
    style={styles.TEXT}
     keyboardType='email-address' textContentType="password" placeholder="Email"/>
    <TextInput 
      style={styles.TEXT}
      secureTextEntry={true}
      placeholder="Password" />
    
      <View style={[{ width: "90%", margin: 10, backgroundColor: "red" ,borderRadius:18 }]}>
      

<TouchableOpacity
       onPress={() =>
        navigation.reset({
            index: 0,
 
            routes: [
              {
                name: 'Welcome to Bloodlytics',
                params: { someParam: 'Param1' },
              },
            ],
          })
        }
        style={styles.button}>
       <View style={{marginTop:5}}> 
       <AntDesign name="login" size={22} color="white" />
       </View>
        <Text style={styles.text}>Log in</Text>
      </TouchableOpacity>
   

      </View>
      <View style={styles.pic}>
      <Image style={styles.logo2} source = {require('./background.jpg')} />
      </View>
      
    </View>
   
  
   </>

  );
}

export default Login;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  header:{
    color: "red",
    fontSize:29,
    
  },
  p:{
    color: "#0c0c0c",
    fontSize:12,
    padding:15,
    textAlign:"center",
    fontWeight:"bold",
    flexDirection:"column",
    alignSelf:"flex-start",
   
 
  },
  A:{
    color: "#999",
    height: 30,
    width: 200,
    fontSize:15,
    textAlign:"left",
  
    borderColor:"white",
    borderWidth:1,
    
    flexDirection:"column",
    alignSelf:"flex-start",
    marginLeft:18
  },
  TEXT:{
    borderBottomColor:"red",borderColor:"white",width: "90%",borderWidth:1,paddingBottom:5,marginBottom:10
  },
  Password:{
    borderBottomColor:"red",borderTopColor:"red",borderColor:"white",height:42,width: "90%",borderWidth:1,paddingBottom:5,marginBottom:10
  },
  BUTTON:{
    width: "90%",
    color: "red"
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 100,
      height: 100,
      alignSelf: "flex-start",
      justifyContent: 'center',
      backgroundColor:"white",
 
      marginLeft:5,
      marginTop: 5,
  
    
  },
  logo2: {
    width: 260,
      height: 370,
      alignSelf: "flex-end",
      justifyContent: 'flex-end',
      backgroundColor:"white",
     
 
     
     
    
  },
  pic: {
    width: "100%",
      height: 360,
    
      alignSelf: "flex-end",
      justifyContent: 'flex-end',
      backgroundColor:"white",
      alignItems: 'center',
      marginLeft:20,
      marginTop:0,
    
  },
  Mscreen:{ flex: 1,width: '100%', alignItems: 'center', justifyContent: 'flex-start',backgroundColor:"white" },
   button:{ backgroundColor: 'red',borderRadius:50,width:"100%" ,justifyContent:"center",flexDirection:"row"},
   text:{ fontSize: 20,marginLeft:1,marginTop:2,textAlign:"center",height:33, color: 'white' }


});
