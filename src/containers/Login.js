/**
 * Created by apple on 16/10/9.
 */
'use strict';
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View,
    TextInput,
    Dimensions,
    TouchableHighlight,
} from 'react-native';
import Main from './Main';

var screenWidth = Dimensions.get('window').width;
var screenHight = Dimensions.get('window').height;

export default class Login extends Component {
    onCheck(){
        this.props.navigator.push(
            {
                id:'main',
                name:"主页",
                component: Main,
            });
    }

    render() {
        return (
            <Image source={require('../resources/login_bg.png')} style={styles.container}>
                <View style={styles.header}>

                </View>
                <View style={styles.avatarview}>
                    <Image source={require('../resources/app_name.png')} style={styles.avatarimage}/>
                </View>
                <View style={styles.inputview}>
                    <TextInput underlineColorAndroid='transparent' style={styles.textinput} placeholder='请输入帐号'/>
                    <TextInput underlineColorAndroid='transparent' style={styles.textinput} placeholder='请输入密码' secureTextEntry={true}/>
                </View>
                <View style={styles.bottomview}>
                    <TouchableHighlight style={styles.buttonview}
                                        activeOpacity={0.5}
                                        onPress={this.onCheck.bind(this)}
                    >
                        <Text style={styles.logintext}>登 录 | login</Text>
                    </TouchableHighlight>
                    <View style={styles.emptyview}></View>
                    {/*<View style={styles.bottombtnsview}>
                        <View style={styles.bottomleftbtnview}>
                            <Text style={styles.bottombtn}>无法登录？</Text>
                        </View>
                        <View style={styles.bottomrightbtnview}>
                            <Text style={styles.bottombtn}>新用户</Text>
                        </View>
                    </View>*/}
                </View>
            </Image>
        );
    }
}

const styles = {
    container: {
        flex: 1,
        width:screenWidth,
        height:screenHight,
    },
    header: {
        height: 20,
        justifyContent: 'center',
    },
    avatarview: {
        height: 150,
        justifyContent: 'center',
    },
    avatarimage: {
        alignSelf: 'center'
    },
    inputview: {
        height: 150,
        justifyContent: 'center',
    },
    textinput: {
        flex: 1,
        marginLeft:150,
        fontSize: 16,

    },
    dividerview: {
        flexDirection: 'row',
    },
    divider: {
        flex: 1,
        height: 1,

    },
    bottomview: {
        flex: 1,
    },
    buttonview: {
        backgroundColor: '#F4B72E',
        margin: 20,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logintext: {
        fontSize: 17,
        color: '#FFFFFF',
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 10,
    },
    emptyview: {
        flex: 1,
    },
    bottombtnsview: {
        flexDirection: 'row',
    },
    bottomleftbtnview: {
        flex: 1,
        height: 50,
        paddingLeft: 10,
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    bottomrightbtnview: {
        flex: 1,
        height: 50,
        paddingRight: 10,
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    bottombtn: {
        fontSize: 15,
        color: '#1DBAF1',
    }
};
