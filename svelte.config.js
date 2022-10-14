import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-auto';
import sveltePreprocess from 'svelte-preprocess';
import mdsvexConfig from './mdsvex.config'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],
	kit: {
		adapter: adapter(),
	},
	preprocess: [sveltePreprocess(), mdsvex(mdsvexConfig)],
};

export default config;
