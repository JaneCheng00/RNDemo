/**
 * Created by apple on 16/9/1.
 */
import React, {Component} from 'react';
import {
    View,
    Navigator,
    StyleSheet,
} from 'react-native';
import LoginDemo from './containers/LoginDemo';
import  Login from './containers/Login';
import Main from './containers/Main';
import CheckInList from './containers/CheckInListIOS';

var _navigator;
var NavigationBarRouteMapper = {
    // 左键
    LeftButton(route, navigator, index, navState) {
        if (index > 0) {
            return (
                <View>
                    <TouchableOpacity
                        underlayColor='transparent'
                        onPress={() => {if (index > 0) {navigator.pop()}}}>
                        <Text>
                            后退
                        </Text>
                    </TouchableOpacity>
                </View>
            );
        } else {
            return null;
        }
    },
    // 右键
    RightButton(route, navigator, index, navState) {
        if (route.onPress)
            return (
                <View>
                    <TouchableOpacity
                        onPress={() => route.onPress()}>
                        <Text>
                            {'右键'}
                        </Text>
                    </TouchableOpacity>
                </View>
            );
    },
    // 标题
    Title(route, navigator, index, navState) {
        return (
            <Image source={require('./resources/toolbar_bg.png')}/>
        );
    }
};

export default class Index extends Component {
    routeMapper(route, navigationOperations, onComponentRef) {
        console.log("android");
        _navigator = navigationOperations;
        if (route.id === 'login') {
            return (
                <View style={styles.container}>
                    <LoginDemo navigator={navigationOperations}/>
                </View>
            );
        } else if (route.id === 'main') {
            return (
                <View style={styles.container}>
                    <Main
                        navigator={navigationOperations} />
                </View>
            );
        } else if (route.id === 'checkList') {
            return (
                <View style={styles.container}>
                    <CheckInList
                        navigator={navigationOperations}
                    />
                </View>
            );
        }
    }



    render() {
        var initialRoute = {id: 'login'};
        var index = this;
        return (
            <Navigator
                style={styles.container}
                initialRoute={initialRoute}
                renderScene={index.routeMapper}
            >
                <Navigator.NavigationBar
                    routeMapper={NavigationBarRouteMapper}/>}
                />
            </Navigator>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#F5FCFF',
    },
});