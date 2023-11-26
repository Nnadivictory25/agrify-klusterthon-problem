const { hostname } = require('os')

/** @type {import('next').NextConfig} */
const nextConfig = {
     webpack: (config) => {
		config.module.rules.push(
			{
				test: /\.node$/,
				use: 'raw-loader',
			},
			{
				test: /\.map$/,
				use: 'raw-loader',
			},
			{
				test: /LICENSE$/,
				use: 'raw-loader',
			},
			{
				test: /\.md$/,
				use: [
					{
						loader: 'html-loader',
					},
					{
						loader: 'markdown-loader',
					},
				],
			}
		);

		return config;
	},
     images: {
          remotePatterns: [{ hostname: "assets.website-files.com" }],
     },
}

module.exports = nextConfig
