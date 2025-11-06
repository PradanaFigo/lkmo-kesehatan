import React from 'react';
import Footer from '../components/Footer';

const LaboratoryKehamilanPage = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">

      {/* Main Content */}
      <main className="flex-grow container-medilink max-w-6xl mx-auto p-4 sm:p-6 mt-8">
        {/* Judul Halaman */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-yellow-400">INFORMASI LABORATORIUM</h1>
        </div>

        {/* Section: Kategori Kehamilan */}
        <div className="mb-12 flex flex-col md:flex-row items-center gap-6">
          <div className="w-full md:w-1/4 flex justify-center">
            <div className="w-24 h-24 rounded-full bg-[#e6f0ff] flex items-center justify-center shadow-md">
              <img 
                src="/pregnancy-icon.png" 
                alt="Kehamilan"
                className="w-16 h-16"
              />
            </div>
          </div>
          <div className="w-full md:w-3/4">
            <h2 className="text-xl font-semibold text-[#003366] mb-2">Medical Link</h2>
            <h3 className="text-2xl font-bold text-[#003366] mb-4">Kategori Kehamilan</h3>
            <p className="text-gray-600 leading-relaxed">
              Pemeriksaan kesehatan dengan menggunakan sampel darah, urine, atau cairan tubuh lainnya yang dapat dimanfaatkan, antara lain untuk tujuan skrining, membantu diagnosis penyakit, memantau perjalanan penyakit dan menentukan prognosis.
            </p>
          </div>
        </div>

        {/* Section: Jenis Kategori */}
        <h2 className="text-2xl font-bold text-[#003366] mb-6">Jenis Kategori</h2>

        {/* Card 1: Anti-Rubella IgM */}
        <div className="bg-[#e6f0ff] rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-1/4 flex justify-center">
              <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-md">
                <img 
                  src="/pregnancy-icon.png" 
                  alt="Anti-Rubella IgM"
                  className="w-16 h-16"
                />
              </div>
            </div>
            <div className="w-full md:w-3/4">
              <h3 className="text-xl font-bold text-yellow-500 mb-3">Anti-Rubella IgM</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-bold text-[#003366]">Deskripsi</h4>
                  <p className="text-gray-600">
                    Virus Rubella sering dikenal sebagai penyebab campak Jerman dan biasanya ditandai dengan munculnya ruam pada kulit. Virus Rubella bisa ditularkan melalui udara dan kontak fisik. Adanya virus Rubella pada wanita hamil, terutama di awal kehamilan, bisa mempengaruhi perkembangan bayi hingga muncul kelainan seperti sindrom Rubella kongenital, penyakit jantung kongenital, katarak, tuli, infeksi telinga, dan retardasi mental. Pemeriksaan Anti-Rubella IgM mendeteksi antibodi IgM terhadap virus Rubella. Antibodi IgM merupakan antibodi yang pertama kali muncul di dalam darah bila infeksi terjadi dan akan menghilang dalam beberapa bulan.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-[#003366]">Manfaat Tes</h4>
                  <p className="text-gray-600">
                    Pemeriksaan ini bermanfaat untuk skrining infeksi akut/baru, karena anti Rubella IgM muncul 2–3 hari setelah ruam muncul lalu meningkat pada minggu 1 hingga 4. Namun anti Rubella IgM yang persisten (menetap hingga lebih dari 6 bulan) tidak dapat digunakan untuk menentukan adanya infeksi akut.
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

        {/* Card 2: Anti-HSV1 IgG */}
        <div className="bg-[#e6f0ff] rounded-xl shadow-lg p-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-1/4 flex justify-center">
              <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-md">
                <img 
                  src="/pregnancy-icon.png" 
                  alt="Anti-HSV1 IgG"
                  className="w-16 h-16"
                />
              </div>
            </div>
            <div className="w-full md:w-3/4">
              <h3 className="text-xl font-bold text-yellow-500 mb-3">Anti-HSV1 IgG</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-bold text-[#003366]">Deskripsi</h4>
                  <p className="text-gray-600">
                    Herpes Simplex Virus tipe 1 (HSV1) atau oral herpes merupakan infeksi herpes yang sering terjadi pada sekitar mulut dan wajah, ditandai dengan adanya cold sores dan fever blisters. Infeksi HSV1 dapat ditularkan melalui kontak langsung, dan infeksi ini akan menetap seumur hidup. Sebagian dari HSV1 juga dapat menyerang genital (alat kelamin atau daerah anal). Pemeriksaan Anti-HSV1 IgG mendeteksi antibodi IgG terhadap HSV1. Antibodi IgG merupakan antibodi yang muncul setelah IgM dan bisa menetap seumur hidup. Pemeriksaan Anti-HSV1 membutuhkan sampel darah yang diambil dari pembuluh darah vena di lengan.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-[#003366]">Manfaat Tes</h4>
                  <p className="text-gray-600">
                    Pemeriksaan ini bermanfaat untuk mengetahui adanya infeksi lampau, namun peningkatan anti HSV1 IgG yang signifikan dalam interval waktu tertentu mengindikasikan adanya infeksi aktif atau infeksi baru. IgG negatif menunjukkan bahwa seseorang belum pernah terpapar HSV atau tubuhnya belum mampu memproduksi antibodi HSV.
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

export default LaboratoryKehamilanPage;