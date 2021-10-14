// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { ERROR_REDIRECT } from '../../config';
import links from '../../data/links.json';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	// get key from path
	const { redirectKey } = req.query;

	// if something is wrong with json file
	if (links == null || Object.keys(links).length <= 0)
		res.redirect(ERROR_REDIRECT);

	// get url from key in json file
	let url = (links as any)[redirectKey as string];

	if (url == null) {
		res.redirect(ERROR_REDIRECT); // if everything fails
	} else {
		res.redirect(url); // redirect to resulting url
	}
}
