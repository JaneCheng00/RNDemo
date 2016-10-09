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
import { default as config } from '../config';
import CheckInDB from './CheckInDB';
import SQLite from 'react-native-sqlite-storage';

var database_name = "test5.db";
var database_version = "1.0";
var database_displayname = "test5";
var database_size = 200000;
var db;
var table_name = "CheckInPersons";

export default class CheckInList extends Component {
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
          var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
          this.state = {
              ds:ds.cloneWithRows([
                  {_PK_: "1", USER_NAME:'测试（0）', ATTENDANCE_WEEK:'星期八', ONDUTY_TIME:'00:00:00'},
                  {_PK_: "2", USER_NAME:'测试（1）', ATTENDANCE_WEEK:'星期八', ONDUTY_TIME:'00:00:00'},
              ]),
              checkInList: "..."
          };
          SQLite.DEBUG(true);
          SQLite.enablePromise(true);
          SQLite.enablePromise(false);
      }

    openCB() {
        console.log("Database OPEN");
    }

    closeCB() {
        console.log("Database CLOSED");
    }

    errorCB(err) {
        console.log("error: ",err);
        return false;
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
                var data = responseData._DATA_;
                console.log(responseData);
                console.log(data);
                list.setState({ds:this.state.ds.cloneWithRows(data)});
                return data;
            }).then((checkInData) => {
                db = SQLite.openDatabase(database_name, database_version, database_displayname, database_size, this.openCB, this.errorCB);
                db.transaction(function() {
                    list.populiteCheckinTable(this, checkInData);
                }, list.errorCB, function () {
                    console.log("Database CheckInPersons populated ... executing query ...");
                    db.close(list.closeCB, list.errorCB);
                })
        })
            .done();
    }

    populiteCheckinTable(tx, checkInData) {
        console.log("Executing 签到表 DROP stmts");

        tx.executeSql('DROP TABLE IF EXISTS ' + table_name);

        console.log("Executing 签到表 CREATE stmts");

        tx.executeSql('CREATE TABLE IF NOT EXISTS ' + table_name + '( '
            + 'person_id VARCHAR(40) PRIMARY KEY NOT NULL, '
            + 'name VARCHAR(20), '
            + 'week VARCHAR(20), '
            + 'time VARCHAR(20) ) ; ', [], this.successCB, this.errorCB);

        console.log("Executing 签到表 INSERT stmts");
        
        //入库
        checkInData.map((checkPerson) => {
            var sql = 'INSERT INTO ' + table_name + ' (person_id, name, week, time) ' +
                'VALUES ("' + checkPerson._PK_ +'", "' + checkPerson.USER_NAME + '", "' +
                checkPerson.ATTENDANCE_WEEK + '", "' +  checkPerson.ONDUTY_TIME + '");';
            //console.log(sql);
            tx.executeSql(sql, []);
        });
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
