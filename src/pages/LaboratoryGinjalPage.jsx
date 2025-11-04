// src/pages/LaboratoryGinjalPage.jsx
import React from 'react';
import Footer from '../components/Footer';

const LaboratoryGinjalPage = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">

      {/* Main Content */}
      <main className="flex-grow container-medilink max-w-6xl mx-auto p-4 sm:p-6 mt-8">
        {/* Judul Halaman */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-yellow-400">INFORMASI LABORATORIUM</h1>
        </div>

        {/* Section: Kategori Ginjal */}
        <div className="mb-12 flex flex-col md:flex-row items-center gap-6">
          <div className="w-full md:w-1/4 flex justify-center">
            <div className="w-24 h-24 rounded-full bg-[#e6f0ff] flex items-center justify-center shadow-md">
              <img 
                src="/kidney-icon.png" 
                alt="Ginjal"
                className="w-16 h-16"
              />
            </div>
          </div>
          <div className="w-full md:w-3/4">
            <h2 className="text-xl font-semibold text-[#003366] mb-2">Medical Link</h2>
            <h3 className="text-2xl font-bold text-[#003366] mb-4">Kategori Ginjal</h3>
            <p className="text-gray-600 leading-relaxed">
              Pemeriksaan ginjal dilakukan untuk menilai fungsi dan kesehatan organ ginjal dalam menyaring limbah dan mengatur keseimbangan cairan serta elektrolit tubuh. Pemeriksaan ini penting untuk mendeteksi gangguan seperti gagal ginjal, infeksi, atau kerusakan akibat penyakit kronis seperti diabetes dan hipertensi.
            </p>
          </div>
        </div>

        {/* Section: Jenis Kategori */}
        <h2 className="text-2xl font-bold text-[#003366] mb-6">Jenis Kategori</h2>

        {/* Card 1: Asam Urat Urine */}
        <div className="bg-[#e6f0ff] rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-1/4 flex justify-center">
              <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-md">
                <img 
                  src="/kidney-icon.png" 
                  alt="Asam Urat Urine"
                  className="w-16 h-16"
                />
              </div>
            </div>
            <div className="w-full md:w-3/4">
              <h3 className="text-xl font-bold text-yellow-500 mb-3">Asam Urat Urine</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-bold text-[#003366]">Deskripsi</h4>
                  <p className="text-gray-600">
                    Asam urat diproduksi pada saat terjadi pemecahan purin. Purin merupakan senyawa yang mengandung nitrogen yang ditemukan dalam sel-sel tubuh, termasuk DNA. Ketika sel-sel tubuh tersebut menjadi tua dan mati akan melakukan pemecahan dan melepaskan purin dalam darah. Pada kadar yang rendah, purin mungkin berasal dari pencernaan makanan tertentu, seperti hati, ikan asin, makarel, kacang olahan dan kacang polong, serta minuman beralkohol tertentu, terutama bir. Sebagian besar asam urat dikeluarkan dari tubuh oleh ginjal dan diekskresikan dalam urin, sisanya dieliminasi dalam feses. Pemeriksaan asam urat urin mengukur kadar asam urat dalam urin. Asam urat berlebih dapat disimpan dalam jaringan seperti ginjal, dan dapat mengakibatkan terjadinya batu ginjal atau gagal ginjal.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-[#003366]">Manfaat Tes</h4>
                  <p className="text-gray-600">
                    Untuk mendeteksi kadar asam urat yang tinggi dalam urin, yang digunakan untuk membantu diagnosis penyebab batu ginjal dan untuk memantau mereka yang menderita Gout yang merupakan risiko terbentuknya batu tersebut.
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

        {/* Card 2: Urea N */}
        <div className="bg-[#e6f0ff] rounded-xl shadow-lg p-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-1/4 flex justify-center">
              <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-md">
                <img 
                  src="/kidney-icon.png" 
                  alt="Urea N"
                  className="w-16 h-16"
                />
              </div>
            </div>
            <div className="w-full md:w-3/4">
              <h3 className="text-xl font-bold text-yellow-500 mb-3">Urea N</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-bold text-[#003366]">Deskripsi</h4>
                  <p className="text-gray-600">
                    Pemeriksaan ini menggunakan sampel darah. Urea N merupakan produk akhir dari metabolisme protein, urea disintesis oleh hati. Urea N mudah difiltrasi oleh ginjal. Urea Nitrogen mencerminkan perbandingan antara produksi dan klirens urea. BUN dapat tinggi pada keadaan penyakit ginjal akut maupun kronik.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-[#003366]">Manfaat Tes</h4>
                  <p className="text-gray-600">
                    Urea N digunakan untuk uji fungsi ginjal bersama dengan kreatinin. BUN berguna dalam pemantauan hemodialisis dan terapi lain. Perbandingan BUN: kreatinin digunakan untuk membedakan adanya pre renal failure, intrinsic failure ataukah obstruksi.
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

export default LaboratoryGinjalPage;