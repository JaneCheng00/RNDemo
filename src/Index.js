/**
 * Created by apple on 16/9/1.
 */
import React, {Component} from 'react';
import {
    View,
    Navigator,
    StyleSheet,
} from 'react-native';
import CheckInList from './CheckInList';
import CheckInListAntd from './CheckInListAntd';

export default class Index extends Component {
    render() {
        return (
            <View style={styles.container}>
                <CheckInListAntd/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20,
        backgroundColor: '#F5FCFF',
    },
});