import React from "react";
import { StyleSheet, Platform, Image, Text, View } from "react-native";
import { createSwitchNavigator } from "react-navigation";
// import the different screens
import Loading from "./app/components/Loading";
import SignUp from "./app/components/signUp";
import Login from "./app/components/Login";
import forgotPassword from "./app/components/forgotPassword";
import Main from "./app/components/Main";
// create our app's navigation stack
const App = createSwitchNavigator(
  {
    Loading,
    SignUp,
    Login,
    forgotPassword,
    Main
  },
  {
    initialRouteName: "Loading"
  }
);
export default App;
