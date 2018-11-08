import React from "react";
import { StyleSheet, Platform, Image, Text, View, StatusBar, ListView, } from "react-native";
import fire from "../config/config";
import { Container, Content, Header, Form, Input, Item, Label, Button, Icon, List, ListItem } from 'native-base';


var data = []
export default class Main extends React.Component {
    state = { currentUser: null };

    constructor(props) {
        super(props);

        this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })

        this.state = {

            listViewData: data,
            newContact: ""

        }
    }

    componentDidMount() {
        var that = this
        fire.database().ref('/contacts').on('child_added', function (data) {
            var newData = [...that.state.listViewData]
            newData.push(data)
            that.setState({ listViewData: newData })
        })
    }

    addRow(data) {
        var key = fire.database().ref('/contacts').push().key
        fire.database().ref('/contacts').child(key).set({ name: data })

    }
    async deleteRow(secId, rowId, rowMap, data) {
        await fire.database().ref('contacts/' + data.key).set(null)

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

    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});
