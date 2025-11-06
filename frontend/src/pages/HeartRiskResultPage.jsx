import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const HeartRiskResultPage = () => {
  const location = useLocation();
  const { riskPercentage, riskCategory, riskDescription } = location.state || {};

  // Jika akses langsung tanpa data, redirect ke form
  if (!location.state) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center p-8 bg-white rounded shadow">
          <p className="text-gray-600">Tidak ada data hasil.</p>
          <Link to="/" className="text-blue-500 hover:underline mt-4 block">Kembali ke beranda</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header Khusus Hasil Risiko Jantung */}
      <header className="bg-[#003366] text-white p-4">
        <div className="container-medilink flex justify-between items-center">
          {/* Logo & Tagline */}
          <div className="flex items-center space-x-4">
            <img 
              src="/medical-link-logo.png" 
              alt="Medilink Logo" 
              className="h-12"
            />
            <div>
              <h1 className="text-3xl font-extrabold text-yellow-400">MEDILINK</h1>
              <p className="text-sm">Satu Klik Menuju Hidup Lebih Sehat</p>
            </div>
          </div>

          {/* Judul Halaman */}
          <h2 className="text-3xl font-bold text-yellow-400">HITUNG RESIKO JANTUNG</h2>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container-medilink max-w-4xl mx-auto p-6 mt-8">
        <div className="bg-[#e6f0ff] rounded-xl shadow-lg p-8 text-center">
          {/* Icon Heart */}
          <div className="flex justify-center mb-6">
            <img 
            src="/heart-icon.png" 
            alt="heart icon" 
            className='h-12'
            />
          </div>

          <h3 className="text-gray-500 text-lg mb-2">Risiko Jantung Anda</h3>
          <h2 className="text-2xl font-bold text-yellow-500 mb-4">{riskCategory}</h2>
          <p className="text-[#003366] font-medium mb-6">
            {riskPercentage}% berdasarkan data yang dimasukkan
          </p>

          <p className="text-gray-600 text-sm leading-relaxed mb-8">
            {riskDescription}
          </p>

          <Link 
            to="/"
            className="inline-block w-full max-w-xs mx-auto bg-yellow-400 text-[#003366] font-bold py-3 px-6 rounded-full hover:bg-yellow-500 transition-colors"
          >
            Hitung Ulang
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#003366] text-white p-6 mt-auto">
        <div className="container-medilink max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center space-x-4">
            <img 
              src="/medical-link-logo.png" 
              alt="Medilink Logo" 
              className="h-10"
            />
            <div>
              <h3 className="text-2xl font-extrabold text-yellow-400">MEDILINK</h3>
              <p className="text-xs">Satu Klik Menuju Hidup Lebih Sehat</p>
              <p className="text-xs mt-1">© Copyright 2025. Medilink Indonesia</p>
            </div>
          </div>
          <div className="text-xs text-center md:text-right">
            <p>Ikuti kami di sosial media:</p>
            <p className="mt-1">Instagram | Facebook | TikTok | YouTube</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HeartRiskResultPage;