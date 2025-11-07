import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    alert('Anda telah logout');
    navigate('/masuk');
  };

  return (
    <header className="bg-[#003366] text-[#FFD700] p-4">
      <div className="container-medilink flex justify-between items-center">
        <div className="flex items-center space-x-8">
          <Link to={token ? "/dashboard" : "/"}>
            <img src="/medical-link-logo.png" alt="Medilink Logo" className="h-12 cursor-pointer" />
          </Link>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    const scrollToCalculator = () => {
                      const el = document.getElementById('kalkulator-kesehtan');
                      if (el) {
                        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        el.classList.add('highlight');
                        // remove highlight after animation
                        setTimeout(() => el.classList.remove('highlight'), 2200);
                      }
                    };

                    if (location.pathname === '/') {
                      scrollToCalculator();
                    } else {
                      navigate('/');
                      // wait for navigation to render
                      setTimeout(scrollToCalculator, 400);
                    }
                  }}
                  className="hover:underline text-left"
                >
                  Kalkulator Kesehatan
                </button>
              </li>
              <li>
                <Link to="/chat" className="hover:underline"> {/* ✅ Perbaiki route */}
                  Chat Dokter
                </Link>
              </li>
              <li>
                <Link to="/laboratorium" className="hover:underline">
                  Laboratorium
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          {token ? (
            // Jika sudah login → tampilkan tombol Logout
            <button 
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg transition-colors"
            >
              Logout
            </button>
          ) : (
            // Jika belum login → tampilkan "Masuk/Daftar"
            <Link 
              to="/masuk" 
              className="bg-[#FFD700] text-[#003366] font-bold py-2 px-6 rounded-lg hover:bg-[#FFC107] transition-colors"
            >
              Masuk/Daftar
            </Link>
          )}
          <div className="w-8 h-8 bg-white rounded-full"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;