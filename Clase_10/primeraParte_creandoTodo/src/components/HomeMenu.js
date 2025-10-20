import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import Home from "../screens/Home";
import Profile from "../screens/Profile";

const Tab = createBottomTabNavigator();


function HomeMenu() {
    return (

            <Tab.Navigator>
                <Tab.Screen name="Home" component={Home} 
                options={
                    {headerShown:false,
                    toBarIcon:() => <AntDesign name="home" size={24} color="black" />}
                    } />
                <Tab.Screen name="Profile" component={Profile} options={
                    {headerShown:false,
                    toBarIcon:() => <MaterialCommunityIcons name="face-man-profile" size={24} color="black"/>}
                    }/>
            </Tab.Navigator>


    );
}
export default HomeMenu;