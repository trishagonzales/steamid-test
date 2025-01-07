import { FormEvent, useState } from 'react';
import { ui } from '../lib/classed';
import { Button } from '../components/button';
import { Link, Title } from '../components/typography';
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
		<Container>
			<ContactImage src='/login.svg' />

			<ContactCard onSubmit={onSubmit}>
				<Title className='mt-3'>Login</Title>
				<Error>{auth.errorMessage}</Error>

				<Form>
					<FormField>
						<Label>
							Username/Email <Asterisk />
						</Label>
						<Input
							placeholder='Your username or email'
							value={username}
							onChange={e => setUsername(e.target.value)}
							required
						/>
					</FormField>

					<FormField>
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
					</FormField>

					<Link className='ml-auto'>Forgot Password?</Link>
					<Button className='mt-3'>Login</Button>
				</Form>

				<ContactDivider />

				<SocialGroup>
					<SocialIcon>
						<img src='/google.svg' alt='' />
					</SocialIcon>
					<SocialIcon>
						<img src='/facebook.svg' alt='' />
					</SocialIcon>
					<SocialIcon>
						<img src='/github.svg' alt='' />
					</SocialIcon>
				</SocialGroup>

				<p className='mt-3 text-center text-gray-400'>
					Don't have an account? <Link>Register</Link>
				</p>
			</ContactCard>
		</Container>
	);
}

function ContactDivider() {
	return (
		<div className='flex items-center gap-4 mx-5 mt-3'>
			<span className='flex-1 h-[1px] bg-gray-200'></span>
			<p>OR</p>
			<span className='flex-1 h-[1px] bg-gray-200'></span>
		</div>
	);
}

const Container = ui.div('grid min-h-screen grid-cols-1 gap-4 place-items-center lg:grid-cols-2');
const ContactImage = ui.img('max-w-[40rem]');

const ContactCard = ui.form(
	'w-full max-w-[36rem] mx-auto p-6 grid gap-5',
	'bg-white border border-green-100 rounded-xl'
);

const Form = ui.div('grid gap-4');
const FormField = ui.div('grid gap-1');

const Label = ui.label('text-2 font-semibold text-gray-500');
const Input = ui.input('p-3 text-2 border-2 border-gray-200 rounded-lg hover:border-gray-400');

const Error = ui.p('text-center text-2 text-red-600');
const Asterisk = () => <span className='text-red-600'>*</span>;

const SocialGroup = ui.div('flex gap-3 mx-auto');
const SocialIcon = ui.i(
	'w-[3.5rem] p-2 border-2 border-gray-200 rounded-full cursor-pointer hover:border-gray-300 hover:bg-gray-50'
);
