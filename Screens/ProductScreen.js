import React,{Component} from 'react';
import {StyleSheet,View,Text,Button,Image,ScrollView} from 'react-native';

export default class ProductScreen extends Component{
    render(){
        return(

                      <View style={{flex:1,backgroundColor:'#d2cdd3'}} >
  <ScrollView>

                              
                 <Text style={{marginLeft:100,fontSize:30,marginTop:20,color:'#1f0824'}}> 👜 WardrobeBook</Text> 
                 <Text style={{marginLeft:10,fontSize:25,marginTop:20,marginBottom:20,color:'#1f0824'}}>Products:</Text> 

      <Image style={{height:100, width:100,marginLeft:10}} source={require('./Images/MintoTShirt.jpg')} />    
      <Text style={{marginLeft:18}}> Minto T-Shirt  </Text>    

      <View style={{width:250,flexDirection:'row',marginLeft:10,marginTop:10}}>
        <Button title="View Details" color="#1f0824" onPress={ ()=>{this.props.navigation.navigate('SignUpScreen')} }   />
      </View>  




         <Image style={{height:100, width:100,marginLeft:10,marginTop:20}} source={require('./Images/caps.jpg')} />    
      <Text style={{marginLeft:38}}> Cap  </Text>    

      <View style={{width:250,flexDirection:'row',marginLeft:10,marginTop:10}}>
        <Button title="View Details" color="#1f0824" onPress={ ()=>{this.props.navigation.navigate('SignUpScreen')} }   />
      </View>   




         <Image style={{height:100, width:100,marginLeft:10,marginTop:20}} source={require('./Images/coat.jpg')} />    
      <Text style={{marginLeft:38}}> Coat  </Text>    

      <View style={{width:250,flexDirection:'row',marginLeft:10,marginTop:10}}>
        <Button title="View Details" color="#1f0824" onPress={ ()=>{this.props.navigation.navigate('SignUpScreen')} }   />
      </View> 




      <Image style={{height:100, width:100,marginLeft:10,marginTop:20}} source={require('./Images/pents.jpg')} />    
      <Text style={{marginLeft:33}}> Jeans Pent  </Text>    

      <View style={{width:250,flexDirection:'row',marginLeft:10,marginTop:10}}>
        <Button title="View Details" color="#1f0824" onPress={ ()=>{this.props.navigation.navigate('SignUpScreen')} }   />
      </View> 




      <Image style={{height:100, width:100,marginLeft:10,marginTop:20}} source={require('./Images/pents1.jpg')} />    
      <Text style={{marginLeft:33}}> Dress Pent  </Text>    

      <View style={{width:250,flexDirection:'row',marginLeft:10,marginTop:10}}>
        <Button title="View Details" color="#1f0824" onPress={ ()=>{this.props.navigation.navigate('SignUpScreen')} }   />
      </View>




      <Image style={{height:100, width:100,marginLeft:10,marginTop:20}} source={require('./Images/sportTShirt.jpg')} />    
      <Text style={{marginLeft:30}}> Sports Shirt  </Text>    

      <View style={{width:250,flexDirection:'row',marginLeft:10,marginTop:10}}>
        <Button title="View Details" color="#1f0824" onPress={ ()=>{this.props.navigation.navigate('SignUpScreen')} }   />
      </View>




      <Image style={{height:100, width:100,marginLeft:10,marginTop:20}} source={require('./Images/sportsTrouser.jpg')} />    
      <Text style={{marginLeft:28}}> Sports Trouser  </Text>    

      <View style={{width:250,flexDirection:'row',marginLeft:10,marginTop:10}}>
        <Button title="View Details" color="#1f0824" onPress={ ()=>{this.props.navigation.navigate('SignUpScreen')} }   />
      </View>








         
         
                                                          </ScrollView>
                             
                      </View>

                      

        )
    }
}