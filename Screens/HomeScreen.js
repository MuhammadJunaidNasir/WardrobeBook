import React,{Component} from 'react';
import {StyleSheet,View,Text,Button,Image,ImageBackground} from 'react-native';


export default class HomeScreen extends Component{
    render(){
        return(

                      <View style={{flex:1,backgroundColor:'#d2cdd3'}} >
                              

          <Text style={{marginLeft:100,fontSize:30,marginTop:300,color:'#1f0824'}}> 👜 Wardrobebook</Text>
             
                          

                    
                        <View style={styles.container1}>
                        <Button color='#1f0824' title=">" onPress={ ()=>{this.props.navigation.navigate('LogInScreen')} }   />
                        </View>

                    

                           
                      </View>

                      

        )
    }
}

const styles= StyleSheet.create({
  container1:{
       flexDirection:'row',
       width:'100%',
       justifyContent:'space-around',


},



});