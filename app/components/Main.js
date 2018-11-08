import React from "react";
<<<<<<< HEAD
import { StyleSheet, Platform, Image, Text,  StatusBar, ListView, View, TouchableOpacity, } from "react-native";
import fire from "../config/config";
import { Container, Content, Header, Form, Input, Item, Label, Button, Icon, List, ListItem, } from 'native-base';
=======
import { StyleSheet, Platform, Image, Text, View, StatusBar, ListView, } from "react-native";
import fire from "../config/config";
import { Container, Content, Header, Form, Input, Item, Label, Button, Icon, List, ListItem } from 'native-base';
>>>>>>> 4da7181eb393d09ed1c99bab0dff88cef4b4f2ab


var data = []
export default class Create extends React.Component {
    state = { currentUser: null };
       
    constructor(props) {
        super(props);

        this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })

        this.state = {
<<<<<<< HEAD
            listViewData: data,
            newContact:""
=======

            listViewData: data,
            newContact: ""

>>>>>>> 4da7181eb393d09ed1c99bab0dff88cef4b4f2ab
        }
    }

    componentDidMount() {
<<<<<<< HEAD
             
            var that = this
            fire.database().ref('/contacts').on('child_added',function(data){
                var newData = [...that.state.listViewData]
                newData.push(data)
                that.setState({listViewData:newData})
            })
    }

    addRow(data){
        var key =fire.database().ref('/contacts').push().key
        fire.database().ref('/contacts').child(key).set({name:data})
    
=======
        var that = this
        fire.database().ref('/contacts').on('child_added', function (data) {
            var newData = [...that.state.listViewData]
            newData.push(data)
            that.setState({ listViewData: newData })
        })
>>>>>>> 4da7181eb393d09ed1c99bab0dff88cef4b4f2ab
    }

    addRow(data) {
        var key = fire.database().ref('/contacts').push().key
        fire.database().ref('/contacts').child(key).set({ name: data })

    }
    async deleteRow(secId, rowId, rowMap, data) {
        await fire.database().ref('contacts/' + data.key).set(null)

<<<<<<< HEAD
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
                        onChangeText = {(newContact) => this.setState({newContact}) }
                        placeholder="Lägg till"
                        placeholderTextColor="#000"
                            />
                        <TouchableOpacity  onPress={() => this.addRow (this.state.newContact)} > 
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
=======
        rowMap[`${secId}${rowId}`].props.closeRow();
        var newData = [...this.state.listViewData];
        newData.splice(rowId, 1)
        this.setState({ listViewData: newData });
    }
    showInformation() {

    }

    render() {

        return (

            <Container>
                <Header style={{ marginTop: StatusBar.currentHeight }}>
                    <Content>
                        <Item>
                            {/* <Text>Hi {currentUser && currentUser.email}!</Text>
                         <Button onPress={() => fire.auth().signOut()} title="Logga ut" /> */}
                            <Input
                                onChangeText={(newContact) => this.setState({ newContact })}
                                placeholder="Lägg till"
                            />
                            <Button onPress={() => this.addRow(this.state.newContact)}>
                                <Icon name="add"></Icon>
                            </Button>
                        </Item>
                    </Content>
                </Header>
                <Content>

                    <List
                        enableEmptySections
                        dataSource={this.ds.cloneWithRows(this.state.listViewData)}
                        renderRow={data =>

                            <ListItem>
                                <Text>
                                    {data.val().name}
                                </Text>
                            </ListItem>
                        }
                        renderLeftHiddenRow={data =>
                            <Button full onPress={() => this.addRow(data)}>
                                <Icon name="vafinnsdetföricon" />
                            </Button>
                        }

                        renderRightHiddenRow={(data, secId, rowId, rowMap) =>
                            <Button full danger onPress={() => this.deleteRow(secId, rowId, rowMap, data)}>
                                <Icon name="trash" />
                            </Button>
                        }

                        leftOpenValue={-75}
                        rightOpenValue={-75}
                    />

                </Content>
            </Container>
        );

>>>>>>> 4da7181eb393d09ed1c99bab0dff88cef4b4f2ab
    }
}
const styles = StyleSheet.create({
    container: {
        
       
        
        
    },
    Text:{
        marginLeft:10,
        fontSize:18,
    },
    
    icon:{
        width:25,
        height:25,
        
    },

    Input:{
                       
    }
    

});















