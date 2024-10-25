import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-900">
            <div className="text-center">
                <h1 className="text-9xl font-bold text-white">404</h1>
                <h2 className="text-4xl font-semibold text-gray-400 mt-4">Sahifa mavjud emas</h2>
                <p className="text-lg text-gray-500 mt-2">
                    Siz qidirayotgan sahifa yo'qolib qolgan shekilli. <br />
                    Balki uni biror qahvaxonada uchratsangiz mumkin bo'lar... ☕️
                </p>
                <Link to="/" className="mt-6 inline-block px-6 py-3 bg-[#FF6E30] text-white rounded-lg shadow hover:bg-[#ff8b4c] transition-all">
                    orga qaytish
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
