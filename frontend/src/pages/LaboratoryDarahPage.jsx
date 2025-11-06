import React from 'react';
import Footer from '../components/Footer';

const LaboratoryDarahPage = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">

      {/* Main Content */}
      <main className="flex-grow container-medilink max-w-6xl mx-auto p-4 sm:p-6 mt-8">
        {/* Judul Halaman */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-yellow-400">INFORMASI LABORATORIUM</h1>
        </div>

        {/* Section: Kategori Darah */}
        <div className="mb-12 flex flex-col md:flex-row items-center gap-6">
          <div className="w-full md:w-1/4 flex justify-center">
            <div className="w-24 h-24 rounded-full bg-[#e6f0ff] flex items-center justify-center shadow-md">
              <img 
                src="/blood-icon.png" 
                alt="Darah"
                className="w-16 h-16"
              />
            </div>
          </div>
          <div className="w-full md:w-3/4">
            <h2 className="text-xl font-semibold text-[#003366] mb-2">Medical Link</h2>
            <h3 className="text-2xl font-bold text-[#003366] mb-4">Kategori Darah</h3>
            <p className="text-gray-600 leading-relaxed">
              Pemeriksaan kesehatan dengan menggunakan sampel darah, urine, atau cairan tubuh lainnya yang dapat dimanfaatkan, antara lain untuk tujuan skrining, membantu diagnosis penyakit, memantau perjalanan penyakit dan menentukan prognosis.
            </p>
          </div>
        </div>

        {/* Section: Jenis Kategori */}
        <h2 className="text-2xl font-bold text-[#003366] mb-6">Jenis Kategori</h2>

        {/* Card 1: ACA IgD */}
        <div className="bg-[#e6f0ff] rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-1/4 flex justify-center">
              <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-md">
                <img 
                  src="/blood-icon.png" 
                  alt="ACA IgD"
                  className="w-16 h-16"
                />
              </div>
            </div>
            <div className="w-full md:w-3/4">
              <h3 className="text-xl font-bold text-yellow-500 mb-3">ACA IgD</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-bold text-[#003366]">Deskripsi</h4>
                  <p className="text-gray-600">
                    Pemeriksaan ACA mendeteksi adanya ACA dalam darah yang umumnya dilakukan pada seseorang yang mengalami satu atau lebih pembekuan darah vena atau arteri (thrombotic episodes) yang tidak dapat dijelaskan; ketika seorang wanita mengalami keguguran berulang, terutama pada trimester kedua dan ketika; ketika seseorang mengalami gejala penyakit autoimun yang konsisten. Terdapat tiga kelas ACA yang mungkin ada dalam darah, yakni IgG, IgM, dan/atau IgA. Dua kelas ACA yang paling umum diperiksa adalah IgG dan IgM. Jika hasil pemeriksaan ACA IgG dan IgM negatif namun masih ada kecurigaan klinis, maka akan dilanjutkan ke pemeriksaan ACA IgA.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-[#003366]">Manfaat Tes</h4>
                  <p className="text-gray-600">
                    Tes untuk antibodi kardiolipin sering digunakan untuk membantu menentukan penyebab:
                    <ol className="list-decimal list-inside ml-4 space-y-1 mt-1">
                      <li>Penggumpalan darah yang tidak diketahui (episode trombotik)</li>
                      <li>Evaluasi untuk sindrom antiphospholipid atau penyakit autoimun lainnya</li>
                      <li>Evaluasi keguguran berulang</li>
                    </ol>
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

        {/* Card 2: CD 34 */}
        <div className="bg-[#e6f0ff] rounded-xl shadow-lg p-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-1/4 flex justify-center">
              <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-md">
                <img 
                  src="/blood-icon.png" 
                  alt="CD 34"
                  className="w-16 h-16"
                />
              </div>
            </div>
            <div className="w-full md:w-3/4">
              <h3 className="text-xl font-bold text-yellow-500 mb-3">CD 34</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-bold text-[#003366]">Deskripsi</h4>
                  <p className="text-gray-600">
                    CD34 merupakan salah satu protein yang terdapat dimakhluk hidup seperti manusia, tikus, mencit, dan spesies lainnya. Meskipun terdapat dalam tubuh, seperti pada sumsum tulang, lapisan pmebuluh darah dan sel-sel tertentu, CD34 juga terdapat di beberapa jenis sel tumor.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-[#003366]">Manfaat Tes</h4>
                  <p className="text-gray-600">
                    Pemeriksaan untuk mengetahui jenis tumor
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

export default LaboratoryDarahPage;