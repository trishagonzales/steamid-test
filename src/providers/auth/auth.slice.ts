import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const authSlice = createSlice({
	name: 'auth',

	initialState: {
		isLoggedIn: false,
		username: '',
		errorMessage: '',
		status: 'LOGOUT' as 'LOGIN_REQUEST' | 'LOGIN_SUCCESS' | 'LOGIN_FAILURE' | 'LOGOUT',
	},

	reducers: {
		loginRequest(state) {
			state.status = 'LOGIN_REQUEST';
		},
		loginSuccess(state, action: PayloadAction<string>) {
			state.status = 'LOGIN_SUCCESS';
			state.isLoggedIn = true;
			state.username = action.payload;
			state.errorMessage = '';
		},
		loginFailure(state, action: PayloadAction<string>) {
			state.status = 'LOGIN_FAILURE';
			state.isLoggedIn = false;
			state.errorMessage = action.payload;
		},
		logout(state) {
			state.status = 'LOGOUT';
			state.isLoggedIn = false;
			state.username = '';
			state.errorMessage = '';
		},
	},
});

export default authSlice;
