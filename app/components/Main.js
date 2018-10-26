import React from "react";
<<<<<<< HEAD
import { StyleSheet, Platform, Image, Text, View, StatusBar, ListView,  } from "react-native";
import fire from "../config/config";
import {Container, Content, Header, Form, Input, Item,Label, Button, Icon, List, ListItem} from 'native-base';
import { database } from "firebase";
=======
import { StyleSheet, Platform, Image, Text, View, Button, } from "react-native";
import fire from "../config/config";
import { Container, Content, Header, Form, Input, Item, Label } from 'native-base';
>>>>>>> e402d2e660319cdda769d84ad9a9d74bc6c14dc2

var data = ["johan", "johanna"]
export default class Main extends React.Component {
    state = { currentUser: null };

    constructor(props){
        super(props);

        this.ds = new ListView.DataSource({rowHasChanged: (r1,r2) => r1 !==r2 })

        this.state = {
            ListViewData:data,
            newContact:""
        }
    }

    componentDidMount() {
             
        const { currentUser } = fire.auth();
        this.setState({ currentUser });
    }

    render() {
        const { currentUser } = this.state;

        return (
<<<<<<< HEAD
            <Container>
            <Header style={{marginTop:StatusBar.currentHeight }}>
                <Content>
                    <Item>
                        
                        
                         {/* <Text>Hi {currentUser && currentUser.email}!</Text>
                         <Button onPress={() => fire.auth().signOut()} title="Logga ut" /> */}
                        <Input
                        placeholder="Lägg till"
                        />
                        <Button>
                            <Icon name="add"></Icon>
                        </Button>
                    </Item>
                </Content>
                </Header> 
                <Content>
                    
                  <List
                  DataSource={this.cloneWithRows(this.state.ListViewData)}
                  renderRow ={data =>
                 
                    <ListItem>
                        <Text>
                            {data}
                        </Text>
                    </ListItem>
                  }
                    renderLeftHiddenRow={data =>
                    <Button>
                        <Icon />
                    </Button>
                    }

                    renderRightHiddenRow={data =>
                        <Button>
                        <Icon />
                        </Button>
                    }

                    leftOpenValue={-75}
                    rightOpenValue={-75}
                    />
                  
                </Content>
           </Container>
       );
=======
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
>>>>>>> e402d2e660319cdda769d84ad9a9d74bc6c14dc2
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});
