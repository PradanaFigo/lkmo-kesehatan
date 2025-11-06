// src/pages/LaboratoryHatiPage.jsx
import React from 'react';
import Footer from '../components/Footer';

const LaboratoryHatiPage = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">

      {/* Main Content */}
      <main className="flex-grow container-medilink max-w-6xl mx-auto p-4 sm:p-6 mt-8">
        {/* Judul Halaman */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-yellow-400">INFORMASI LABORATORIUM</h1>
        </div>

        {/* Section: Kategori Hati */}
        <div className="mb-12 flex flex-col md:flex-row items-center gap-6">
          <div className="w-full md:w-1/4 flex justify-center">
            <div className="w-24 h-24 rounded-full bg-[#e6f0ff] flex items-center justify-center shadow-md">
              <img 
                src="/liver-icon.png" 
                alt="Hati"
                className="w-16 h-16"
              />
            </div>
          </div>
          <div className="w-full md:w-3/4">
            <h2 className="text-xl font-semibold text-[#003366] mb-2">Medical Link</h2>
            <h3 className="text-2xl font-bold text-[#003366] mb-4">Kategori Hati</h3>
            <p className="text-gray-600 leading-relaxed">
              Pemeriksaan kesehatan dengan menggunakan sampel darah, urine, atau cairan tubuh lainnya yang dapat dimanfaatkan, antara lain untuk tujuan skrining, membantu diagnosis penyakit, memantau perjalanan penyakit dan menentukan prognosis.
            </p>
          </div>
        </div>

        {/* Section: Jenis Kategori */}
        <h2 className="text-2xl font-bold text-[#003366] mb-6">Jenis Kategori</h2>

        {/* Card 1: Anti-HCV */}
        <div className="bg-[#e6f0ff] rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-1/4 flex justify-center">
              <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-md">
                <img 
                  src="/liver-icon.png" 
                  alt="Anti-HCV"
                  className="w-16 h-16"
                />
              </div>
            </div>
            <div className="w-full md:w-3/4">
              <h3 className="text-xl font-bold text-yellow-500 mb-3">Anti-HCV</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-bold text-[#003366]">Deskripsi</h4>
                  <p className="text-gray-600">
                    Anti-HCV dapat terdeteksi pada 60% pasiens elama fase akut infeksi. Anti-HCV dapat terdeteksi beberapa minggu atau beberapa bulan kemudian pada 35% pasien. Pada populasi pasien kurang dari 5%, anti-HCV tidak berkembang (persentase lebih tinggi terjadi pada pasien dengan infeksi HIV).
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-[#003366]">Manfaat Tes</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1 pl-4">
                    <li>Pemeriksaan untuk deteksi anti-HCV dapat</li>
                    <li>Digunakan baik untuk skrining maupun untuk</li>
                    <li>Diagnosis infeksi HCV.</li>
                    <li>Pemeriksaan anti-HCV tidak menunjukkan infeksi</li>
                    <li>Akut, kronik atau sudah sembuh</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-[#003366]">Persiapan Tes</h4>
                  <p className="text-gray-600">
                    Tidak ada persiapan khusus
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2: CHE */}
        <div className="bg-[#e6f0ff] rounded-xl shadow-lg p-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-1/4 flex justify-center">
              <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-md">
                <img 
                  src="/liver-icon.png" 
                  alt="CHE"
                  className="w-16 h-16"
                />
              </div>
            </div>
            <div className="w-full md:w-3/4">
              <h3 className="text-xl font-bold text-yellow-500 mb-3">CHE</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-bold text-[#003366]">Deskripsi</h4>
                  <p className="text-gray-600">
                    CHE menghidrolisis asetilkolin dan kolin ester lain sehingga meregulasi transmisi impuls saraf pada sinaps saraf dan neuromuscular junction. Terdapat 2 jenis cholinesterase yaitu Asetilkolinesterase dan pseudokolinesterase. Asetilkolinesterase berada terutama dalam sel darah merah dan jaringan saraf sedangkan pseudokolinesterase berada dalam serum. Defisiensi kedua enzim tersebut dapat bersifat dapat atau bawaan. Succinylcholine diinaktivasi oleh pseudocholinesterase. Pasien dengan defisiensi enzim pseudocholinesterase dapat mengalami peningkatan dan efek succinylcholine yang lebih lama (paralisis dan apnea lebih lama).
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-[#003366]">Manfaat Tes</h4>
                  <p className="text-gray-600">
                    Pemeriksaan CHE plasma bermanfaat untuk mengidentifikasi paparan oleh karena organofosfat atau insektisida karbamat. Pemeriksaan CHE juga dapat digunakan sebelum melakukan anestesi dengan succinylcholine (relaksan otot) untuk menyingkirkan kelainan genetis defisiensi CHE. Hal ini biasa dilakukan pada individu yang mempunyai riwayat keluarga dengan efek anestesi yang lama.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-[#003366]">Persiapan Tes</h4>
                  <p className="text-gray-600">
                    Hentikan konsumsi obat – obatan 12–24 jam sebelum pemeriksaan
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer Global */}
      <Footer />
    </div>
  );
};

export default LaboratoryHatiPage;