import React from 'react';
import Footer from '../components/Footer';
import DoctorChatList from '../components/DoctorChatList';

const DokterDashboard = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">

      <main className="flex-grow container-medilink max-w-6xl mx-auto p-6">
        <div className="bg-white rounded-xl shadow-md p-6 mb-6">
          <h1 className="text-2xl font-bold text-[#003366] mb-2">Selamat Datang, Dr. {user.full_name}!</h1>
          <p className="text-gray-600">Dashboard untuk dokter Medilink</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: Daftar Pasien */}
          <div className="bg-[#e6f0ff] rounded-xl p-6">
            <h3 className="text-xl font-bold text-[#003366] mb-2">Pasien Hari Ini</h3>
            <p className="text-gray-600">12 pasien menunggu konsultasi</p>
          </div>

          {/* Card 2: Jadwal Praktik */}
          <div className="bg-[#e6f0ff] rounded-xl p-6">
            <h3 className="text-xl font-bold text-[#003366] mb-2">Jadwal Praktik</h3>
            <p className="text-gray-600">Senin-Jumat: 08.00 - 16.00</p>
          </div>

          {/* Card 3: Artikel Kesehatan */}
          <div className="bg-[#e6f0ff] rounded-xl p-6">
            <h3 className="text-xl font-bold text-[#003366] mb-2">Tulis Artikel</h3>
            <p className="text-gray-600">Bagikan pengetahuan kesehatan Anda</p>
          </div>

          {/* Card 4: Profil */}
          <div className="bg-[#e6f0ff] rounded-xl p-6">
            <h3 className="text-xl font-bold text-[#003366] mb-2">Profil Saya</h3>
            <p className="text-gray-600">Kelola informasi pribadi Anda</p>
          </div>
        </div>
        <DoctorChatList doctorId={user.id} />
      </main>
      <Footer />
    </div>
  );
};

export default DokterDashboard;