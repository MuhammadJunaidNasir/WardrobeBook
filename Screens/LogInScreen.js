import React, { Component } from 'react';
import {StyleSheet,View,Text,Button} from 'react-native';
export default class LogInScreen extends Component{
    render(){
        return(

                      <View style={{flex:1}} >
                              

                              

                        <View style={{width:150,flexDirection:'row',alignItems:'center',justifyContent:'space-around',marginLeft:250}}>
                        <Button title="HOME" onPress={ ()=>{this.props.navigation.navigate('HOME Screen')} }   />
                        <Button title="ABOUT" onPress={ ()=>{this.props.navigation.navigate('ABOUT Screen')} }   />
                        </View>
                                
                                <Text style={{color:'blue',marginLeft:10,fontFamily:'bold',fontSize:15}}>
                                        Name: Muhammad Junaid Nasir {'\n'}
                                        Ph#: 0317-0691864  {'\n'}
                                        Address: Burewala  {'\n'}
                                        Email: mjn7439@gmail.com
                                          
                                </Text>

                    
                             
                      </View>

        )
    }
}