import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
// eslint 提示
import viteEslint from 'vite-plugin-eslint';
import defineOptions from 'unplugin-vue-define-options/vite';
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue(), viteEslint(), defineOptions()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src')
		}
	}
});
