import { useEffect } from 'react';
import { ERROR_REDIRECT } from '../config';

export default function Home() {
	useEffect(() => {
		window.location.assign(ERROR_REDIRECT);
	});
	return <></>;
}
