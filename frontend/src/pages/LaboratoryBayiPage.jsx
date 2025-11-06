import React from 'react';
import Footer from '../components/Footer';

const LaboratoryBayiPage = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">

      {/* Main Content */}
      <main className="flex-grow container-medilink max-w-6xl mx-auto p-4 sm:p-6 mt-8">
        {/* Judul Halaman */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-yellow-400">INFORMASI LABORATORIUM</h1>
        </div>

        {/* Section: Kategori Bayi */}
        <div className="mb-12 flex flex-col md:flex-row items-center gap-6">
          <div className="w-full md:w-1/4 flex justify-center">
            <div className="w-24 h-24 rounded-full bg-[#e6f0ff] flex items-center justify-center shadow-md">
              <img 
                src="/baby-icon.png" // ganti dengan path gambar Anda
                alt="Bayi"
                className="w-16 h-16"
              />
            </div>
          </div>
          <div className="w-full md:w-3/4">
            <h2 className="text-xl font-semibold text-[#003366] mb-2">Medical Link</h2>
            <h3 className="text-2xl font-bold text-[#003366] mb-4">Kategori Bayi</h3>
            <p className="text-gray-600 leading-relaxed">
              Pemeriksaan kesehatan dengan menggunakan sampel darah, urine, atau cairan tubuh lainnya yang dapat dimanfaatkan, antara lain untuk tujuan skrining, membantu diagnosis penyakit, memantau perjalanan penyakit dan menentukan prognosis.
            </p>
          </div>
        </div>

        {/* Section: Jenis Kategori */}
        <h2 className="text-2xl font-bold text-[#003366] mb-6">Jenis Kategori</h2>

        {/* Card 1: G6PD Neonatus */}
        <div className="bg-[#e6f0ff] rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-1/4 flex justify-center">
              <div className="w-24 h-24 rounded-full bg-[#ffffff] flex items-center justify-center shadow-md">
                <img 
                  src="/baby-icon.png" 
                  alt="G6PD"
                  className="w-16 h-16"
                />
              </div>
            </div>
            <div className="w-full md:w-3/4">
              <h3 className="text-xl font-bold text-yellow-500 mb-2">G6PD Neonatus</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-[#003366]">Deskripsi</h4>
                  <p className="text-gray-600">
                    G6PD merupakan enzim yang berperan dalam proses pembentukan dan perombakan sel darah merah. G6PD dapat mencegah hemolisis pada eritrosit. Kelainan enzim G6PD menyebabkan proses pembentukan dan perombakan sel darah merah menjadi tidak normal dan sel darah mudah pecah (hemolitik).
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-[#003366]">Manfaat Tes</h4>
                  <p className="text-gray-600">
                    Pemeriksaan ini mendeteksi defisiensi G6PD pada bayi baru lahir yang dapat menyebabkan anemia hemolitik.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-[#003366]">Persiapan Tes</h4>
                  <ol className="list-decimal list-inside text-gray-600 space-y-1">
                    <li>Tidak ada persiapan khusus</li>
                    <li>Sampel diambil pada bayi berumur 48–72 jam atau maksimal 28 hari</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2: TSH Neonatus */}
        <div className="bg-[#e6f0ff] rounded-xl shadow-lg p-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-1/4 flex justify-center">
              <div className="w-24 h-24 rounded-full bg-[#ffffff] flex items-center justify-center shadow-md">
                <img 
                  src="/baby-icon.png" 
                  alt="TSH"
                  className="w-16 h-16"
                />
              </div>
            </div>
            <div className="w-full md:w-3/4">
              <h3 className="text-xl font-bold text-yellow-500 mb-2">TSH Neonatus</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-[#003366]">Deskripsi</h4>
                  <p className="text-gray-600">
                    Thyroid-stimulating hormone (TSH) adalah hormon yang berfungsi merangsang kelenjar tiroid untuk memproduksi hormon thyroxine (T4) dan triiodothyronine (T3). Fungsi TSH dipengaruhi oleh thyrotropin releasing hormone (TRH) yang dihasilkan oleh hipotalamus untuk mempertahankan konsentrasi yang stabil dari hormon tiroid dalam darah.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-[#003366]">Manfaat Tes</h4>
                  <p className="text-gray-600">
                    TSH Neonatus merupakan pemeriksaan untuk skrining yang efektif untuk menunjukkan fungsi tiroid neonatus (hipotiroid kongenital) pada bayi baru lahir. Interpretasinya akan lebih baik apabila dikombinasikan dengan T4, karena kadar TSH selalu meningkat pada hipotiroidisme primer dan bahkan pada pasien dengan kadar T4 yang masih di dalam rentang normal.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-[#003366]">Persiapan Tes</h4>
                  <ol className="list-decimal list-inside text-gray-600 space-y-1">
                    <li>Tidak ada persiapan khusus</li>
                    <li>Sampel diambil pada bayi berumur 48–72 jam atau maksimal 28 hari</li>
                  </ol>
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

export default LaboratoryBayiPage;