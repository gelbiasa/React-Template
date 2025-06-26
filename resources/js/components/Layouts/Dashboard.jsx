const Dashboard = () => {
    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white rounded-lg shadow p-6">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                                <span className="text-white text-sm">👥</span>
                            </div>
                        </div>
                        <div className="ml-4">
                            <h3 className="text-lg font-medium text-gray-900">Total Users</h3>
                            <p className="text-2xl font-bold text-blue-600">1,234</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow p-6">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                                <span className="text-white text-sm">💰</span>
                            </div>
                        </div>
                        <div className="ml-4">
                            <h3 className="text-lg font-medium text-gray-900">Revenue</h3>
                            <p className="text-2xl font-bold text-green-600">$45,678</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow p-6">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                                <span className="text-white text-sm">📦</span>
                            </div>
                        </div>
                        <div className="ml-4">
                            <h3 className="text-lg font-medium text-gray-900">Products</h3>
                            <p className="text-2xl font-bold text-yellow-600">567</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow p-6">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                                <span className="text-white text-sm">🛒</span>
                            </div>
                        </div>
                        <div className="ml-4">
                            <h3 className="text-lg font-medium text-gray-900">Orders</h3>
                            <p className="text-2xl font-bold text-red-600">89</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-lg shadow">
                <div className="px-6 py-4 border-b border-gray-200">
                    <h3 className="text-lg font-medium text-gray-900">Recent Activity</h3>
                </div>
                <div className="p-6">
                    <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <p className="text-sm text-gray-600">New user registered</p>
                            <span className="text-xs text-gray-400">2 minutes ago</span>
                        </div>
                        <div className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            <p className="text-sm text-gray-600">Order #1234 completed</p>
                            <span className="text-xs text-gray-400">5 minutes ago</span>
                        </div>
                        <div className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                            <p className="text-sm text-gray-600">Product updated</p>
                            <span className="text-xs text-gray-400">10 minutes ago</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;