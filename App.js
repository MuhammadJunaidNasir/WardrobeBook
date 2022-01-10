import 'react-native-gesture-handler';
import React,{useState,useEffect} from 'react';
import {View,Text,StyleSheet,Button,FlatList,ScrollView,SafeAreaView,TextInput,ActivityIndicator} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './Screens/HomeScreen';
import LogInScreen from './Screens/LogInScreen';
import SignUpScreen from './Screens/SignUpScreen';
import ProductScreen from './Screens/ProductsScreen';



function App(){
          const Stack=createStackNavigator();

  return(
                           <NavigationContainer>
                               
                               <Stack.Navigator>
      <Stack.Screen name='Welcome To WardrobeBook' component={HomeScreen} options={{title: 'Welcome To WardrobeBook',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
/>
                               <Stack.Screen name='LogInScreen' component={LogInScreen}  />
                               <Stack.Screen name='SignUpScreen' component={SignUpScreen}  />
                               <Stack.Screen name="ProductScreen" component={ProductScreen} />
                               
                                </Stack.Navigator>
                                 

                           </NavigationContainer>
                  
   
  );

}
export default App;


const styles= StyleSheet.create({
  container1:{
       flex:1,
       justifyContent:'center',
       alignItems:'center',
       backgroundColor:'pink',
       fontSize:35,
},



});
