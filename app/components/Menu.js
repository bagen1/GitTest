import React from "react";
import { StyleSheet, Platform, Image, Text, View } from "react-native";
import { DrawerNavigator } from "react-navigation";
import Main from "./Main";

export default class Menu extends React.Component {

    render() {
        return (
            <View></View>
        )
    }
}

const menu = DrawerNavigator({
    Home: {
        screen: Main
    }
})