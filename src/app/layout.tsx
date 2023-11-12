/* Components */
import { Providers } from '@/src/app/lib/providers';

/* Instruments */
import styles from './styles/layout.module.css';
import './styles/globals.css';

export default function RootLayout(props: React.PropsWithChildren) {
	return <Providers>{props.children}</Providers>;
}
