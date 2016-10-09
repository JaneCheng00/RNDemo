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
import CheckInList from './containers/CheckInList';

var _navigator;

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
            />

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 2,
        flexDirection: 'column',
        backgroundColor: '#F5FCFF',
    },
});