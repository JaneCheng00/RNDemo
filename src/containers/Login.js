/**
 * Created by apple on 16/10/3.
 */
import React, {Component} from 'react';
import {
    TouchableHighlight,
    View,
    Text,
    ListView,
    StyleSheet,
    RecyclerViewBackedScrollView,
    Image,
    Dimensions,
} from 'react-native';

var screenWidth = Dimensions.get('window').width;
var screenHight = Dimensions.get('window').height;


export default class Login extends Component {
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
      }

      onLogin() {
          this.props.navigator.push({
              id: "main",
          })
      }

      render(){

          return (
              <Image style={styles.loginContainer} source={require('../resources/login_bg.png')}>
                    <Text style={styles.baseText}>公交安保电子信息巡查</Text>


              </Image>
          );
      }
}

const styles = StyleSheet.create({
    loginContainer: {
        alignItems: 'center',
        width:screenWidth,
        height:screenHight,
    },

    logoView: {
        flexDirection:'row',
        marginTop:20,
        alignItems:'flex-start',
    },

    baseText: {
        alignItems:'flex-start',
        fontFamily: 'Cochin',
        marginTop: 60,
        textAlign: 'left',
        backgroundColor: '#000000',
        color: '#ffffff'
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


});
