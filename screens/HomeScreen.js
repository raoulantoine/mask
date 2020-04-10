import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';



class HomeScreen extends Component {
    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', fontWeight: 'bold' }}>
                <Image
                    source={require('../assets/smiley.png')} style={{width: 200, height: 200}}
                />
                <Text style = {{ color: 'black', fontSize: 65}}>I need a mask</Text>
            </View>
        );
    }
}





