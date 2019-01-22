import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    Text,
    View
} from 'react-native';

import AlertInput from './inputDialog'

export default class index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputText:'点击'
        }
    }
    render() {
        const { inputText } = this.state;
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this.onPressAction.bind(this)}>
                    <Text style={styles.welcome}>{inputText}</Text>
                </TouchableOpacity>
                <AlertInput
                    ref="alertInput"
                >
                    <TextInput
                        style={styles.textInputStyle}
                        multiline={true}
                        placeholder='请输入内容'
                        placeholderTextColor='#90959d'
                        returnKeyType='next'
                        onChange = {this.doTextInputChanged.bind(this)}
                        value = {inputText === "点击" ? '' : inputText}
                    />
                </AlertInput>
            </View>
        );
    }

    doTextInputChanged(event){
        let text = event.nativeEvent.text
        this.setState({inputText:text})
    }

    onPressAction(){
        this.refs.alertInput.show()
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    textInputStyle:{
        height:80,
        fontSize:16,
    }
});