import WelcomePage from './pages/welcome.page';
import LoginPage from './pages/login.page';
import useAuth from './providers/auth/auth.hook';

export default function App() {
	const auth = useAuth();

	return (
		<main className='flex items-center justify-center min-h-screen p-4'>
			{auth.isLoggedIn ? <WelcomePage /> : <LoginPage />}
		</main>
	);
}
