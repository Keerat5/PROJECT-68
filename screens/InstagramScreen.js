import React from 'react';
import {Text, View,Image} from 'react-native';

export default class InstagramScreen extends React.Component{
    render(){
        return(
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                <Image
                    source={require("../assets/instagram.webp")}
                    style={{width:100, height:100, marginBottom:20}}
                />
                <Text>Instagram</Text>
            </View>
        )
    }
}
