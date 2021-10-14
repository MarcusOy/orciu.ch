import { useEffect } from 'react';
import { ERROR_REDIRECT } from '../config';

export default function Custom404() {
	useEffect(() => {
		window.location.assign(ERROR_REDIRECT);
	});
	return <></>;
}
