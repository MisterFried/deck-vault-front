/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "deckvault.b-cdn.net",
				port: "",
				pathname: "/**",
			},
		],
	},
	output: "standalone",
};

export default nextConfig;
