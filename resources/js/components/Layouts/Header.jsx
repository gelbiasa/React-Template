const Header = () => {
    return (
        <header className="bg-white shadow-sm border-b border-gray-200">
            <div className="flex items-center justify-between px-6 py-4">
                <div className="flex items-center">
                    <h1 className="text-xl font-semibold text-gray-900">Dashboard</h1>
                </div>
                <div className="flex items-center space-x-4">
                    <button className="p-2 text-gray-400 hover:text-gray-600">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5-5-5h5v-12z" />
                        </svg>
                    </button>
                    <div className="flex items-center space-x-2">
                        <img className="w-8 h-8 rounded-full" src="https://via.placeholder.com/32" alt="Profile" />
                        <span className="text-sm font-medium text-gray-700">Admin</span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;