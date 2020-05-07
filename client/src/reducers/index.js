// root reducer
import { combineReducers } from 'redux';

// bring in reducers
import alertReducer from './alertReducer';

export default combineReducers({
    alert: alertReducer,
});
