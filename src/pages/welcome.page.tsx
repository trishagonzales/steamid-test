import { Button } from '../components/button';
import { Title } from '../components/typography';
import useAuth from '../providers/auth/auth.hook';

export default function WelcomePage() {
	const auth = useAuth();

	return (
		<div className='grid'>
			<Title>Welcome {auth.username}!</Title>

			<Button className='mt-5' onClick={auth.onLogout}>
				Logout
			</Button>
		</div>
	);
}
