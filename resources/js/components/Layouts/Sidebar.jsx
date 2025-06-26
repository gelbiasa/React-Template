import { useState } from 'react';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const menuItems = [
        { name: 'Dashboard', icon: '📊', href: '#' },
        { name: 'Users', icon: '👥', href: '#' },
        { name: 'Products', icon: '📦', href: '#' },
        { name: 'Orders', icon: '🛒', href: '#' },
        { name: 'Settings', icon: '⚙️', href: '#' },
    ];

    return (
        <>
            {/* Mobile menu button */}
            <div className="lg:hidden fixed top-4 left-4 z-50">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="p-2 rounded-md bg-gray-800 text-white"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>

            {/* Sidebar */}
            <aside className={`fixed inset-y-0 left-0 z-40 w-64 bg-gray-800 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 transition-transform duration-300 ease-in-out`}>
                <div className="flex items-center justify-center h-16 bg-gray-900">
                    <h2 className="text-xl font-bold text-white">React Dashboard</h2>
                </div>
                
                <nav className="mt-8">
                    <div className="px-4 space-y-2">
                        {menuItems.map((item, index) => (
                            <a
                                key={index}
                                href={item.href}
                                className="flex items-center px-4 py-3 text-gray-300 rounded-lg hover:bg-gray-700 hover:text-white transition-colors duration-200"
                            >
                                <span className="mr-3 text-lg">{item.icon}</span>
                                <span className="font-medium">{item.name}</span>
                            </a>
                        ))}
                    </div>
                </nav>
            </aside>

            {/* Overlay for mobile */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-30 bg-black opacity-50 lg:hidden"
                    onClick={() => setIsOpen(false)}
                ></div>
            )}
        </>
    );
};

export default Sidebar;