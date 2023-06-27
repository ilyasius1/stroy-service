import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
const path = require('path');
export default defineConfig({
    plugins: [
        vue({
            template: {
                compilerOptions: {
                    // ...
                },
                transformAssetUrls: {
                    // ...
                },
            }
        }),
        laravel({
            input: [
                'resources/assets/scss/main.scss',
                'resources/js/main.js'
            ],
            refresh: true,
        }),

    ],
    devServer: {
        historyApiFallback: {
            rewrites: [{ from: /./, to: '/' }],
        },
    },
    css: {
        preprocessorOptions: {
            scss: {

            }
        }
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'resources/js'),
            '@assets': path.resolve(__dirname, 'resources/assets'),
        }
    },
    optimizeDeps: {
        include: [
            'lodash.throttle', 'lodash.orderby'
        ]
    },
});
