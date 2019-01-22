import React, {Component, PropTypes} from 'react';
import {
    AppRegistry,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    Text,
    View,
    Dimensions
} from 'react-native';

export default class inputDialog extends Component {

    constructor(props) {
        super(props)
        this.state = {
            show: this.props.show || false,
            text:''
        }
        this.renderChild = this.renderChild.bind(this)
        this.show = this.show.bind(this)
    }

    renderChild() {
        if (!this.props.children) { return null }
        return (
            <View style={styles.textInputView}>
                {
                    this.props.children
                }
            </View>
        )
    }

    render() {
        if (!this.state.show) { return null }
        const { onChanged } = this.props;
        const { text } = this.state;
        return (
            <TouchableOpacity style={styles.container} onPress={this.onHide.bind(this)}>
                <View style={styles.windowView}>
                    <View style={styles.titleView}>
                        <Text style={styles.titleStyle}>其他检验特性原因与具体描述：</Text>
                    </View>
                    {this.renderChild()}
                </View>
            </TouchableOpacity>
        );
    }

    show(){
        this.setState({show:true})
    }
    onSubmitEditing(){
        this.setState({show:false})
    }
    onHide(){
        this.setState({show:false})
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        position: 'absolute',
        backgroundColor: '#00000090',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    windowView:{
        backgroundColor: '#fff',
        width: (Dimensions.get('window').width * 3) / 4,
    },
    titleView:{
        justifyContent: 'center',
        backgroundColor:'orange',
        height:30,
    },
    titleStyle:{
        marginLeft:10,
        color:'white',
        fontSize:15
    },
    textInputView:{
        margin:10,
    },
});
