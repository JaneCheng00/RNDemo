/**
 * Created by apple on 16/10/23.
 * 引入 Provider
 */
'use strict';
import React, {Component} from 'react';

import {Provider} from 'react-redux';
import configureStore from './store/ConfigureStore';

import RNDemoNavigator from './RNDemoNavigator';

const store = configureStore();

export default class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <RNDemoNavigator/>
            </Provider>
        );
    }
}