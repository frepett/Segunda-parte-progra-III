import React, { Component } from "react";
import { Pressable, Text } from "react-native";
import { TextInput, View } from "react-native-web";
import { db, auth } from "../firebase/config";

class NuevoPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            texto: '',
        }
    }
    onSubmit() {
        db.collection('posts').add({
            owner: auth.currentUser.email,
            texto: this.state.texto,
            createdAt: Date.now()
        })
        .then()
        .catch( error => console.log(error) );
    }
    render() {
        return (
            <View>
                <Text>Mensjae</Text>
                <TextInput placeholder="Texto"
                    keyboardType="default"
                    onChangeText={text => this.setState({ texto: text })}
                    />

                <Pressable onPress={() => this.onSubmit()}>
                    <Text>Registrarse</Text>
                </Pressable>
            </View>
        );
    }}

    export default NuevoPost;