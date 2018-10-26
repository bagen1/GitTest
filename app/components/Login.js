import React from "react";
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    Button,
    ActivityIndicator,
    TouchableOpacity, Platform,
} from "react-native";
import fire from "../config/config";
import { Input } from "native-base";

export default class Login extends React.Component {
    state = { email: "", password: "", errorMessage: null, login: false };

    handleLogin = () => {
        const { email, password } = this.state;
        this.setState({ login: true });
        fire
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => this.props.navigation.navigate("Main"))
            .catch(loginerror => {
                let errorMessage = "";
                switch (loginerror.code) {
                    case "auth/user-not-found":
                        errorMessage = "Email finns inte";
                        break;
                    case "auth/wrong-password":
                        errorMessage = "Fel lösenord";
                        break;
                    case "auth/invalid-email":
                        errorMessage = "Ogiltig email";
                        break;
                    default:
                        errorMessage = "Någonting gick fel, försök igen";
                        break;
                }
                this.setState({ login: false, errorMessage: errorMessage });
            });
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>Logga in</Text>
                {this.state.errorMessage && (
                    <Text style={{ color: "red" }}>{this.state.errorMessage}</Text>
                )}
                <TextInput
                    style={styles.textinput}
                    placeholder="Email"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    returnKeyType={"next"}
                    onSubmitEditing={() => { this.Lösenord.focus(); }}
                    onChangeText={email => this.setState({ email })}
                    value={this.state.email}
                />
                <TextInput
                    ref={(Input) => { this.Lösenord = Input; }}
                    secureTextEntry
                    style={styles.textinput}
                    autoCapitalize="none"
                    placeholder="Lösenord"
                    returnKeyType="send"
                    onSubmitEditing={this.handleLogin}
                    onChangeText={password => this.setState({ password })}
                    value={this.state.password}
                />
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate("forgotPassword")}
                    style={styles.button}
                >
                    <Text>Glömt lösenord?</Text>
                </TouchableOpacity>

                {!this.state.login ? (
                    <Button title="Logga in" onPress={this.handleLogin} />
                ) : (
                        <ActivityIndicator />
                    )}
                <Button
                    title="Inget konto? Registrera"
                    onPress={() => this.props.navigation.navigate("SignUp")}
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
        borderBottomColor: Platform.OS === 'ios' ? "#19dbd4" : "rgba(0,0,0,0)",
        borderBottomWidth: 2
    },
    button: {
        alignSelf: "flex-start",
        marginBottom: 10,
        marginLeft: 32
    }
});
