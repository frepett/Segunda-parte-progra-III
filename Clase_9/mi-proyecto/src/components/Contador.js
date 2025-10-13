import React, { Component } from "react";
import { Pressable, Text, StyleSheet, View } from "react-native";

class Contador extends Component {
    constructor() {
        super();
        this.state = {
            contador: 0
        };
    }
    incrementar() {
        this.setState({ contador: this.state.contador + 1 });
    }   
    render() {
        return (
            <View style={styles.container}>
                <Text>Contador: {this.state.contador}</Text>
                <Pressable onPress={() => this.incrementar()} style={styles.click}>
                    <Text style={styles.texto}>Incrementar</Text>
                </Pressable>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop:5,
        marginBottom:5
    },
    click: {
        backgroundColor: 'rgba(0, 255, 0, 0.5)',
        padding: 7,
        marginBottom:10,
        borderRadius: 4,
        textAlign: 'center',
    },
    texto: {
        fontWeight: 'bold',
        textAlign: 'center'
    }
});
export default Contador;