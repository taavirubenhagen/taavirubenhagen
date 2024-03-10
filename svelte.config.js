import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter(),
		alias: {
			$static: path.resolve('./static/'),
			$tavy: path.resolve("./src/tavy/"),
			$style: path.resolve("./src/global.postcss"),
			$state: path.resolve("./src/state.ts"),
		}
	}
};

export default config;
