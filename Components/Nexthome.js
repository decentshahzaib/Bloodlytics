import * as React from 'react';
import { StyleSheet,View, Text,TextInput,Button, Alert,TouchableOpacity,Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Login from './Login.js';

import { createDrawerNavigator,DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,   } from '@react-navigation/drawer';

import { AntDesign } from '@expo/vector-icons'; 



function Home() {
  return (
      <>
      <View style={styles.Mscreen}>
       <TextInput style={styles.input} placeholder="Find Doner"  />

      <View style={{marginTop:10,width:"20%",height:35,}}>
      
      <TouchableOpacity
      onPress={() => Alert.alert('Thank You 😄')}
      
        style={styles.buttonSearch}>
  
        <Text style={styles.text}>Search</Text>
      </TouchableOpacity>
       </View> 
      </View>
      <View style={styles.button2} >
      

      <TouchableOpacity
      onPress={() => Alert.alert('Empty 😅')}
      
        style={styles.button2s}>
  
        <Text style={styles.button2Text}>Data Viualization</Text>
      </TouchableOpacity>

      </View>
      

    </>

  );
}

function History() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>History Screen </Text>
    
    <Button color="red" title="Click"  onPress={() => Alert.alert('Thank you 😉')}/>
  </View>

  );
}

function Report() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Report Screen</Text>
      <Button color="red" title="Click"  onPress={() => Alert.alert('Thank you 😉')}/>

    </View>
  );
}

function Help() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Contact Us</Text>
      <Button color="red" title="Click"  onPress={() => Alert.alert('Thank you 😉')}/>

    </View>
  );
}


function CustomDrawerContent(props,navigation) {
  return (
    <>
    <View style={{ flex:1}}>
    <DrawerContentScrollView {...props} contentContainerStyle={{backgroundColor:'white'}}>
      <View style={{width:"100%",height:120,backgroundColor:"white",flexDirection:"row",justifyContent:"space-around",alignItems: 'center'}}>
      
      <Image style={styles.logo}  source = {require('./profile.jpg')} />
      <Text>Person Name</Text>
      </View>
      <View style={{backgroundColor:"#ffff",padding:10}}>
      <DrawerItemList {...props} />
      </View>
    </DrawerContentScrollView>

    <View style={{padding:15,borderWidth:1,borderTopColor:"red",borderColor:"white"}}>
      <TouchableOpacity onPress={()=>props.navigation.navigate('Login')}  style={{alignItems:"center",justifyContent:"space-around",flexDirection:"row",paddingVertical:10,backgroundColor:"red",borderRadius:20,width:"100%" }}>
      
      <AntDesign name="logout" size={18} color="white" />
      <Text style={{color:"white"}}>Log out</Text>
   
      </TouchableOpacity>
    </View>
    </View>
    </>
    );
}



const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
     
    <Drawer.Navigator  drawerContent={(props) => <CustomDrawerContent {...props} />}
    screenOptions={{drawerActiveBackgroundColor:"red",drawerActiveTintColor:"white"}}
    >
    
      <Drawer.Screen name="Home" component={Home} options={{
        DrawerIcon:({color})=>(
          <AntDesign name="home" size={24} color="black" />
        )
      }}  />
      <Drawer.Screen name="History" component={History} options={{
        DrawerIcon:({color})=>(
          <AntDesign name="home" size={24} color="black" />
        )
      }}  />
      <Drawer.Screen name="Report" component={Report}
      
      options={{
        DrawerIcon:()=>(
          <AntDesign name="home" size={10} color="black" />
        )
      }}  />

<Drawer.Screen name="Help" component={Help}  />
 
    </Drawer.Navigator>
    
  
  );
}
export default MyDrawer;

const styles = StyleSheet.create({
  logo: {
    width: 100,
    height: 100,
    
   
 
  
    
  },
Mscreen:{flexDirection:"row",width:"100%",alignContent:"space-between",alignItems:"center",justifyContent:"space-around" },
input:{backgroundColor:"white",marginLeft:7,height:35,width:"70%",borderRadius:2,borderColor:"black",padding:2,borderWidth:1,marginTop:10,},
buttonSearch:{ backgroundColor: 'red',borderRadius:50,width:"100%" ,justifyContent:"center",flexDirection:"row"},
text:{ fontSize: 17,marginLeft:1,marginTop:5,alignItems:"center",height:29,textAlign:"center", color: 'white' },
button2:{flex:1,flexDirection:"column",width:"100%",alignContent:"center",alignItems:"center",justifyContent:"flex-end",marginBottom:20 },
button2s:{ backgroundColor: 'red',borderRadius:50,width:"40%" ,justifyContent:"center",flexDirection:"row"},
button2Text:{ fontSize: 17,marginLeft:1,marginTop:6,alignItems:"center",height:30,textAlign:"center", color: 'white' },

});
