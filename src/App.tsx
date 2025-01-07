import WelcomePage from './pages/welcome.page';
import LoginPage from './pages/login.page';
import useAuth from './providers/auth/auth.hook';

export default function App() {
	const auth = useAuth();

	return (
		<main className='min-h-screen px-4 py-5'>
			{auth.isLoggedIn ? <WelcomePage /> : <LoginPage />}
		</main>
	);
}
