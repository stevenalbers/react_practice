import { SIGNED_IN, SET_ITEMS } from '../constants';

export function logUser(email) {
	const action = {
		type: SIGNED_IN,
		email
	}
	return action;
}

export function setItems(items) {
	const action = {
		type: SET_ITEMS,
		items
	}
	return action;
}