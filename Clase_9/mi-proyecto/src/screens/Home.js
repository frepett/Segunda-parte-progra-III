import React, { Component } from "react";
import { View, Text, Pressable} from "react-native";
import { StyleSheet } from "react-native";
import Contador from "../components/Contador";

class Home extends Component{
    saludar() {
            console.log("Hola");
        }
    render() {
        return (
            <View style={styles.container}>
                <Text>Hola munedo</Text>
                <Pressable onPress={()=>this.saludar()} style={styles.boton}>
                    <Text style={styles.texto}>saludar</Text>
                </Pressable>
                <Contador/>
            </View>
        );}
}

const styles = StyleSheet.create({
    container:{
        padding: 10,
        display: 'flex',
        alignItems: 'center',
    },
    texto: {
      backgroundColor: `red`,
      padding: 20
    },
    boton:{
        backgroundColor: `#ccc`,
        padding: 4,  
        marginBottom:10,
        borderRadius: 4,
        textAlign: 'center',
      },
    texto: {
        fontWeight: 'bold',
        textAlign: 'center'
    }
    });
export default Home;