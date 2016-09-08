/**
 * Created by apple on 16/9/1.
 */
import React, {Component} from 'react';

import Button from 'antd-mobile/lib/button';
import {
    View,
    Text,
    StyleSheet
}from 'react-native';
import { default as config } from './config';

export default class CheckInListAntd extends Component{
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            checkInList: "..."
        };
          console.log(1);
      }

      onPressAsync() {
          console.log(3);
          var list = this;
          console.log(config.queryUrl);
          fetch(config.queryUrl)
              .then((response) => response.json())
              .catch((error) => {
                  console.log(error);
              })
              .then((responseData) => {
                  console.log(responseData);
                  list.setState({checkInList:responseData._OKCOUNT_});
              })
              .done();
      }

    render(){
        console.log(2);
        return (
            <View>
                <Text>
                    Antd控件
                </Text>
                <Button onPress={this.onPressAsync.bind(this)}>同步</Button>
                <Text style={styles.baseText}>
                    {this.state.checkInList}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    baseText: {
        fontFamily: 'Cochin',
        margin: 20,
        textAlign: 'left'
    },
});