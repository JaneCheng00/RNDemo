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
    Image,
    Dimensions,
} from 'react-native';

var screenWidth = Dimensions.get('window').width;
var screenHight = Dimensions.get('window').height;

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
        var main = this;
        return (
            <Image style={styles.container} source={require('../resources/menu_bg.png')}>
                <Image source={require('../resources/toolbar_bg.png')}/>
                <View style={styles.tableContainer}>
                    <View style={[styles.container,styles.row]}>
                        <View style={styles.itemview}>
                            <Image source={require('../resources/ic_menu_jcgl.png')}/>
                        </View>
                        <View style={styles.itemview}>
                            <Image source={require('../resources/ic_menu_dzxc.png')}/>
                        </View>
                        <View style={styles.itemview}>
                            <Image source={require('../resources/ic_menu_clgl.png')}/>
                        </View>
                    </View>
                    <View style={[styles.container,styles.row]}>
                        <View style={styles.itemview}>
                            <Image source={require('../resources/ic_menu_jcgl.png')}/>
                            <Text style={styles.lableText}>检查管理</Text>
                        </View>
                        <View style={styles.itemview}>
                            <Image source={require('../resources/ic_menu_dzxc.png')}/>
                            <Text style={styles.lableText}>电子巡查</Text>
                        </View>
                        <View style={styles.itemview}>
                            <Image source={require('../resources/ic_menu_clgl.png')}/>
                            <Text style={styles.lableText}>车辆管理</Text>
                        </View>
                    </View>
                    <View style={[styles.container,styles.row]}>
                        <View style={styles.itemview}>
                            <Image source={require('../resources/ic_menu_ryaf.png')}/>
                            <Text style={styles.lableText}>人员安防</Text>
                        </View>
                        <View style={styles.itemview}>
                            <Image source={require('../resources/ic_menu_zdgl.png')}/>
                            <Text style={styles.lableText}>制度管理</Text>
                        </View>
                        <View style={styles.itemview}>
                            <Image source={require('../resources/ic_menu_bbxt.png')}/>
                            <Text style={styles.lableText}>报表系统</Text>
                        </View>
                    </View>
                </View>
            </Image>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width:screenWidth,
        height:screenHight,

    },
    tableContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    itemview:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height:210,
    },
    row:{
        flexDirection: 'row',
    },
    toolbar: {
        width:screenWidth,
        alignSelf:'flex-start',
        justifyContent:'center',
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
        color:'#000000',
        padding:5,
    },
    separator: {
        height: 1,
        backgroundColor: '#CCCCCC',
    },
})