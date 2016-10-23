/**
 * Created by apple on 16/10/23.
 */
'use strict';

import {combineReducers} from 'redux';
import loginIn from './Login';

const rootReducer = combineReducers({
    loginIn: loginIn
});

export default rootReducer;