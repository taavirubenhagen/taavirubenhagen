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
			$static: path.resolve('./src/static/'),
			$components: path.resolve("./src/components/"),
			$buttons: path.resolve("./src/components/buttons/"),
			$frames: path.resolve("./src/components/frames/"),
			$style: path.resolve("./src/global.postcss"),
			$store: path.resolve("./src/stores.ts"),
		}
	}
};

export default config
