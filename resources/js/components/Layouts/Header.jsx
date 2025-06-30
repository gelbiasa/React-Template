import React from 'react';

const Header = () => {
    return (
        <header className="bg-white shadow-sm border-b border-gray-200">
            <div className="flex items-center justify-between px-6 py-4">
                <div className="flex items-center">
                    <h1 className="text-xl font-semibold text-gray-900">Dashboard</h1>
                </div>
                <div className="flex items-center space-x-4">
                    <button className="p-2 text-gray-700 hover:text-gray-600">
                        🔔
                    </button>
                    <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-sm font-bold">A</span>
                        </div>
                        <span className="text-sm font-medium text-gray-700">Admin</span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;