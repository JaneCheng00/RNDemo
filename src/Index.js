/**
 * Created by apple on 16/9/1.
 */
import React, {Component} from 'react';
import {
    View,
    Navigator,
} from 'react-native';
import CheckInList from './CheckInList';
import CheckInListAntd from './CheckInListAntd';

export default class Index extends Component {
    render() {
        return (
            <View>
                <CheckInList/>
                <CheckInListAntd/>
            </View>
        );
    }
}