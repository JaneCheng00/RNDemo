/**
 * Created by apple on 16/10/23.
 */

/**
 * Created by apple on 16/9/1.
 */
import React, {Component,
} from 'react';
import {
    View,
    Text,
    Navigator,
    StyleSheet,
    TouchableOpacity,
    Platform
} from 'react-native';

import Login from './containers/Login';

// 导航栏的Mapper
var NavigationBarRouteMapper = {
    // 左键
    LeftButton(route, navigator, index, navState) {
        if (index > 0 && route.id != 'main') {
            return (
                <View style={styles.navContainer}>
                    <TouchableOpacity
                        underlayColor='transparent'
                        onPress={() => {if (index > 0) {navigator.pop()}}}>
                        <Text style={styles.leftNavButtonText}>
                            返回
                        </Text>
                    </TouchableOpacity>
                </View>
            );
        } else {
            return null;
        }
    },
    // 右键
    RightButton(route, navigator, index, navState) {
        if (route.onPress)
            return (
                <View style={styles.navContainer}>
                    <TouchableOpacity
                        onPress={() => route.onPress()}>
                        <Text style={styles.rightNavButtonText}>
                            {route.rightText || '右键'}
                        </Text>
                    </TouchableOpacity>
                </View>
            );
    },
    // 标题
    Title(route, navigator, index, navState) {
        return (
            <View style={styles.navContainer}>
                <Text style={styles.title}>
                    {route.title || '公交安保电子信息巡查'}
                </Text>
            </View>
        );
    }
};


export default class RNDemoNavigator extends Component {
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
          this.state = {
              hideNavBar: true,
          };
      }
    /**
     * 使用动态页面加载
     * @param route 路由
     * @param navigator 导航器
     * @returns {XML} 页面
     */
    renderScene(route, navigator) {
        return <route.component navigator={navigator}  {...route.passProps} />;
    }

    render() {
        var index = this;

            return (
                <Navigator
                    ref="navigator"
                    style={styles.container}
                    initialRoute={{ id:'login', name: '登录', component: Login, display: false}}
                    renderScene={index.renderScene}
                    configureScene={(route) => {
                        if (Platform.OS === 'android') {
                            return Navigator.SceneConfigs.FloatFromBottomAndroid;
                        }
                        if (route.type == 'Modal') {
                            return Navigator.SceneConfigs.FloatFromBottom;
                        }
                        return Navigator.SceneConfigs.PushFromRight;
                    }}
                    navigationBar={
                        <NavigationBar
                            style={styles.navContainer}
                            routeMapper={NavigationBarRouteMapper}/>

                    }
                />

            );
        }

}

class NavigationBar extends Navigator.NavigationBar {
    render() {
        var routes = this.props.navState.routeStack;

        if (routes.length) {
            var route = routes[routes.length - 1];

            if (route.display === false) {
                return null;
            }
        }

        return super.render();
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    // 导航栏
    navContainer: {
        backgroundColor: '#22C59E',
        paddingTop: 12,
        paddingBottom: 10,
    },
    // 左面导航按钮
    leftNavButtonText: {
        color: '#ffffff',
        fontSize: 18,
        marginLeft: 13
    },
    // 右面导航按钮
    rightNavButtonText: {
        color: '#ffffff',
        fontSize: 18,
        marginRight: 13
    },
    // 标题
    title: {
        fontSize: 18,
        color: '#fff',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        flex: 1                //Step 3
    }
});
