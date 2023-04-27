import adapter from '@sveltejs/adapter-auto'
import { vitePreprocess } from '@sveltejs/kit/vite'
import path from 'path'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter(),
		alias: {
			$src: path.resolve('./src'),
			$static: path.resolve('./static/'),
			$util: path.resolve("./src/lib/util/"),
			$tavy: path.resolve("./src/lib/tavy/"),
			$style: path.resolve("./src/global.postcss"),
			$store: path.resolve("./src/stores.ts"),

			$buttons: path.resolve("./src/lib/util/buttons"),
		}
	}
};

export default config
