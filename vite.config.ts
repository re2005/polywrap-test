import { fileURLToPath, URL } from 'node:url';
import inject from '@rollup/plugin-inject';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
            url: 'rollup-plugin-node-polyfills/polyfills/url',
        },
    },
    build: {
        minify: 'terser',
        rollupOptions: {
            plugins: [inject({ Buffer: ['buffer', 'Buffer'] })],
        },
        commonjsOptions: {
            transformMixedEsModules: true,
        },
    },
});
