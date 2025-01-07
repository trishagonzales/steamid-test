import { Provider as ReduxProvider } from 'react-redux';
import store from './store';

export default function Providers(props: React.PropsWithChildren) {
	return <ReduxProvider store={store}>{props.children}</ReduxProvider>;
}
