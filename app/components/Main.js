import React from "react";
import { StyleSheet, Platform, Image, Text, View, StatusBar, ListView,  } from "react-native";
import fire from "../config/config";
import {Container, Content, Header, Form, Input, Item,Label, Button, Icon, List, ListItem} from 'native-base';
import { database } from "firebase";

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
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});
