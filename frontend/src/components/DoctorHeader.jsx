import React from 'react';
import { useNavigate } from 'react-router-dom';

const DoctorHeader = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <header className="bg-[#003366] text-white">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo dan Identitas Dokter */}
          <div className="flex items-center space-x-4">
            <h1 className="text-xl font-bold">MediLink</h1>
            <div className="flex items-center">
              <span className="bg-blue-500 text-white text-sm px-2 py-1 rounded">Dokter</span>
            </div>
          </div>

          {/* Profil dan Logout */}
          <div className="flex items-center space-x-6">
            {/* Nama Dokter */}
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white font-semibold">
                  {user?.full_name?.charAt(0) || 'D'}
                </span>
              </div>
              <span className="font-medium">{user?.full_name || 'Dokter'}</span>
            </div>

            {/* Tombol Logout */}
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors duration-200"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DoctorHeader;