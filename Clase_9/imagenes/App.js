import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Probando imagenes</Text>

      <Image style={styles.img}
        source={require('./assets/zonaMedia.jpeg')}
        resizeMode='contain'
      />
      
      <Image style={styles.img}
        source={{uri:"https://www.infobae.com/resizer/v2/CDTA65FYWMDLJV6AHKPIIPNOHU.jpg?auth=6c9f6791e78e189e11a8ff0474b608b95906885697189234ddcdee212e19f2bd&smart=true&width=992&height=661&quality=85"}}
        resizeMode='contain'/>
    </View>
  );
}

const styles = StyleSheet.create({
  texto: {
    fontWeight: 'bold',
    fontSize: 30,
  },
  img:{
    height:400
  }
});
