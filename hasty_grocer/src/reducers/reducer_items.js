import { SET_ITEMS } from '../constants';

export default (state = [], action) => {
	switch(action.type) {
		case SET_ITEMS:
			const { items } = action;
			return items;
		default:
			return state;
	}
}