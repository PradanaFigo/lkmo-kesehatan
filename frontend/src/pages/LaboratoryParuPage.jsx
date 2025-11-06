// src/pages/LaboratoryParuPage.jsx
import React from 'react';
import Footer from '../components/Footer';

const LaboratoryParuPage = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">

      {/* Main Content */}
      <main className="flex-grow container-medilink max-w-6xl mx-auto p-4 sm:p-6 mt-8">
        {/* Judul Halaman */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-yellow-400">INFORMASI LABORATORIUM</h1>
        </div>

        {/* Section: Kategori Paru */}
        <div className="mb-12 flex flex-col md:flex-row items-center gap-6">
          <div className="w-full md:w-1/4 flex justify-center">
            <div className="w-24 h-24 rounded-full bg-[#e6f0ff] flex items-center justify-center shadow-md">
              <img 
                src="/lungs-icon.png" 
                alt="Paru"
                className="w-16 h-16"
              />
            </div>
          </div>
          <div className="w-full md:w-3/4">
            <h2 className="text-xl font-semibold text-[#003366] mb-2">Medical Link</h2>
            <h3 className="text-2xl font-bold text-[#003366] mb-4">Kategori Paru</h3>
            <p className="text-gray-600 leading-relaxed">
              Pemeriksaan kesehatan dengan menggunakan sampel darah, urine atau cairan tubuh lainnya yang dapat dimanfaatkan, antara lain untuk tujuan skrining, membantu diagnosis penyakit, memantau perjalanan penyakit dan menentukan prognosis.
            </p>
          </div>
        </div>

        {/* Section: Jenis Kategori */}
        <h2 className="text-2xl font-bold text-[#003366] mb-6">Jenis Kategori</h2>

        {/* Card 1: BTA (Mikroskopik) */}
        <div className="bg-[#e6f0ff] rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-1/4 flex justify-center">
              <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-md">
                <img 
                  src="/lungs-icon.png" 
                  alt="BTA (Mikroskopik)"
                  className="w-16 h-16"
                />
              </div>
            </div>
            <div className="w-full md:w-3/4">
              <h3 className="text-xl font-bold text-yellow-500 mb-3">BTA (Mikroskopik)</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-bold text-[#003366]">Deskripsi</h4>
                  <p className="text-gray-600">
                    Pemeriksaan BTA adalah prosedur untuk mendeteksi bakteri penyebab penyakit tuberkulosis (TB). Bakteri TB dapat hidup di lingkungan asam, sehingga pemeriksaan terhadap bakteri ini dikenal dengan nama pemeriksaan bakteri tahan asam (BTA).
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-[#003366]">Manfaat Tes</h4>
                  <p className="text-gray-600">
                    Menentukan ada/tidaknya bakteri tahan asam dalam sampel
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-[#003366]">Persiapan Tes</h4>
                  <p className="text-gray-600">
                    Tidak boleh makan dan minum atau menyikat gigi 15–30 menit sebelum melakukan pemeriksaan
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2: Adenosine Deaminase (ADA), Cairan Pleura */}
        <div className="bg-[#e6f0ff] rounded-xl shadow-lg p-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-1/4 flex justify-center">
              <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-md">
                <img 
                  src="/lungs-icon.png" 
                  alt="Adenosine Deaminase (ADA), Cairan Pleura"
                  className="w-16 h-16"
                />
              </div>
            </div>
            <div className="w-full md:w-3/4">
              <h3 className="text-xl font-bold text-yellow-500 mb-3">Adenosine Deaminase (ADA), Cairan Pleura</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-bold text-[#003366]">Deskripsi</h4>
                  <p className="text-gray-600">
                    Adenosine deaminase adalah enzim yang merubah adenosine menjadi inosine dan deoxyadenosine menjadi deoxyinosine pada jalur katabolisme purin dan dengan cara ini mengkatalisis deaminasi yang irreversible. ADA merupakan indikator yang signifikan dari imunitas seluler yang aktif. Konsentrasi ADA serum meningkat pada berbagai penyakit dimana imunitas seluler distimulasi.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-[#003366]">Manfaat Tes</h4>
                  <p className="text-gray-600">
                    Pemeriksaan ADA dilakukan untuk membantu diagnosis TB Pleura
                  </p>
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
      </main>

      {/* Footer Global */}
      <Footer />
    </div>
  );
};

export default LaboratoryParuPage;