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
} from 'react-native';
import { default as config } from './config';

export default class CheckInList extends Component {
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
          var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
          this.state = {
              ds:ds.cloneWithRows([
                  {USER_NAME:'测试（0）', ATTENDANCE_WEEK:'星期八', ONDUTY_TIME:'00:00:00'},
                  {USER_NAME:'测试（1）', ATTENDANCE_WEEK:'星期八', ONDUTY_TIME:'00:00:00'},
              ]),
              checkInList: "..."
          };
      }

    onPressAsync() {
        console.log(3);
        console.log(config.queryUrl);
        var list = this;
        fetch(config.queryUrl)
            .then((response) => response.json())
            .catch((error) => {
                console.log(error);
            })
            .then((responseData) => {
                console.log(responseData);
                console.log(responseData._DATA_);
                list.setState({ds:this.state.ds.cloneWithRows(responseData._DATA_)});
            })
            .done();
    }

    render(){
        return (<View>
            <Text>
                ReactNative 原生控件
            </Text>
            <TouchableHighlight
                underlayColor='#4169e1'
                activeOpacity={0.5}
                style={styles.style_view_button}
                onPress={this.onPressAsync.bind(this)}
            >
                <Text style={{fontSize:16,color:'#fff'}}>同步</Text>
            </TouchableHighlight>
            <Text style={styles.baseText}>
                {this.state.checkInList}
            </Text>
            <ListView
                dataSource={this.state.ds}
                renderRow={(rowData) => {
                    return (<View>
                        <Text>
                            <Text style={styles.lableText}> 签到用户</Text>
                            <Text style={styles.baseText}>{rowData.USER_NAME + '\n'}</Text>
                        </Text>
                        <Text>
                            <Text style={styles.lableText}> 签到时间  </Text>
                            <Text style={styles.baseText}>{rowData.ATTENDANCE_WEEK + '   ' + rowData.ONDUTY_TIME}</Text>
                        </Text>
                    </View>);
                }
                }
                renderSeparator={(sectionID, rowID) => {
                    return (
                        <View
                            key={`${sectionID}-${rowID}`}
                            style={styles.separator}
                        />
                    );
                }
                }
                renderScrollComponent={props => <RecyclerViewBackedScrollView {...props} />}
            />
        </View>);
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
});
