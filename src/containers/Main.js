/**
 * Created by apple on 16/10/4.
 */
import React, {Component} from 'react';
import {
    TouchableHighlight,
    View,
    Text,
    ListView,
    StyleSheet,
    RecyclerViewBackedScrollView,
} from 'react-native';

export default class Main extends Component {
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
      }

      onCheck(){
          this.props.navigator.push(
              {
                  id: "checkList"
              });
      }

    render(){
        return (
            <View>
                <Text style={styles.baseText}>
                    主页
                </Text>
                <TouchableHighlight
                    underlayColor='#4169e1'
                    activeOpacity={0.5}
                    style={styles.style_view_button}
                    onPress={this.onCheck.bind(this)}
                >
                    <Text style={{fontSize:16,color:'#fff'}}>检查管理</Text>
                </TouchableHighlight>
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
    style_view_button:{
        marginTop:15,
        marginLeft:10,
        marginRight:10,
        backgroundColor:'#63B8FF',
        borderColor:'#5bc0de',
        height:45,
        borderRadius:5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleText: {
        fontSize: 20,
        color:'#FF4040',
        fontWeight: 'bold',
    },
    listItem: {
        marginLeft: 10,
        marginTop: 15,
        marginBottom: 15,
        flex:1,
    },
    lableText: {
        flex:1,
        fontFamily:'Cochin',
        color:'#FFFFFF',
        backgroundColor:'red',
        padding:5,
    },
    separator: {
        height: 1,
        backgroundColor: '#CCCCCC',
    },
})