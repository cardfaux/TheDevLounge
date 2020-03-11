import uuid from 'uuid';

import { SET_ALERT, REMOVE_ALERT } from './types';

export const setAlert = (msg, alertType, timeout = 5000) => (dispatch) => {
	const id = uuid.v4();
	// This Is The Action Object Dispatching The Reducer
	dispatch({
		type: SET_ALERT,
		// This Is Mapped To Props In The Component
		payload: { msg, alertType, id }
	});

	setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
};
