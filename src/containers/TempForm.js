/**
 * Created by apple on 16/10/17.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
} from 'react-native';

var screenWidth = Dimensions.get('window').width;
var screenHight = Dimensions.get('window').height;

export default class TempForm extends Component {
    render() {
        return (
            <View>
                <Text style={styles.baseText}>
                    临时填报页
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
        justifyContent: 'center',
        alignItems: 'center',
        color:'black',
    },
})