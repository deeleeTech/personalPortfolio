import { combineReducers } from 'redux';
import testReducer from './getTest';

const allReducers = combineReducers({
    testState: testReducer
});

export default allReducers;