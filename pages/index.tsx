import { useEffect } from 'react';
import { Config } from '../config';

export default function Home() {
	useEffect(() => {
		window.location.assign(Config.defaultUrl);
	});
	return <></>;
}
