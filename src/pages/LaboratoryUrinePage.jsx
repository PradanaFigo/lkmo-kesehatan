import React from 'react';
import Footer from '../components/Footer';

const LaboratoryUrinePage = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">

      {/* Main Content */}
      <main className="flex-grow container-medilink max-w-6xl mx-auto p-4 sm:p-6 mt-8">
        {/* Judul Halaman */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-yellow-400">INFORMASI LABORATORIUM</h1>
        </div>

        {/* Section: Kategori Urine */}
        <div className="mb-12 flex flex-col md:flex-row items-center gap-6">
          <div className="w-full md:w-1/4 flex justify-center">
            <div className="w-24 h-24 rounded-full bg-[#e6f0ff] flex items-center justify-center shadow-md">
              <img 
                src="/urine-icon.png" 
                alt="Urine"
                className="w-16 h-16"
              />
            </div>
          </div>
          <div className="w-full md:w-3/4">
            <h2 className="text-xl font-semibold text-[#003366] mb-2">Medical Link</h2>
            <h3 className="text-2xl font-bold text-[#003366] mb-4">Kategori Urine</h3>
            <p className="text-gray-600 leading-relaxed">
              Pemeriksaan kesehatan dengan menggunakan sampel darah, urine, atau cairan tubuh lainnya yang dapat dimanfaatkan, antara lain untuk tujuan skrining, membantu diagnosis penyakit, memantau perjalanan penyakit dan menentukan prognosis.
            </p>
          </div>
        </div>

        {/* Section: Jenis Kategori */}
        <h2 className="text-2xl font-bold text-[#003366] mb-6">Jenis Kategori</h2>

        {/* Card 1: Urine Rutin */}
        <div className="bg-[#e6f0ff] rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-1/4 flex justify-center">
              <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-md">
                <img 
                  src="/urine-icon.png" 
                  alt="Urine Rutin"
                  className="w-16 h-16"
                />
              </div>
            </div>
            <div className="w-full md:w-3/4">
              <h3 className="text-xl font-bold text-yellow-500 mb-3">Urine Rutin</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-bold text-[#003366]">Deskripsi</h4>
                  <p className="text-gray-600">
                    Pemeriksaan urin rutin meliputi pemeriksaan fisik, kimia, dan mikroskopis untuk mendeteksi dan/atau mengukur beberapa zat dalam urine seperti produk sampingan dari metabolisme yang normal dan abnormal, sel, fragmen sel, dan bakteri. Pemeriksaan urin rutin seringkali menjadi bagian dari pemeriksaan kesehatan berkala (medical check-up), dan direkomendasikan dokter ketika seseorang memiliki gejala seperti sakit perut, nyeri punggung, sering buang air kecil disertai rasa nyeri saat buang air kecil. Pemeriksaan urin rutin membutuhkan sampel berupa urin.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-[#003366]">Manfaat Tes</h4>
                  <p className="text-gray-600">
                    Menyaring, membantu diagnosis, dan/atau memantau beberapa penyakit dan kondisi seperti kelainan ginjal/saluran kemih, gangguan infeksi saluran kemih (ISK), dan penyakit metabolik atau sistemik.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-[#003366]">Persiapan Tes</h4>
                  <ol className="list-decimal list-inside text-gray-600 space-y-1 pl-4">
                    <li>Tidak ada persiapan khusus</li>
                    <li>Pasien tidak dalam keadaan menstruasi</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2: Protein Total (Urine sewaktu) */}
        <div className="bg-[#e6f0ff] rounded-xl shadow-lg p-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-1/4 flex justify-center">
              <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-md">
                <img 
                  src="/urine-icon.png" 
                  alt="Protein Total"
                  className="w-16 h-16"
                />
              </div>
            </div>
            <div className="w-full md:w-3/4">
              <h3 className="text-xl font-bold text-yellow-500 mb-3">Protein Total (Urine sewaktu)</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-bold text-[#003366]">Deskripsi</h4>
                  <p className="text-gray-600">
                    Protein total yang ada pada urin. Jika kadar protein melebihi nilai rujukan maka disebut proteinuria. Pemeriksaan ini dilakukan dengan mengumpulkan urin pasien yang diambil saat itu juga.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-[#003366]">Manfaat Tes</h4>
                  <p className="text-gray-600">
                    Protein urin total bermanfaat untuk mendeteksi protein di dalam urin dan follow up pasien dengan hasil dipstik positif yang persisten.
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

export default LaboratoryUrinePage;