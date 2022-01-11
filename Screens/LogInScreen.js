import React, { Component } from 'react';
import {StyleSheet,View,Text,Button,TextInput} from 'react-native';
export default class LogInScreen extends Component{
  
    render(){
        return(

                      <View style={{flex:1,backgroundColor:'#d2cdd3'}} >
                              
                              <Text style={{marginLeft:100,fontSize:30,marginTop:100,color:'#1f0824'}}> 👜 WardrobeBook</Text> 

                              <Text style={{fontSize:18,marginTop:80,color:'#1f0824'}}> LogIn To Continue ➡️ </Text>

 <TextInput style={{height:30,width:230, borderWidth:3, borderColor:"#1f0824", borderRadius:1, marginBottom:20,marginLeft:70,marginTop:20}}   placeholder='                         📧 Enter Your Email' autoFocus={true} autoCapitalize='none'  />                    

 <TextInput style={{height:30,width:230, borderWidth:3, borderColor:"#1f0824", borderRadius:1,marginLeft:70}}   placeholder='                        🔑 Enter Your Password' autoFocus={true} autoCapitalize='none' secureTextEntry={true}  />                               

  <View style={{width:250,flexDirection:'row',marginLeft:70,marginTop:10}}>
    <Button title="LogIn" color="#1f0824" onPress={ ()=>{this.props.navigation.navigate('ProductScreen')} }   />
                       
         </View>        

         <Text style={{marginTop:200,marginLeft:270}}> Are you a new user? ⬇️  </Text> 

         <View style={{width:250,flexDirection:'row',marginLeft:310,marginTop:10}}>
        <Button title="Register" color="#1f0824" onPress={ ()=>{this.props.navigation.navigate('SignUpScreen')} }   />
                       
         </View> 

                             
                      </View>

        )
    }
}