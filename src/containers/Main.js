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
import CheckInList from './CheckInListIOS';
import TempForm from './TempForm';

var screenWidth = Dimensions.get('window').width;
var screenHight = Dimensions.get('window').height;

var _navigator;
export default class Main extends Component {
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
      }

      onAdd() {
          _navigator.push(
              {
                  id:'tempTask',
                  name:'临时任务',
                  component: TempForm,
                  title:'临时任务',
              });
      }

      onCheck(){
          _navigator = this.props.navigator;
          _navigator.push(
              {
                  id:'checkList',
                  name:'检查管理',
                  component: CheckInList,
                  title:'检查管理',
                  rightText: '新增',
                  onPress: this.onAdd,
              });
      }

    render(){
        var main = this;
        return (
            <Image style={styles.container} source={require('../resources/menu_bg.png')}>
                <Image source={require('../resources/toolbar_bg.png')}/>
                <View style={styles.tableContainer}>
                    <View style={[styles.tableContainer,styles.row]}>
                        <View style={styles.itemview}>
                            <Image source={require('../resources/ic_menu_jcgl.png')}>

                                <TouchableHighlight activeOpacity={0.5}
                                                    onPress={this.onCheck.bind(this)}
                                >
                                    <Text style={styles.menuText} ></Text>
                                </TouchableHighlight>
                            </Image>
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
                    <View style={[styles.tableContainer,styles.row]}>
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
                    <View style={[styles.tableContainer,styles.row]}>
                        <View style={styles.itemview}>
                            <Image source={require('../resources/ic_menu_yxdx.png')}/>
                            <Text style={styles.lableText}>语音短信</Text>
                        </View>
                        <View style={styles.itemview}>
                            <Image source={require('../resources/ic_menu_dbsj.png')}/>
                            <Text style={styles.lableText}>待办事项</Text>
                        </View>
                        <View style={styles.itemview}>
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
        height:150,
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
    menuText: {
        flex:1,
        fontFamily:'Cochin',
        padding:5,
        width:40,
        height:70,
        alignSelf:'center',
        justifyContent: 'center',
    },
    separator: {
        height: 1,
        backgroundColor: '#CCCCCC',
    },
})