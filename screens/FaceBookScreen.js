import React from 'react';
import {Text, View, Image} from 'react-native';

export default class FaceBookScreen extends React.Component{
    render(){
        return(
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                <Image
                    source={require("../assets/facebook.png")}
                    style={{width:100, height:100, marginBottom:20}}
                />
                <Text>FaceBook</Text>
            </View>
        )
    }
}
