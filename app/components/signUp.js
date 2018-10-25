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

export default class SignUp extends React.Component {
    state = { email: "", password: "", errorMessage: null, signingUp: false };

    handleSignUp = () => {
        this.setState({ signingUp: true });
        fire
            .auth()
            .createUserWithEmailAndPassword(this.state.email, this.state.password)
            .catch(signuperror => {
                let errorMessage = "";
                switch (signuperror.code) {
                    case "auth/invalid-email":
                        errorMessage = "Ogiltig email";
                        break;
                    case "auth/weak-password":
                        errorMessage = "Svagt lösenord";
                        break;
                    case "auth/email-already-in-use":
                        errorMessage = "Email finns redan registrerad";
                        break;
                    default:
                        errorMessage = "Någonting gick fel";
                        break;
                }
                this.setState({ signingUp: false, errorMessage: errorMessage });
            });
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>Registrera</Text>

                <Text style={{ color: "red" }}>{this.state.errorMessage}</Text>

                <TextInput
                    placeholder="Email"
                    autoCapitalize="none"
                    keyboardType="email-address"
                    style={styles.textinput}
                    onChangeText={email => this.setState({ email })}
                    value={this.state.email}
                />
                <TextInput
                    secureTextEntry
                    placeholder="Lösenord"
                    autoCapitalize="none"
                    returnKeyType="send"
                    onSubmitEditing={this.handleSignUp}
                    style={styles.textinput}
                    onChangeText={password => this.setState({ password })}
                    value={this.state.password}
                />
                {!this.state.signingUp ? (
                    <Button title="Registrera" onPress={this.handleSignUp} />
                ) : (
                        <ActivityIndicator />
                    )}
                <Button
                    title="Har konto? Logga in"
                    onPress={() => this.props.navigation.navigate("Login")}
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
