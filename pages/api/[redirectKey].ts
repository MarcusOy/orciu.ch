// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { Config } from '../../config';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = Config.apiUrl;
const supabaseKey = Config.apiKey;
const supabase = createClient(supabaseUrl, supabaseKey);

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	debugger;

	// get key from path
	const { redirectKey } = req.query;

	// get redirect url from key
	let { data: links, error } = await supabase
		.from('links')
		.select('url')
		.eq('key', redirectKey);

	if (links == null || links.length <= 0 || error) {
		res.redirect(Config.defaultUrl); // if everything fails
	} else {
		res.redirect(links[0].url); // redirect to resulting url
	}
}
