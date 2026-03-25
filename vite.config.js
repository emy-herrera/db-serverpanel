import { defineConfig } from 'vite';
import { craViteConfig } from '@sistemas-cra/react-components/viteConfig';
import config from './CRA.config.js';

export default defineConfig(async ({ mode }) => {
	return await craViteConfig(__dirname, mode, config);
});
