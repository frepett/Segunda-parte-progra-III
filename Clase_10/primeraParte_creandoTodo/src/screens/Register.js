import React, { Component } from "react";
import { Pressable, Text } from "react-native";
import { TextInput, View } from "react-native-web";

class Register extends Component{
        constructor(props){
            super(props);
            this.state={
                nombre:'',
                email:'',
                contraseña:''
            }
        }
        render() {
        return (

            <View>
                <Text>Registrarse</Text>
                <TextInput placeholder="Ingrese su nombre"
                keyboardType="default"
                onChangeText={text=>this.setState({nombre:text})}
                value={this.state.nombre}/>

                <TextInput placeholder="Ingrese su email"
                keyboardType="email"
                onChangeText={text=>this.setState({email:text})}
                value={this.state.email}/>

                <TextInput placeholder="Ingrese su contraseña"
                keyboardType="default"
                onChangeText={text=>this.setState({contraseña:text})}
                value={this.state.contraseña}/>

                <Pressable onSubmit={() => console.log(this.state.nombre, this.state.email, this.state.contraseña)}>
                    <Text>Registrarse</Text>
                </Pressable>
            </View>
        );
    }
}
export default Register;