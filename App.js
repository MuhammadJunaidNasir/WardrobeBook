import 'react-native-gesture-handler';
import React from 'react';
import {View,Text,StyleSheet,AsyncStorage} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



import HomeScreen from './Screens/HomeScreen';
import LogInScreen from './Screens/LogInScreen';
import SignUpScreen from './Screens/SignUpScreen';
import ProductScreen from './Screens/ProductScreen';
import TShirt from './Screens/TShirt';
import Cap from './Screens/Cap';
import Coat from './Screens/Coat';
import jeans from './Screens/jeans';
import dresspent from './Screens/dresspent';
import sportshirt from './Screens/sportshirt';
import sporttrouser from './Screens/sporttrouser';



function App(){
          const Stack=createStackNavigator();

  return(
                           <NavigationContainer>
                               
                               <Stack.Navigator>
      <Stack.Screen name='HomeScreen' component={HomeScreen} options={{title: 'Welcome To WardrobeBook',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
/>
     <Stack.Screen  name='LogInScreen' component={LogInScreen} options={{title: 'LogIn To Your Account',
          headerStyle: {
            backgroundColor: '#f4511e',
            
            
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
     <Stack.Screen name='SignUpScreen' component={SignUpScreen} options={{title: 'Create a new account',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}   />
    <Stack.Screen name="ProductScreen" component={ProductScreen} options={{title: '👜 Clothing Products',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}  />
        <Stack.Screen name="TShirt" component={TShirt} options={{title: '👜 Clothing Products',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}  />

        <Stack.Screen name="Cap" component={TShirt} options={{title: '👜 Clothing Products',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}  />
        <Stack.Screen name="Coat" component={TShirt} options={{title: '👜 Clothing Products',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}  />
        <Stack.Screen name="jeans" component={TShirt} options={{title: '👜 Clothing Products',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}  />
        <Stack.Screen name="dresspent" component={TShirt} options={{title: '👜 Clothing Products',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}  />
        <Stack.Screen name="sportshirt" component={TShirt} options={{title: '👜 Clothing Products',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}  />
        <Stack.Screen name="sporttrouser" component={TShirt} options={{title: '👜 Clothing Products',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}  />

        
                               
                                </Stack.Navigator>
                                 

                           </NavigationContainer>
                  
   
  );

}
export default App;


const styles= StyleSheet.create({
  



});
