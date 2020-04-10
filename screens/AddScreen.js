import React, {Component} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import GradientButton from 'react-native-gradient-buttons';



class AddScreen extends Component {
    render() {
        return (
            <View style = {{ padding:20 }}>
                <Text style = {{ color: 'black', fontSize: 40, textAlign: 'center', marginTop: 20 }}>
                    Ajouter une pharmacie
                </Text>
                <Text>Nom</Text>
                <TextInput  style={{ height:40, borderColor:'black', borderWidth: 1, borderRadius: 5}}
                            name="Nom"
                            Type='TextInput' returnKeyType='done'
                            placeholder='Nom'/>
                <Text>Adresse</Text>
                <TextInput  style={{ height:40, borderColor:'black', borderWidth: 1, borderRadius: 5}}
                            name="Adresse"
                            Type='TextInput' returnKeyType='done'
                            placeholder='Adresse'/>
                <Text>Latitude</Text>
                <TextInput  style={{ height:40, borderColor:'black', borderWidth: 1, borderRadius: 5}}
                            name="Latitude"
                            Type='TextInput' returnKeyType='done'
                            placeholder='Latitude'/>
                <Text>Longitude</Text>
                <TextInput  style={{ height:40, borderColor:'black', borderWidth: 1, borderRadius: 5}}
                            name="Longitude"
                            Type='TextInput' returnKeyType='done'
                            placeholder='Longitude'/>
                <Text>Masques</Text>
                <TextInput  style={{ height:40, borderColor:'black', borderWidth: 1, borderRadius: 5}}
                            name="NombreMask"
                            Type='TextInput' returnKeyType='done'
                            placeholder='Nombre de masque'/>
                <GradientButton text="Enregister" width='80%' disabled impact title='Enregistrer' onPress={() => this.onSubmit()}
                                style={{ paddingTop: 20 }}/>
            </View>
        );
    }
}


export default AddScreen;