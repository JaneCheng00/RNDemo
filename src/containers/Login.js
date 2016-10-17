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
                  <Image style={styles.logoView} source={require('../resources/app_name.png')}/>
                  <TouchableHighlight
                      underlayColor='#4169e1'
                      activeOpacity={0.5}
                      style={styles.style_view_button}
                  >
                      <Text style={{fontSize:16,color:'#fff'}}>登录 | login</Text>
                  </TouchableHighlight>

              </Image>
          );
      }
}

const styles = StyleSheet.create({
    loginContainer: {
        flexDirection:'column',
        width:screenWidth,
        height:screenHight,
    },

    logoView: {
        marginTop:35,
        alignSelf:'flex-start',
        justifyContent:'center',
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
        marginLeft:10,
        marginRight:10,
        backgroundColor:'#63B8FF',
        borderColor:'#5bc0de',
        height:45,
        width:screenWidth - 10,
        borderRadius:5,
        justifyContent: 'center',
        alignItems:'center',
        alignSelf:'center',
    },
    titleText: {
        fontSize: 20,
        color:'#FF4040',
        fontWeight: 'bold',
    },


});
