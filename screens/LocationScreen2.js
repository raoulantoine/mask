import React, {Component} from 'react';
import {SearchBar} from "react-native-elements";
import {Button, Text, View} from 'react-native'
import ListPharmacieContainer from "../containers/ListPharmacieContainer";



class LocationScreen2 extends Component {

    render() {

        const {navigate} = this.props.navigation;

        return (
            <View style={{marginTop: 35}}>
                <Text>Rechercher les pharmacies</Text>
                <Button title={'Rechercher'} onPress={() => navigate('DetailScreen')}/>
            </View>
        );
    }
}

