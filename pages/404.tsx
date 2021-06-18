import { useEffect } from 'react';
import { Config } from '../config';

export default function Custom404() {
	useEffect(() => {
		window.location.assign(Config.defaultUrl);
	});
	return <></>;
}
