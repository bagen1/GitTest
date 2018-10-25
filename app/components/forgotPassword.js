import React from "react";
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    Button,
    ActivityIndicator
} from "react-native";
import fire from "../config/config";

export default class forgotPassword extends React.Component {
    state = { email: "", errorMessage: null, loading: false };

    forgotPassword = () => {
        const { email } = this.state;
        this.setState({ loading: true });
        fire
            .auth()
            .sendPasswordResetEmail(email)
            .then(() => this.props.navigation.navigate("Login"))
            .catch(error => {
                let errorMessage = "";
                switch (error.code) {
                    case "auth/user-not-found":
                        errorMessage = "Email finns inte";
                        break;
                    case "auth/invalid-email":
                        errorMessage = "Ogiltig email";
                        break;
                    default:
                        errorMessage = "Någonting gick fel, försök igen";
                        break;
                }
                this.setState({ loading: false, errorMessage: errorMessage })
            });
    };
    render() {
        return (
            <View style={styles.container}>
                <Text>Glömt lösenord</Text>
                {this.state.errorMessage && (
                    <Text style={{ color: "red" }}>{this.state.errorMessage}</Text>
                )}
                <TextInput
                    style={styles.textinput}
                    placeholder="Email"
                    keyboardType="email-address"
                    returnKeyType="send"
                    onSubmitEditing={this.forgotPassword}
                    autoCapitalize="none"
                    onChangeText={email => this.setState({ email })}
                    value={this.state.email}
                />
                {!this.state.loading ? (
                    <Button title="Skicka" onPress={this.forgotPassword} />
                ) : (<ActivityIndicator />)}
                <Button
                    title="Tillbaka" onPress={() => this.props.navigation.navigate("Login")}
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    textinput: {
        width: "80%",
        alignItems: "center",
        padding: 16,
        marginBottom: 20,
        backgroundColor: "#fff",
        borderBottomColor: "#19dbd4",
        borderBottomWidth: 2
    }
});
