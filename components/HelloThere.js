import React,{ Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';


export default class HelloThere extends Component{
    state = {isShowingText: true};

    componentDidMount(){
        setInterval(() => (
           this.setState(
               {isShowingText: !this.state.isShowingText}
           )
        ),500);
    }

    render(){
        if(!this.state.isShowingText){
            return null;
        }
        return (
            <>
            <View style={{flex: 1, justifyContent:"center",alignItems:"center"}}>
            <Text style={{fontSize:24}}>Hello There {this.props.name}</Text>
            </View>
            </>
        )
    }
};