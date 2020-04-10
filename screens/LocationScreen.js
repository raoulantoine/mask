import React, {Component} from 'react';
import {Header} from "react-native-elements";
import {createStackNavigator} from '@react-navigation/stack';
import ListPharmacieContainer from "../containers/ListPharmacieContainer";
import {View} from "react-native";
import LocationScreen2 from "./LocationScreen2";
import DetailScreen from "./DetailScreen";
import DetailScreen2 from "./DetailScreen2";



const Stack = createStackNavigator();

class Search extends Component {
    render() {
        return (
            <Stack.Navigator>
                <Stack.Screen name={'LocationScreen2'} component={LocationScreen2}/>
                <Stack.Screen name={'DetailScreen'} component={DetailScreen}/>
                <Stack.Screen name={'DetailScreen2'} component={DetailScreen2}/>
            </Stack.Navigator>

        );
    }
}

