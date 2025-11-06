// src/pages/ChatDokterPage.jsx (sudah benar)
import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const ChatDokterPage = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">

      {/* Hero Section */}
      <section 
        className="relative h-[500px] bg-cover bg-center"
        style={{ backgroundImage: "url('/chat-hero.png')" }}
      >
        <div className="absolute inset-0 bg-blue-900 bg-opacity-60"></div>
        <div className="relative z-10 container-medilink mx-auto pt-20 text-white text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">HUBUNGI DOKTER</h1>
          <p className="text-xl">Konsultasi kesehatan kapan saja, di mana saja.</p>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-grow container-medilink max-w-6xl mx-auto p-4 sm:p-6 mt-8">
        {/* Breadcrumb / Category */}
        <div className="mb-4">
          <span className="text-gray-500">Medical Link</span>
          <h2 className="text-2xl font-bold text-[#003366] mb-2">Chat Dokter</h2>
        </div>

        {/* Why Chat Doctor? */}
        <h3 className="text-2xl font-bold text-[#003366] mb-4">Mengapa Harus Chat Dokter di Medical Link?</h3>
        <p className="text-gray-600 mb-8 leading-relaxed">
          Memilih Tanya Dokter Medical Link akan mempertemukan kamu dengan tenaga medis profesional secara cepat. Tidak perlu repot mencari dokter terdekat dan harus keluar rumah. Medical Link memastikan kamu mendapatkan pelayanan terbaik dari tim dokter di Indonesia yang terhubung langsung dari halaman website. Fasilitas ini bisa kamu gunakan untuk menjawab berbagai masalah kesehatan yang sering dialami. Kamu bisa melakukan konsultasi dan diskusi kesehatan dengan dokter dan menanyakan rekomendasi obat.
        </p>

        {/* Chat Card */}
        <div className="bg-[#e6f0ff] rounded-xl shadow-lg p-6 max-w-md mx-auto text-center">
          <div className="flex items-center justify-center space-x-4 mb-4">
            {/* Ikon Dokter */}
            <img 
              src="/dokter.png" 
              alt="Dokter"
              className="w-24 h-24 object-contain"
            />
            <div className="text-left">
              <h3 className="text-xl font-bold text-[#003366]">Chat Dokter Sekarang</h3>
              <p className="text-gray-600 text-sm">MediLink Hospital</p>
            </div>
          </div>
          <hr className="my-4 border-gray-300" />
          <Link 
            to="/chat-room" 
            className="inline-block px-6 py-2 bg-[#003366] text-white font-bold rounded-lg hover:bg-[#002966] transition-colors"
          >
            Chat
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ChatDokterPage;