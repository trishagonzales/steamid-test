import { FormEvent, useState } from 'react';
import { Button } from '../components/button';
import { Title } from '../components/typography';
import { ui } from '../lib/classed';
import useAuth from '../providers/auth/auth.hook';

export default function LoginPage() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const auth = useAuth();

	const onSubmit = (e: FormEvent) => {
		e.preventDefault();
		auth.onLogin({ username, password });
	};

	return (
		<ContactForm onSubmit={onSubmit}>
			<Title className='mt-5'>LOGIN</Title>

			<Error>{auth.errorMessage}</Error>

			<div className='grid gap-5'>
				<Field>
					<Label>
						Username/Email <Asterisk />
					</Label>
					<Input
						placeholder='Your username or email'
						value={username}
						onChange={e => setUsername(e.target.value)}
						required
					/>
				</Field>

				<Field>
					<Label>
						Password <Asterisk />
					</Label>
					<Input
						className='relative'
						type='password'
						placeholder='Your password'
						value={password}
						onChange={e => setPassword(e.target.value)}
						required
					/>
				</Field>
			</div>

			<Button className='mt-5'>Submit</Button>
		</ContactForm>
	);
}

const ContactForm = ui.form(
	'w-full max-w-[38rem] mx-auto p-6 grid gap-5',
	'bg-white border border-green-100 rounded-lg'
);

const Error = ui.p('text-center text-2 text-red-600');
const Field = ui.div('grid gap-1');

const Label = ui.label('text-2 font-semibold text-gray-500');
const Input = ui.input('p-3 text-2 border-2 border-gray-200 rounded-lg hover:border-gray-400');

const Asterisk = () => <span className='text-red-600'>*</span>;
