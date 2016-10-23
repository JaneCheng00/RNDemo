/**
 * Created by apple on 16/10/23.
 * 引入 Provider
 */
'use strict';
import React, {Component} from 'react';

import {Provider} from 'react-redux';
import RNDemoNavigator from './RNDemoNavigator';

export default class Root extends Component {
    render() {
        return (
            <RNDemoNavigator/>
        );
    }
}