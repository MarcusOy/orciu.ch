module.exports = {
	reactStrictMode: true,
	async rewrites() {
		return [
			{ source: '/:redirectKey*', destination: '/api/:redirectKey*' },
		];
	},
};
