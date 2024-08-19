/** @type {import('next').NextConfig} */

import { createRequire } from 'module';
const require = createRequire(import.meta.url);

import withMDX from '@next/mdx';

const mdxOptions = {
  extension: /\.mdx?$/
};

const nextConfig = withMDX(mdxOptions)({
  // Your other Next.js config options go here
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'mdx']
});

export default nextConfig;