import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulasi login berhasil
    alert(`Login berhasil sebagai ${formData.username}!`);
    navigate('/'); // Kembali ke halaman utama
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#003366] to-[#e6f0ff] p-4">
      {/* Header */}
      {/* Header Medilink Style */}
<div className="bg-[#003366] text-white p-6 mb-8 rounded-xl shadow-md mx-auto max-w-5xl">
  <div className="flex justify-center items-center space-x-4">
    {/* Logo */}
    <img 
      src="/medical-link-logo.png" 
      alt="Medilink Logo" 
      className="h-12 md:h-16"
    />
    {/* Teks MEDILINK + Tagline */}
    <div className="text-left">
      <h1 className="text-3xl md:text-4xl font-extrabold text-yellow-400">MEDILINK</h1>
      <p className="text-sm md:text-base mt-1 text-white">Satu Klik Menuju Hidup Lebih Sehat</p>
    </div>
  </div>
</div>

      {/* Main Content */}
      <div className="container-medilink max-w-5xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          
          {/* Left Side - Welcome */}
          <div className="bg-[#b8c9e7] p-8 flex flex-col items-center justify-center space-y-6">
            <div className="w-20 h-20 bg-[#003366] rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" viewBox="0 0 16 16">
                <path d="M8 8a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"/>
                <path d="M11 7.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
              </svg>
            </div>
            <h2 className="text-[#003366] text-2xl font-bold text-center">Selamat Datang Kembali!</h2>
            <p className="text-[#003366] text-center">Belum punya akun?</p>
            <Link 
              to="/daftar" 
              className="bg-[#003366] text-white font-bold py-3 px-6 rounded-lg hover:bg-[#002966] transition-colors"
            >
              DAFTAR
            </Link>
          </div>

          {/* Right Side - Form */}
          <div className="p-8">
            <div className="flex justify-end mb-6">
              <button 
                onClick={() => navigate('/')}
                className="bg-[#e6f0ff] text-[#003366] font-bold py-2 px-6 rounded-lg hover:bg-[#cbd5e1] transition-colors"
              >
                MASUK
              </button>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label className="block text-[#003366] font-medium mb-2">Username*</label>
                <input 
                  type="text" 
                  name="username" 
                  value={formData.username} 
                  onChange={handleChange} 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003366]"
                  placeholder="Masukkan username"
                  required
                />
              </div>

              <div className="mb-6">
                <label className="block text-[#003366] font-medium mb-2">Password*</label>
                <input 
                  type="password" 
                  name="password" 
                  value={formData.password} 
                  onChange={handleChange} 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003366]"
                  placeholder="Masukkan password"
                  required
                />
              </div>

              <button 
                type="submit" 
                className="w-full bg-[#003366] text-white font-bold py-3 px-6 rounded-lg hover:bg-[#002966] transition-colors"
              >
                Selesai
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-8 text-center text-white text-sm">
        © Copyright 2025. Medilink Indonesia
      </footer>
    </div>
  );
};

export default LoginPage;