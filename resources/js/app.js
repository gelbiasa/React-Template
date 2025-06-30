import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.jsx'], // Ubah ke .jsx
            refresh: true,
        }),
        react({
            include: "**/*.{js,jsx}", // Dukung keduanya
        }),
    ],
    esbuild: {
        loader: "jsx",
        include: /resources\/js\/.*\.(js|jsx)$/,
        exclude: [],
    },
});