import React, { Component } from "react";

class usuarios extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usuarios: ""
        }
    }
    componentDidMount() {
        db.collection('users').onSnapshot(
            docs => {
                let usuarios = [];
                docs.forEach(doc => {
                    usuarios.push({
                        id: doc.id,
                        data: doc.data()
                    })

                    this.setState({ usuarios: usuarios })
                })
            })
    }
    render() {


        return (
           <FileList 
           data={this.state.usuarios}
           KeyExtractor={item => item.id.toString()}
           renderItem={({item}) => <Text>{item.data.email}</Text>}
        />
        )


    }
}
export default usuarios;