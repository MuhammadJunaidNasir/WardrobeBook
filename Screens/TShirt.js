import React, { Component } from 'react';
import {StyleSheet,View,Text,Button,TextInput,Image} from 'react-native';
export default class TShirt extends Component{

    render(){
        return(

                      <View style={{flex:1,backgroundColor:'#d2cdd3'}} >

                          <Text style={{marginLeft:100,fontSize:30,marginTop:100,color:'#1f0824'}}> 👜 WardrobeBook</Text> 

           <View style={{marginTop:50}}>

                   <Image style={{height:100, width:100,marginLeft:10}} source={require('./Images/MintoTShirt.jpg')} />    
      <Text style={{marginLeft:18,marginBottom:50}}> Minto T-Shirt  </Text> 

              <Text style={{fontSize:18,fontFamily:'bold'}}>  Color: White,Grey,Brown,Black </Text>
              <Text style={{fontSize:18,fontFamily:'bold'}}>  Price: Rs.1500 </Text>
              <Text style={{fontSize:18,fontFamily:'bold'}}>  Size: Small,Medium,Large </Text>




              <TextInput style={{height:30,width:230, borderWidth:3, borderColor:"#1f0824", borderRadius:1, marginBottom:20,marginLeft:70,marginTop:20}}   placeholder='                         📧 Enter Your Full Name' autoFocus={true} autoCapitalize='none'  />                    

 <TextInput style={{height:30,width:230, borderWidth:3, borderColor:"#1f0824", borderRadius:1,marginLeft:70}}   placeholder='                        🔑 Enter Your Mobile Number' autoFocus={true} autoCapitalize='none' secureTextEntry={true}  />     

 <TextInput style={{height:30,width:230, borderWidth:3, borderColor:"#1f0824", borderRadius:1,marginLeft:70,marginTop:15}}   placeholder='                        🔑 Enter Your Address' autoFocus={true} autoCapitalize='none'  />



                      <View style={{width:250,flexDirection:'row',marginLeft:80,marginTop:10}}>
        <Button title="ORDER NOW" color="#1f0824"  onPress={ ()=>{alert('Order has been placed. Thank You !')} }   />

         </View> 








           </View>               



                      </View>

        )
    }
} 