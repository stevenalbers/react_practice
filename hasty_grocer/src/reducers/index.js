import { combineReducers } from 'redux';
import user from './reducer_user';
import items from './reducer_items';

export default combineReducers({
	user,
	items
})