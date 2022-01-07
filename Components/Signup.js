import React from "react";
import { StyleSheet, Text, View ,Button,TextInput,Image,TouchableOpacity,Alert} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Picker} from '@react-native-picker/picker';
import { useState } from 'react';
import { Ionicons,AntDesign,FontAwesome  } from '@expo/vector-icons';

//Validation functions
//required
 const isValidObjfield=(obj)=>{
   return Object.values(obj).every(value=>value.trim())
 }
 //error msg 
 const updateError=(error,stateUpdater)=>{
  stateUpdater(error);
  setTimeout(()=>{
    stateUpdater("")
  },2500);
 }
//email validation
 const isValidEmail=(value)=>{
  const regx=/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  return regx.test(value)
 }


function Signup({navigation}){
  
 
  const [userInfo, setuserInfo] = useState({
    fullName:"",
    email:"",
    gender:"",
    age:"",
    StreetNo:"",
    HouseNO:"",
    password:"",
    confirmPassword:"",
    
  });
  const{fullName,email,gender,age,StreetNo,HouseNO,password,confirmPassword}=userInfo

  const onChangehandler=(value,fieldName)=>{
    setuserInfo({...userInfo,[fieldName]:value})

  }

  const[error,setError]= useState("");
//Checking condiction
  const isValidfoam=()=>{
    if(!isValidObjfield(userInfo)) return updateError("Required all fields",setError)

    if (!fullName.trim() || fullName.length<3) return updateError("Invalid name",setError)
    if (!isValidEmail(email) ) return updateError("Invalid Email",setError)
    if (!password.trim() || password.length<8) return updateError("Password is less than 8 ch",setError)
   if (password!=confirmPassword) return updateError("Password not match",setError)

   return true
  }
  const submitFoam=()=>{
    if(isValidfoam())
    console.log(userInfo);
  }

  const [selectedValue, setSelectedValue] = useState("Select");
// alert value of selected colony
  const Show=(value)=>{
    Alert.alert(value)
  }
  // extra for getting value of select
  // Alert.alert(selectedValue)  
  return(
    <>
     <View style={{backgroundColor:"white"}}>
    <Image style={styles.logo} source = {require('./logo.png')} />
    </View>
  <View style={styles.Mscreen}>
 
  <Text style={styles.header}>Sign up</Text>

  {error?<Text style={styles.errors}>{error}</Text>:null}
  
    <TextInput 
    style={styles.TEXT}
     keyboardType='name-phone-pad' textContentType="username" placeholder="Name"  
     value={fullName} onChangeText={(value)=>onChangehandler(value,'fullName')}

     />

<TextInput 
      style={styles.TEXT}
     keyboardType='email-address'  placeholder="Email" autoCapitalize="none"
     value={email} onChangeText={(value)=>onChangehandler(value,'email')} />


<TextInput 
 style={styles.TEXT}
 
 keyboardType='email-address' textContentType="password" placeholder="Password" 
 value={password} onChangeText={(value)=>onChangehandler(value,'password')}
  />

<TextInput 
 style={styles.TEXT}
 keyboardType='email-address' textContentType="password" placeholder="Confirm Password" 
 value={confirmPassword} 
 onChangeText={(value)=>onChangehandler(value,'confirmPassword')}
 />
 <TextInput 
 style={styles.TEXT}
 keyboardType='numeric' textContentType="password" placeholder="Age" 
 value={age} onChangeText={(value)=>onChangehandler(value,'age')} />

<TextInput 
 style={styles.TEXT}
 keyboardType='numeric' textContentType="password" placeholder="Street no" 
 value={StreetNo} onChangeText={(value)=>onChangehandler(value,'StreetNo')} />

<TextInput 
 style={styles.TEXT}
 keyboardType='numeric' textContentType="password" placeholder="House no" 
 value={HouseNO} onChangeText={(value)=>onChangehandler(value,'HouseNO')} />

<View style={{flexDirection:"row",borderWidth:1,width:"90%",borderColor:"white",borderBottomColor:"red"}}>
<Text style={styles.A}>Select Colony:</Text>
<Picker
      selectedValue={selectedValue}
      style={{   borderColor:"white", borderWidth:1 , width: 120,color:"#999"}}
        onValueChange={Show}>

        <Picker.Item label="Madina-Town" value="Madina-Town" />
        <Picker.Item label="Mansoorabad" value="Mansoorabad" />
        <Picker.Item label="Farooqabad" value="Farooqabad" />
        <Picker.Item label="Kohainoor" value="Kohainoor" />
        
       

      </Picker>
      </View>


<View style={{flexDirection:"row",borderWidth:1,width:"90%",borderColor:"white",borderBottomColor:"red"}}>
<Text style={styles.A}>Select Gender:</Text>
<Picker
      selectedValue={selectedValue}
      style={{   borderColor:"white", borderWidth:1 , width: 120,color:"#999"}}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>

        <Picker.Item label="Male" value="Male" />
        <Picker.Item label="Female" value="Female" />
       

      </Picker>
      </View>


<View style={{flexDirection:"row",borderWidth:1,width:"90%",borderColor:"white",borderBottomColor:"red"}}>
<Text style={styles.A}>Select BloodGroup:</Text>
<Picker
      selectedValue={selectedValue}
      style={{   borderColor:"black", borderWidth:1 ,height:30, width: 120,color:"#999"}}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>

        <Picker.Item label="AB+" value="AB+" />
        <Picker.Item label="AB-" value="AB-" />
        <Picker.Item label="B+" value="B+" />
        <Picker.Item label="B-" value="B-" />
        <Picker.Item label="A+" value="A+" />
        <Picker.Item label="A-" value="A-" />
        <Picker.Item label="O+" value="O+" />
        <Picker.Item label="O-" value="O-" />

      </Picker>
      </View>



<View style={{flexDirection:"row",width:"90%",borderWidth:1,borderColor:"white",borderBottomColor:"red"}}>
<Text style={styles.A}>Select you are smoker/non-smoker:</Text>
<Picker
        selectedValue={selectedValue}
        style={{  width: 120,color:"#999"}}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
        <Picker.Item label="Smoker" value="Smoker" />
        <Picker.Item label="Non-Smoker" value="Non-Smoker" />
      </Picker>
  </View>

 

<View style={[{ width: "90%", margin: 10, backgroundColor: "red"  ,borderRadius: 18}]}>
     
         <TouchableOpacity
        onPress={submitFoam}
        style={styles.button1}>
       <View style={{marginTop:5}}> 
       <AntDesign name="checksquareo" size={21} color="white" />
       </View>
        <Text style={styles.text}>Submit</Text>
      </TouchableOpacity>
      </View>
      <View style={styles.pic}>
      <Image style={styles.logo2} source = {require('./blood-donor.jpg')} />
      </View>
    </View> 
   
    </>
  );
}


export default Signup;




const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    },
    header:{
      color: "red",
      fontSize:29,
    
    },
    p:{
      color: "#0c0c0c",
      fontSize:12,
      paddingTop:0,
      textAlign:"center",
      fontWeight:"bold",
      flexDirection:"column",
      alignSelf:"center",
     
   
    },
    A:{
      color: "#999",
      height: 50,
      width: 200,
      fontSize:15,
      textAlign:"left",
      alignItems: 'center',
     marginLeft:0,
     paddingTop:12   },
    TEXT:{
      borderBottomColor:"red",borderColor:"white",width: "90%",borderWidth:1,paddingBottom:5,
    },
    Password:{
      borderBottomColor:"red",borderColor:"white",height:40,width: "90%",borderWidth:1
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
      marginTop: 5

   
    
      
    },
    logo2: {
    width: 210,
      height: 170,
      alignSelf: "flex-end",
      justifyContent: 'flex-end',
      backgroundColor:"white",
   
     
 
      opacity: 1, 
     
    
  },
  pic: {
    width: "90%",
    height: 360,
    opacity: 1,
   
      backgroundColor:"white",
      alignItems: 'center',
     
      
    
  },
  Mscreen:{ flex: 1, alignItems: 'center', justifyContent: 'flex-start',backgroundColor:"white" },
  errors:{backgroundColor:"red",color:'white',width:"100%",textAlign:"center"},
  button1:{ backgroundColor: 'red',borderRadius:50,width:"100%" ,justifyContent:"center",flexDirection:"row"},
  text:{ fontSize: 20,marginLeft:1,marginTop:2,alignItems:"center",height:33,textAlign:"center", color: 'white' },


  
  });
  