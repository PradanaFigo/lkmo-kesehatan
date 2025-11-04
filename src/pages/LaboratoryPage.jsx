// src/pages/LaboratoryPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const LaboratoryPage = () => {
  const categories = [
    { icon: "/baby-icon.png", title: "Bayi", link: "/laboratorium/bayi" },
    { icon: "/blood-icon.png", title: "Darah", link: "/laboratorium/darah" },
    { icon: "/kidney-icon.png", title: "Ginjal", link: "/laboratorium/ginjal" },
    { icon: "/pregnancy-icon.png", title: "Kehamilan", link: "/laboratorium/kehamilan" },
    { icon: "/lungs-icon.png", title: "Paru", link: "/laboratorium/paru" },
    { icon: "/urine-icon.png", title: "Urine", link: "/laboratorium/urine" },
    { icon: "/liver-icon.png", title: "Hati", link: "/laboratorium/hati" }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section 
        className="relative h-[500px] bg-cover bg-center"
        style={{ backgroundImage: "url('/lab-hero.png')" }}
      >
        <div className="absolute inset-0 bg-blue-900 bg-opacity-60"></div>
        <div className="relative z-10 container mx-auto pt-20 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">INFORMASI LABORATORIUM</h1>
          <p className="text-xl">Tes kesehatan yang akurat dan cepat untuk semua kebutuhan medis Anda.</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-gray-500">Medical Link</h2>
            <h3 className="text-blue-900 text-2xl font-bold mb-4">Tes Laboratorium</h3>
            <p className="text-gray-600 mb-6">
              Pemeriksaan kesehatan dengan menggunakan sampel darah, urine, atau cairan tubuh lainnya yang dapat dimanfaatkan, antara lain untuk tujuan skrining, membantu diagnosis penyakit, memantau perjalanan penyakit dan menentukan prognosis. Jangan biarkan osteoporosis membatasi gerakmu. Periksa kesehatan tulang sejak dini di Medilink. Manfaatkan harga spesial selama bulan Oktober 2025.
            </p>
          </div>

          <h3 className="text-blue-900 text-2xl font-bold mb-8">Tes Berdasarkan Kategori</h3>

          <div className="grid grid-cols-2 md:grid-cols-7 gap-6">
            {categories.map((cat, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto mb-4 w-24 h-24 rounded-full bg-blue-50 flex items-center justify-center">
                  <img 
                    src={cat.icon} 
                    alt={cat.title} 
                    className="w-16 h-16 object-contain"
                  />
                </div>
                <h4 className="text-yellow-500 text-xl font-bold">{cat.title}</h4>
                <Link 
                  to={cat.link} 
                  className="text-gray-600 text-sm hover:underline"
                >
                  Klik disini →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white p-8">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <img src="/medical-link-logo.png" alt="Medilink Logo" className="h-12" />
            </div>
            
            <div className="flex space-x-8 mb-4 md:mb-0">
              <div className="flex items-center space-x-2">
                <img src="/instagram.png" alt="Instagram" className="w-6 h-6" />
                <span>MediLink_Solution</span>
              </div>
              <div className="flex items-center space-x-2">
                <img src="/tiktok.png" alt="TikTok" className="w-6 h-6" />
                <span>MediLink_Solution</span>
              </div>
              <div className="flex items-center space-x-2">
                <img src="/facebook.png" alt="Facebook" className="w-6 h-6" />
                <span>MediLink_Solution</span>
              </div>
              <div className="flex items-center space-x-2">
                <img src="/youtube.png" alt="YouTube" className="w-6 h-6" />
                <span>MediLink_Solution</span>
              </div>
            </div>
            
            <div className="text-center md:text-right">
              <h2 className="text-yellow-400 text-2xl font-bold mb-2">MEDILINK</h2>
              <p className="text-sm mb-2">Satu Klik Menuju Hidup Lebih Sehat</p>
              <p className="text-xs">© Copyright 2025. Medilink Indonesia</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LaboratoryPage;