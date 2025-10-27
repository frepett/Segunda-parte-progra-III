import React, { Component } from "react";
import { Pressable, Text } from "react-native";
import { TextInput, View } from "react-native-web";
import {db, auth } from "../firebase/config";

class Register extends Component{
        constructor(props){
            super(props);
            this.state={
                nombre:'',
                email:'',
                contraseña:''
            }
        }
            
         
        onSubmit(email, password) {
               
                if (!email.includes("@")) {
                this.setState({ error: "Email incompleto" });
                return;
                }

                if (password.length < 6) {
                this.setState({ error: "minimo 6 caracteres" });
                return;
                }

                auth.createUserWithEmailAndPassword(email, password)
                .then(() => {
                    console.log("Usuario registrado correctamente");
                     db.collection('users').add({
                        nombre: this.state.nombre,
                        email: this.state.email,
                        createdAt: Date.now()
                        .then()
                        .catch((error) => console.log(error))
            })
                    this.props.navigation.navigate("Login"); 
                })
                .catch((error) => {
                    console.log(error);
                    this.setState({ error: "Fallo en el registro." });
                });

                
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

                <Pressable onPress={() => this.onSubmit(this.state.email, this.state.contraseña)}>
                    <Text>Registrarse</Text>
                </Pressable>
            </View>
        );
    }
}
export default Register;