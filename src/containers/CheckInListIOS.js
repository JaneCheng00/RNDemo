/**
 * Created by apple on 16/9/1.
 */
import React, {Component} from 'react';
import {
    TouchableHighlight,
    View,
    Text,
    ListView,
    StyleSheet,
    RecyclerViewBackedScrollView,
    TabBarIOS,
    Image,
    Dimensions,
} from 'react-native';


const displayName = '公交安保电子信息巡查';
const title = '<TabBarIOS>';
const description = 'Tab-based navigation.';
var screenWidth = Dimensions.get('window').width;
var screenHight = Dimensions.get('window').height;

export default class CheckInList extends Component {
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
          var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
          this.state = {
              selectedTab: 'task',
              notifCount: 0,
              presses: 0,
          };

      }

    _renderContent(color, pageText, num) {
        return (
                <View style={[styles.tabContent, {backgroundColor: color}]}>
                <Text style={styles.tabText}>{pageText}</Text>
                <Text style={styles.tabText}>{num} re-renders of the {pageText}</Text>
                </View>
        );
    }

    render(){
        return (
            <View style={styles.container}>
                <Image source={require('../resources/toolbar_bg.png')}/>
                <TabBarIOS style={styles.contentContainer}
                    unselectedTintColor="#525961"
                    tintColor="#22C59D"
                    barTintColor="#E4E4E4">
                    <TabBarIOS.Item
                        icon={require('../resources/task.png')}
                        selectedIcon={require('../resources/task_select.png')}
                        renderAsOriginal
                        title="任务"
                        selected={this.state.selectedTab === 'task'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'task',
                                notifCount: this.state.notifCount + 1,
                            });
                        }}>
                        {this._renderContent('#EAEDF0', '检查计划任务页面', this.state.notifCount)}
                    </TabBarIOS.Item>
                    <TabBarIOS.Item
                        icon={require('../resources/record.png')}
                        selectedIcon={require('../resources/record_selcect.png')}
                        renderAsOriginal
                        title="记录"
                        selected={this.state.selectedTab === 'record'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'record',
                                presses: this.state.presses + 1
                            });
                        }}>
                        {this._renderContent('#EAEDF0', '检查计划记录页面', this.state.presses)}
                    </TabBarIOS.Item>
                </TabBarIOS>
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
    contentContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    tabContent: {
        flex: 1,
        alignItems: 'center',
    },

    tabText: {
        color: '#A4A4A4',
        margin: 50,
    },
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
});
