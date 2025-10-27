import React, { Component } from "react";
import { Text } from "react-native";
import { FlatList } from "react-native-web";

class Home extends Component {
    constructor(props) {
        super(props);  
        this.state = {
            traido: []
        }
    }
    componentDidMount() {
        db.collection('posts').onSnapshot(
            docs => {
                let posts = [];
                docs.forEach(doc => {
                    posts.push({
                        id: doc.id,
                        data: doc.data()
                    })
                this.setState({ traido: posts })})}
                   
                )
    }
    render() {
        return (
            <FlatList  data={this.traido}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => <Text>{item.data.texto}</Text>}
            />
        );
    }}

export default Home;
