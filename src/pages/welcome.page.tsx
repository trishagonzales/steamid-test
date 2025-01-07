import { useEffect } from 'react';
import { Button } from '../components/button';
import { Title } from '../components/typography';
import useAuth from '../providers/auth/auth.hook';
import confetti from 'canvas-confetti';

export default function WelcomePage() {
	const auth = useAuth();

	useEffect(() => {
		const end = Date.now() + 5 * 1000;
		const colors = ['#bb0000', '#ffffff'];

		(function frame() {
			confetti({
				particleCount: 2,
				angle: 60,
				spread: 55,
				origin: { x: 0 },
				colors: colors,
			});
			confetti({
				particleCount: 2,
				angle: 120,
				spread: 55,
				origin: { x: 1 },
				colors: colors,
			});

			if (Date.now() < end) {
				requestAnimationFrame(frame);
			}
		})();
	}, []);

	return (
		<div className='flex items-center justify-center min-h-[90vh]'>
			<div className='grid gap-5 max-w-[35rem] mx-auto'>
				<Title>Welcome {auth.username}!</Title>

				<img className='mx-auto max-w-[20rem] sm:max-w-[27rem]' src='/welcome.webp' />

				<Button onClick={auth.onLogout}>Logout</Button>
			</div>
		</div>
	);
}
