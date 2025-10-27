import React, { Component } from "react";
import { Pressable, Text, StyleSheet } from "react-native";
import { View } from "react-native-web";
import { TextInput } from "react-native-web";
import { auth } from "../firebase/config";

class Login extends Component (props) {
    
        constructor(props){
            super(props);
            this.state={
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
                this.setState({ error: "minimo 6" });
                return;
                }
                auth.signInWithEmailAndPassword(email, password)
                .then(() => {
                    console.log("Login exitoso");
                    this.props.navigation.navigate("HomeMenu"); 
                })
                .catch((error) => {
                    console.log(error);
                    this.setState({ error: "Credenciales incorrectas" })
                }
        );
            }


        render(){
            return (
            <View style={styles.general}>
                <div style={styles.div}>
                    <Pressable onPress={() => this.props.navigation.navigate('Register')} style={styles.boton_registro}>
                        <Text>No tengo cuenta</Text>
                    </Pressable>

                    
                    <Pressable onPress={() => this.props.navigation.navigate('HomeMenu')} style={styles.boton_login}>
                        <Text>Ir a log in</Text>
                    </Pressable>
                </div>
                                <Text>ingresar</Text>
                
                                <TextInput placeholder="Ingrese su email"
                                keyboardType="email"
                                onChangeText={text=>this.setState({email:text})}
                                value={this.state.email}/>
                
                                <TextInput placeholder="Ingrese su contraseña"
                                keyboardType="default"
                                onChangeText={text=>this.setState({contraseña:text})}
                                value={this.state.contraseña}/>
                
                                <Pressable onSubmit={() => this.state.onSubmit(this.state.email, this.state.contraseña)}>
                                    <Text>ingresar</Text>
                                </Pressable>
            </View>
            )}}

const styles =  StyleSheet.create({
    general:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    div:{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: `lightgrey`,
        borderRadius: 10,
        padding: 50,
        marginTop: 170,
        borderColor: `black`,
    },
    boton_registro:{
        backgroundColor: `lightblue`,
        padding: 10,
        marginBottom: 10,
        borderRadius: 7,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',

    },
    boton_login:{
        backgroundColor: `lightgreen`,
        padding: 10,
        borderRadius: 4,
         display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default Login;