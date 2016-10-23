/**
 * Created by apple on 16/10/17.
 */
import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
} from 'react-native';

var screenWidth = Dimensions.get('window').width;
var screenHight = Dimensions.get('window').height;

export default class JcbForm extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.baseText}>
                    场站模板填报页
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width:screenWidth,
        height:screenHight,
    },
    baseText: {
        fontFamily: 'Cochin',
        margin: 20,
        textAlign: 'left'
    },
})