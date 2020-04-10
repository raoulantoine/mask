import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {NavigationContainer} from "@react-navigation/native";

import Home from './screens/HomeScreen';
import Search from './screens/SearchScreen';
import Add from './screens/AddScreen';
import pharmacie from './reducers/pharmacies';

import {Ionicons} from "@expo/vector-icons";

const store = createStore(reducers);
const Tab = createBottomTabNavigator();

export default function App() {

    return (

        <Provider store={pharmacie}>
            <NavigationContainer>
                <Tab.Navigator screenOptions={({route}) => ({
                    tabBarIcon: ({focused, color, size}) => {
                        let iconName;

                        if (route.name === 'Home') {
                            iconName = 'ios-home';
                        } else if (route.name === 'Search') {
                            iconName = 'ios-search';
                        } else if (route.name === 'Add') {
                            iconName = 'ios-add-circle';
                        }

                        return <Ionicons name={iconName} size={size} color={color}/>;
                    },
                })}
                               tabBarOptions={{
                                   activeTintColor: 'black',
                                   inactiveTintColor: 'black',
                               }}>
                    <Tab.Screen name="Home" component={Home}/>
                    <Tab.Screen name="Search" component={Search}/>
                    <Tab.Screen name="Add" component={Add}/>
                </Tab.Navigator>
            </NavigationContainer>
        </Provider>
    );
}
