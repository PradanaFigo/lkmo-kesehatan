import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-[#003366] text-[#FFD700] p-4">
      <div className="container-medilink flex justify-between items-center">
        <div className="flex items-center space-x-8">
          <img src="/medical-link-logo.png" alt="Medilink Logo" className="h-12" />
          <nav>
            <ul className="flex space-x-6">
              <li><Link to="/" className="hover:underline">Kalkulator Kesehatan</Link></li>
              <li><Link to="/ChatDokterPage" className="hover:underline">Chat Dokter</Link></li>
              <li><Link to="/laboratorium" className="hover:underline">Laboratorium</Link></li>
            </ul>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <Link 
          to="/masuk" 
           className="bg-[#FFD700] text-[#003366] font-bold py-2 px-6 rounded-lg hover:bg-[#FFC107] transition-colors"
          >
          Masuk/Daftar
          </Link>
          <div className="w-8 h-8 bg-white rounded-full"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;