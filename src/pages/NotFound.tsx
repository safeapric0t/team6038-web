import React from 'react';
import { Link } from 'react-router-dom';
import { Notebook as Robot, Home, ArrowLeft } from 'lucide-react';
import { useThemeStore } from '../store/themeStore';

const NotFound = () => {
    const { isDark } = useThemeStore();

    return (
        <div className="min-h-screen bg-white dark:bg-slate-900 flex items-center justify-center p-4">
            <div className="max-w-2xl w-full text-center">
                <div className=" flex justify-center">
                    <div className="relative">
                        <img src={isDark ? '/itobot-logo.png' : '/itobot-logo-dark.png'} alt="ITOBOT 6038" style={
                            {
                                height: '400px',
                                width: '400px',
                                bottom: '-50px',
                            }
                        } />
                    </div>
                </div>

                <h1 className="text-8xl md:text-10xl font-bold text-red-500 dark:text-red-400 mb-4 ">404</h1>
                <h3 className="text-3xl md:text-4xl font-semibold text-red-500 dark:text-red-400 mb-8">
                    team6038.com{window.location.pathname}
                </h3>
                <h2 className="text-3xl md:text-6xl font-semibold text-red-500 dark:text-red-400 mb-8">Page Not Found</h2>


                <p className="text-gray-600 dark:text-gray-400 mb-4  text-lg">
                    Oops! Looks like our robot encountered an error. The page you're looking for has been moved, deleted, or never existed.
                </p>

                <div className="space-y-4 md:space-y-0 md:space-x-4">
                    <Link
                        to="/"
                        className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200"
                    >
                        <Home className="h-5 w-5 mr-2" />
                        Back to Home
                    </Link>

                    <button
                        onClick={() => window.history.back()}
                        className="inline-flex items-center px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-800 font-medium rounded-lg transition-colors duration-200"
                    >
                        <ArrowLeft className="h-5 w-5 mr-2" />
                        Go Back
                    </button>
                </div>

                <div className="mt-4 p-6 bg-gray-50 dark:bg-slate-800 rounded-xl">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                        Need Help?
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                        If you believe this is a technical error, please contact our support team.
                    </p>
                    <Link
                        to="/contact"
                        className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium">
                        Contact Support →
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
//100 + 20