import React from "react";
import { StyleSheet, Platform, Image, Text,  StatusBar, ListView, View, TouchableOpacity, } from "react-native";
import fire from "../config/config";
import { Container, Content, Header, Form, Input, Item, Label, Button, Icon, List, ListItem, } from 'native-base';


var data = []
export default class Create extends React.Component {
    state = { currentUser: null };

    constructor(props) {
        super(props);
        this.searchInput = React.createRef();
        this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })

        this.state = {
            listViewData: data,
            newKategori: "",
        }
    }

    componentDidMount() {
             
            var that = this
            fire.database().ref('/kategori').on('child_added',function(data){
                var newData = [...that.state.listViewData]
                newData.push(data)
                that.setState({listViewData:newData})
            })
    }

    addRow(data){
        var key =fire.database().ref('/kategori').push().key
        fire.database().ref('/kategori').child(key).set({name:data})
    
    }

    addRow(data) {
        var key = fire.database().ref('/kategori').push().key
        fire.database().ref('/kategori').child(key).set({ name: data })

    }
    async deleteRow(secId, rowId, rowMap, data) {
        await fire.database().ref('kategori/' + data.key).set(null)

    }

    render() {
      const {currentUser} = this.state;
      
        return (
            <Container>
                
            <Header style={{marginTop:StatusBar.currentHeight }}>
                <Content>
                    <Item>
                        
                        
                         {/* <Text>Hi {currentUser && currentUser.email}!</Text>
                         <Button onPress={() => fire.auth().signOut()} title="Logga ut" /> */}
                        <Input style={styles.Input}
                        onChangeText = {(newKategori) => this.setState({newKategori}) }
                        placeholder="Lägg till"
                        placeholderTextColor="#000"
                        ref={this.searchInput}
                        
                      
                            />
                        <TouchableOpacity  onPress={() => this.addRow (this.state.newKategori) && this.searchInput.current._root.clear()}> 
                            <Icon name="add" style={styles.icon}></Icon>

                        </TouchableOpacity>
                       
                    </Item>
                </Content>
                </Header> 
                <Content >
                    <View>
                  <List 
                  enableEmptySections
                  dataSource={this.ds.cloneWithRows(this.state.listViewData)}
                  renderRow ={data =>
                 
                    <ListItem>
                        <Text style={styles.Text} >
                            {data.val().name}
                        </Text>
                    </ListItem>
                  }
                    // renderLeftHiddenRow={data =>
                    // <Button full onPress={()=> this.addRow(data)}>
                    //     <Icon name="edit" />
                    // </Button>
                    // }

                    renderRightHiddenRow={(data,secId,rowId,rowMap) =>
                        <Button  danger onPress={()=> this.deleteRow(secId, rowId,rowMap,data)}>
                        <Icon name="trash" />
                        </Button>
                    }

                    rightOpenValue={-50}
                    
                    />
                  </View>
                </Content>
             
           </Container>
           
       );
    }
}
const styles = StyleSheet.create({
    container: {




    },
    Text: {
        marginLeft: 10,
        fontSize: 18,
    },

    icon: {
        width: 25,
        height: 25,

    },

    Input: {

    }


});















