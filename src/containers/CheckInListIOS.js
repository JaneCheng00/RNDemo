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
import TempForm from './TempForm';
import JcbForm from './JcbForm';
import Main from './Main';

const displayName = '公交安保电子信息巡查';
const title = '<TabBarIOS>';
const description = 'Tab-based navigation.';
const HAS_MODEL = 0;
const TEMP_PLAN = 1;
var screenWidth = Dimensions.get('window').width;
var screenHight = Dimensions.get('window').height;
var _navigator;
export default class CheckInList extends Component {
    // 构造
      constructor(props) {
        super(props);
          _navigator = this.props.navigator;
        // 初始状态
          var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
          this.state = {
              selectedTab: 'task',
              notifCount: 0,
              presses: 0,
              ds:ds.cloneWithRows([
                  {_PK_: "0", TASK_NAME:'2016060801', COMPANY_NAME:'第一分公司', TIME:'2016-06-08 00:00:00', HAS_MODEL:0},
                  {_PK_: "1", TASK_NAME:'20160615检查计划', COMPANY_NAME:'第一车队', TIME:'2016-06-015 00:00:00', HAS_MODEL:1},
              ]),
          };
      }

      pressRow(plan) {
          let id = 'tempTask';
          let name = '临时任务';
          let component = TempForm;
          let title = '临时任务';
          if(plan.HAS_MODEL === HAS_MODEL) {
              id = 'jcbTask';
              name = '场站检查';
              component = JcbForm;
              title = '场站检查';
          }
          _navigator.push(
              {
                  id: id,
                  name: name,
                  component: component,
                  title: title,
              });
      }

      renderPlanItem(plan) {
          let planImage = require('../resources/plan_task.png');
          let modeImage = require('../resources/change_task.png');
          let modelText = "有模板";
          if(plan.HAS_MODEL === HAS_MODEL) {
            planImage = require('../resources/plan_task.png');
            modeImage = require('../resources/change_task.png');
              modelText = "有模板";
          }
          if(plan.HAS_MODEL === TEMP_PLAN) {
                planImage = require('../resources/off_plan.png');
                modeImage = require('../resources/mar_task.png');
              modelText = "无模板";
          }
          return (
              <TouchableHighlight onPress={() => {
                  this.pressRow(plan);
              }}>
                 <View style={styles.itemBottom}>

                      <View style={styles.itemLeft}>
                          <Image style={styles.itemModel} source={modeImage}/>
                          <Image style={styles.itemPlan} source={planImage}/>
                      </View>
                      <View style={styles.itemRight}>
                          <Text>
                              <Text style={styles.lableText}>任务名称: </Text>
                              <Text style={styles.baseText}>{plan.TASK_NAME + '\n'}</Text>
                          </Text>
                          <Text>
                              <Text style={styles.lableText}>稽查公司: </Text>
                              <Text style={styles.baseText}>{plan.COMPANY_NAME + '\n'}</Text>
                          </Text>
                          <Text>
                              <Text style={styles.lableText}>{plan.TIME + '-' + '\n'}</Text>
                              <Text style={styles.baseText}>{plan.TIME + '\n'}</Text>
                          </Text>
                      </View>
                </View>
              </TouchableHighlight>
          );
      }

      renderPlanList() {
          let that = this;
          return (<ListView
              dataSource={that.state.ds}
              renderRow={(rowData) => {
                  return that.renderPlanItem(rowData);
              }
              }
          />);
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
                        {this.renderPlanList()}
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
        textAlign: 'left',
        color:'#A6A6A6',
    },
    itemBottom: {
        flexDirection:'row',
        flex: 1,
        backgroundColor: 'white',
        borderRightWidth:0.5,
        borderLeftWidth:0.5,
        borderTopWidth:0.5,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: '#DCE0E2',
        borderRadius:0.5,
        marginLeft:8,
        marginRight:8,
        marginTop:12,
        justifyContent:'center',
        alignItems:'center',
    },
    itemLeft: {
        flex:1,
        flexDirection:'column',
        alignSelf:'center',
        justifyContent:'center',
    },
    itemRight: {
        flex:2,
        alignSelf:'center',
    },
    itemModel: {
        alignSelf:'flex-start',
        width:30,
        height:15,
    },
    itemPlan: {
        alignSelf:'center',
        width:60,
        height:60,
    },
    titleText: {
        fontSize: 20,
        color:'#FF4040',
        fontWeight: 'bold',
    },
    lableText: {
        fontFamily:'Cochin',
        color:'#A6A6A6',
        padding:5,
    },
});
