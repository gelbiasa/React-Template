import './bootstrap';
import '../css/app.css';

import React from 'react';
import { createRoot } from 'react-dom/client';
import Layout from './components/Layouts/Layouts';
import Dashboard from './components/Layouts/Dashboard';

function App() {
    return (
        <Layout>
            <Dashboard />
        </Layout>
    );
}

const container = document.getElementById('app');
if (container) {
    try {
        const root = createRoot(container);
        root.render(<App />);
    } catch (error) {
        console.error('Error rendering React app:', error);
    }
} else {
    console.error('Container element not found');
}