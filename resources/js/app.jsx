import './bootstrap';
import '../css/app.css';

import { createRoot } from 'react-dom/client';
import Layout from './components/Layouts/Layouts';
import Dashboard from './components/Layouts/Dashboard';

const App = () => {
    return (
        <Layout>
            <Dashboard />
        </Layout>
    );
};

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);