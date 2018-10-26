import React from "react";
import { StyleSheet, Platform, Image, Text, View, Button, } from "react-native";
import fire from "../config/config";
import { Container, Content, Header, Form, Input, Item, Label } from 'native-base';

export default class Main extends React.Component {
    state = { currentUser: null };

    componentDidMount() {
        const { currentUser } = fire.auth();
        this.setState({ currentUser });
    }

    render() {
        const { currentUser } = this.state;

        return (
            <View style={styles.container}>
                <Header>
                    <Content>
                        <Item>

                            <Input>
                                <Text>Hi {currentUser && currentUser.email}!</Text>
                                <Button onPress={() => fire.auth().signOut()} title="Logga ut" />
                            </Input>
                        </Item>
                    </Content>
                </Header>
            </View>
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
