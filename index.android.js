/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator
} from 'react-native';
import  Login from './src/containers/Login';
import Main from './src/containers/Main';
import CheckInList from './src/containers/CheckInList';

class RNDemo extends Component {

    _renderScene(route, navigator) {
        console.log(route.id);
        switch (route.id) {
            case 'login':
                return (<Login navigator={navigator}
                               onBack={() => {
                                   if (route.index > 0) {
                                       navigator.pop();
                                   }
                               }}/>);
            case 'main':
                return (<Main navigator={navigator}
                              onBack={() => {
                                  if (route.index > 0) {
                                      navigator.pop();
                                  }
                              }}/>);
            case 'checkList':
                return (<CheckInList navigator={navigator}
                                     onBack={() => {
                                         if (route.index > 0) {
                                             navigator.pop();
                                         }
                                     }}/>);
            default:
                return (<Text>默认页面</Text>);
                break
        }
    }

  render() {
      console.log("android 版本");

    return (
        <Navigator
            style={styles.container}
            initialRoute={{name: '登录页面', index: 0, id: 'login'}}
            renderScene={this._renderScene}
        />
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
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
});

AppRegistry.registerComponent('RNDemo', () => RNDemo);
