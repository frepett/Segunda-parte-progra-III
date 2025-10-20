import React, { Component } from "react";
import { Pressable, Text, StyleSheet } from "react-native";
import Login from "./Login";
import { View } from "react-native-web";

function Profile (props) {
        return (
            <View style={styles.general}>
                <Pressable onPress={() => props.navigation.navigate('Login')} style={styles.boton}>
                    <Text>volver a log in</Text>
                </Pressable>
            </View>
        );
}

const styles =  StyleSheet.create({
    general:{
        display: 'flex',
        flexDirection: 'column',    
        justifyContent: 'center',
        alignItems: 'center',
    },
    boton:{
        backgroundColor: `lightblue`,
        padding: 7,
        borderRadius: 4,
    }})
export default Profile;