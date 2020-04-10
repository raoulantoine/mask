import React, {Component} from 'react';
import { View, Text, FlatList, Button} from "react-native";



class ListPharmacie extends Component {

    componentDidMount() {
        this.props.fetchPharmacies()
    }

    render() {

        const {navigate} = this.props;


        return (

            <FlatList
                data={this.props.pharmacies}
                renderItem={({item}) => <Button
                    title={item.name}
                    onPress={() =>
                        navigate('DetailScreen2', {pharmacie:item})
                    }>
                </Button>}


                keyExtractor={item => item._id}

            />

        );
    }
}

export default ListPharmacie;