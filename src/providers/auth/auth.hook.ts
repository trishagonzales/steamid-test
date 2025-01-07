import authSlice from './auth.slice';
import { useAppDispatch, useAppSelector } from '../store';

type LoginPayload = {
	username: string;
	password: string;
};

const { loginRequest, loginSuccess, loginFailure, logout } = authSlice.actions;

export default function useAuth() {
	const auth = useAppSelector(state => state.auth);
	const dispatch = useAppDispatch();

	function onLogin(payload: LoginPayload) {
		const { username, password } = payload;
		dispatch(loginRequest());

		if (username === 'admin' && password === 'password123') {
			dispatch(loginSuccess(username));
		} else {
			dispatch(loginFailure('Invalid Credentials'));
		}
	}

	function onLogout() {
		dispatch(logout());
	}

	return {
		...auth,
		onLogin,
		onLogout,
	};
}
