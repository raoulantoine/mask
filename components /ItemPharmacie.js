import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import logoPharmacies from '../assets/smiley.png'

class ItemPharmacie extends Component {

    render() {
        const {pharmacie} = this.props;
        return (
            <View style={{alignItems: 'center', marginTop: 60 }}>

                <Image source={logoPharmacies} style={{ width: 305, height: 159, marginBottom: 25 }} />

                <Text style={{fontSize: 20, marginBottom: 20}}>
                    Bienvenue à la pharmacie {pharmacie.name}
                </Text>
                <Text style={{fontSize: 15, marginBottom: 20}}>
                    Adresse: {pharmacie.adresse}
                </Text>
                <Text style={{fontSize: 15, marginBottom: 20}}>
                    Masques disponibles: {pharmacie.masques}
                </Text>

            </View>
        );
    }
}

export default ItemPharmacie;