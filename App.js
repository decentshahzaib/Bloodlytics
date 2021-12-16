import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';

import { StyleSheet, Text, View ,Button,TextInput,Image,Picker} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { borderBottomColor, textShadowColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

function HomeScreen({ navigation }) {
  return (
    <>
    <View style={{ flex: 1, alignItems: 'center',justifyContent:"center", backgroundColor:"white" }}>
    <View style={styles.logo}>
    <Image style={styles.logo} source = {require('./assets/logo.png')} />
    </View>
    <Text>Welcome to Bloodlytics</Text>
       <View style={[{ width: "90%", margin: 10, backgroundColor: "red" ,borderRadius: 5}]}>
      <Button
        title="login"
        color={"red"}
        onPress={() => navigation.navigate('Login')}
      />
      </View>
      <View style={[{ width: "90%", margin: 10, backgroundColor: "red"  ,borderRadius:5}]}>
      <Button color={"blue"} 
        title="Signup"
        onPress={() => navigation.navigate('Signup')}
      />
      </View>
    </View>
    </>

  );
}

function Signup({navigation}){
  
  const [selectedValue, setSelectedValue] = useState("Addiction")
  return(
    <>
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:"white" }}>

<Text style={styles.header}>Sign up</Text>
    <TextInput 
    style={styles.TEXT}
     keyboardType='email-address' textContentType="password" placeholder="Name"  />

<TextInput 
      style={styles.TEXT}
     keyboardType='email-address' textContentType="password" placeholder="Email"  />

<TextInput 
      style={styles.TEXT}
     keyboardType='email-address' textContentType="password" placeholder="Gender"  />

<TextInput 
 style={styles.TEXT}
 keyboardType='email-address' textContentType="password" placeholder="Bloodgroup"  />

<TextInput 
 style={styles.TEXT}
 keyboardType='email-address' textContentType="password" placeholder="Age"  />

<Text style={styles.A}>Please select your addiction:</Text>
<Picker
        selectedValue={selectedValue}
        style={{ height: 39, width: 340,color:"#999"}}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
        <Picker.Item label="Smoker" value="Smoker" />
        <Picker.Item label="Non-Smoker" value="Non-Smoker" />
      </Picker>
  

<TextInput 
 style={styles.Password}
 
 keyboardType='email-address' textContentType="password" placeholder="Password"  />

<TextInput 
 style={styles.TEXT}
 keyboardType='email-address' textContentType="password" placeholder="Confirm Password"  />

<View style={[{ width: "90%", margin: 10, backgroundColor: "red"  ,borderRadius:5 }]}>
      <Button 
        title="Submit"
        color={"red"}
        onPress={() => navigation.navigate('Login')}
      />
      </View>
    </View>
    </>
  );
}
function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:"white" }}>
    
    <Text style={styles.header}>Log in</Text>
   

    
    <TextInput 
    style={styles.TEXT}
     keyboardType='email-address' textContentType="password" placeholder="Email"  />

    <TextInput 
      style={styles.TEXT}
     keyboardType='email-address' textContentType="password" placeholder="Password"  />
    <Text style={styles.p}> Log in with data that you enter during your registration. </Text>
      
      <View style={[{ width: "90%", margin: 10, backgroundColor: "red" ,borderRadius:5 }]}>
      <Button 
        title="Login"
        color={"red"}
        onPress={() => navigation.push('Next')}
      />
      </View>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Sign up">
        <Stack.Screen name="Next" component={HomeScreen} />
        <Stack.Screen name="Login" component={DetailsScreen} />
        <Stack.Screen name="Signup" component={Signup} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

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
    paddingTop:100
  },
  p:{
    color: "#999",
    fontSize:12,
    paddingTop:0,
    textAlign:"center",
  
    flexDirection:"column",
    alignSelf:"center",
   
 
  },
  A:{
    color: "#999",
   
    fontSize:15,
    textAlign:"left",
    borderBottomColor:"red",
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
    alignSelf: "center",
 
  
    
  },


});
