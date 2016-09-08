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
import SQLiteDemo2 from './SQLiteDemo2';

export default class Index extends Component {
    render() {
        return (
            <View style={styles.container}>
                <SQLiteDemo2/>

            </View>
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