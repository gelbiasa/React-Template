import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
        react({
            include: "**/*.jsx",
        }),
    ],
    esbuild: {
        loader: "jsx",
        include: /resources\/js\/.*\.jsx?$/,
        exclude: [],
    },
});