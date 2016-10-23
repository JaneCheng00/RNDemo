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
import {connect} from 'react-redux';
import {doLogin} from '../actions/Login'

var screenWidth = Dimensions.get('window').width;
var screenHight = Dimensions.get('window').height;

class Login extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        // 登录完成，且成功登录
        if (nextProps.status === 'done' && nextProps.isSuccess) {
            this.props.navigator.push(
                {
                    id:'main',
                    name:"主页",
                    component: Main,
                    passProps: {
                        user: nextProps.user
                    },
                });
            return false;
        }
        return true;
    }

    onCheck(){
        this.props.navigator.push(
            {
                id:'main',
                name:"主页",
                component: Main,
            });
    }

    // 执行登录
    handleLogin()
    {
        this.props.dispatch(doLogin());
    }

    render() {
        let tips;
        if (this.props.status === 'init')
        {
            tips = '请点击登录';
        }
        else if (this.props.status === 'doing')
        {
            tips = '正在登录...';
        }
        else if (this.props.status === 'done' && !this.props.isSuccess)
        {
            tips = '登录失败, 请重新登录';
        }

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
                                        onPress={this.handleLogin.bind(this)}
                    >
                        <Text style={styles.logintext}>登 录 | login</Text>
                    </TouchableHighlight>
                    <View style={styles.emptyview}></View>
                </View>
            </Image>
        );
    }
}

function select(store)
{
    return {
        status: store.loginIn.status,
        isSuccess: store.loginIn.isSuccess,
        user: store.loginIn.user
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

export default connect(select)(Login);
