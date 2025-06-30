import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <div className="flex h-screen bg-gray-100">
            <Sidebar />
            
            <div className="flex-1 flex flex-col lg:ml-64">
                <Header />
                
                <main className="flex-1 overflow-y-auto p-6">
                    {children}
                </main>
                
                <Footer />
            </div>
        </div>
    );
};

export default Layout;