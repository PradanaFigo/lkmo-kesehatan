import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HeartRiskCalculator = () => {
  const [formData, setFormData] = useState({
    gender: '',
    smoker: '',
    weight: '',
    height: '',
    age: '',
    bloodPressure: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validasi minimal
    if (!formData.gender || !formData.smoker || !formData.age || !formData.bloodPressure) {
      alert('Harap lengkapi semua data yang diperlukan.');
      return;
    }

    if (!formData.weight || !formData.height) {
      alert('Berat dan tinggi badan wajib diisi.');
      return;
    }

    let riskScore = 0;

    // Jenis kelamin
    if (formData.gender === 'male') riskScore += 10;

    // Merokok
    if (formData.smoker === 'yes') riskScore += 20;

    // Usia
    const age = parseInt(formData.age);
    if (age > 50) riskScore += 15;

    // Tekanan darah
    if (formData.bloodPressure === 'tinggi') riskScore += 25;
    if (formData.bloodPressure === 'sangat_tinggi') riskScore += 40;

    // BMI
    const weight = parseFloat(formData.weight);
    const height = parseFloat(formData.height);
    const bmi = weight / ((height / 100) ** 2);

    if (bmi > 25) riskScore += 10;
    if (bmi > 30) riskScore += 20;

    // Batasi maksimal 100
    riskScore = Math.min(Math.max(riskScore, 0), 100);

    // Tentukan kategori dan deskripsi
    let riskCategory, riskDescription;
    if (riskScore < 30) {
      riskCategory = "Berisiko Rendah";
      riskDescription = "Risiko jantung Anda termasuk dalam kategori Rendah. Pertahankan gaya hidup sehat dan rutin periksa kesehatan!";
    } else if (riskScore < 70) {
      riskCategory = "Berisiko Sedang";
      riskDescription = "Wah! Risiko jantung Anda termasuk dalam kategori Sedang / Moderate Risk. Ini berarti dalam 5-10 tahun ke depan Anda memiliki risiko 5-19% untuk mengalami sakit jantung. Cegah sejak dini dengan skrining pemeriksaan jantung dan jaga hidup sehat!";
    } else {
      riskCategory = "Berisiko Tinggi";
      riskDescription = "Peringatan! Risiko jantung Anda termasuk dalam kategori Tinggi. Segera konsultasi dengan dokter dan lakukan pemeriksaan lebih lanjut!";
    }

    // Kirim data ke halaman hasil
    navigate('/hasil-risiko-jantung', {
      state: {
        riskPercentage: Math.round(riskScore),
        riskCategory,
        riskDescription,
        // Opsional: simpan data input jika ingin ditampilkan di hasil
        inputSummary: {
          gender: formData.gender === 'male' ? 'Laki-laki' : 'Perempuan',
          smoker: formData.smoker === 'yes' ? 'Ya' : 'Tidak',
          age: formData.age,
          bmi: bmi.toFixed(1)
        }
      }
    });
  };

  return (
    <section className="py-16 bg-[#003366] text-white">
      <div className="container-medilink">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-[#FFD700] text-2xl font-bold mb-2">Hitung Risiko Jantung</h2>
            <h3 className="text-xl mb-6">Medical Link</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block mb-2 text-white">Jenis Kelamin</label>
                <div className="flex space-x-2">
                  <button 
                    type="button" 
                    className={`px-4 py-2 rounded-full border ${formData.gender === 'male' ? 'bg-[#002966]' : 'bg-[#003366]'}`}
                    onClick={() => setFormData({...formData, gender: 'male'})}
                  >
                    Laki-Laki
                  </button>
                  <button 
                    type="button" 
                    className={`px-4 py-2 rounded-full border ${formData.gender === 'female' ? 'bg-[#002966]' : 'bg-[#003366]'}`}
                    onClick={() => setFormData({...formData, gender: 'female'})}
                  >
                    Perempuan
                  </button>
                </div>
              </div>

              <div className="mb-4">
                <label className="block mb-2 text-white">Apakah Anda Merokok?</label>
                <div className="flex space-x-2">
                  <button 
                    type="button" 
                    className={`px-4 py-2 rounded-full border ${formData.smoker === 'yes' ? 'bg-[#002966]' : 'bg-[#003366]'}`}
                    onClick={() => setFormData({...formData, smoker: 'yes'})}
                  >
                    Ya
                  </button>
                  <button 
                    type="button" 
                    className={`px-4 py-2 rounded-full border ${formData.smoker === 'no' ? 'bg-[#002966]' : 'bg-[#003366]'}`}
                    onClick={() => setFormData({...formData, smoker: 'no'})}
                  >
                    Tidak
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block mb-2 text-white">Berat Badan (kg)</label>
                  <input 
                    type="number" 
                    name="weight" 
                    value={formData.weight} 
                    onChange={handleChange} 
                    className="w-full p-2 rounded bg-gray-800 text-white"
                    placeholder="Contoh: 65"
                    min="1"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2 text-white">Tinggi Badan (cm)</label>
                  <input 
                    type="number" 
                    name="height" 
                    value={formData.height} 
                    onChange={handleChange} 
                    className="w-full p-2 rounded bg-gray-800 text-white"
                    placeholder="Contoh: 170"
                    min="1"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block mb-2 text-white">Umur</label>
                  <select 
                    name="age" 
                    value={formData.age} 
                    onChange={handleChange} 
                    className="w-full p-2 rounded bg-gray-800 text-white"
                    required
                  >
                    <option value="">Pilih Umur</option>
                    {[...Array(100).keys()].map(i => (
                      <option key={i+1} value={i+1}>{i+1}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block mb-2 text-white">Tekanan Darah</label>
                  <select 
                    name="bloodPressure" 
                    value={formData.bloodPressure} 
                    onChange={handleChange} 
                    className="w-full p-2 rounded bg-gray-800 text-white"
                    required
                  >
                    <option value="">Pilih Tekanan Darah</option>
                    <option value="normal">Normal</option>
                    <option value="tinggi">Tinggi</option>
                    <option value="sangat_tinggi">Sangat Tinggi</option>
                  </select>
                </div>
              </div>

              <button 
                type="submit" 
                className="w-full p-2 rounded bg-gray-800 hover:bg-gray-700 transition text-white font-medium"
              >
                Lanjut → Hitung Risiko
              </button>
            </form>
          </div>

          <div className="bg-[#002966] p-6 rounded-lg">
            <h2 className="text-[#FFD700] text-2xl font-bold mb-4">Menjaga Kesehatan Jantung: Langkah Sederhana untuk Hidup Lebih Panjang</h2>
            <p className="mb-4">
              Jantung adalah organ yang bekerja tanpa henti — memompa darah ke seluruh tubuh selama 24 jam setiap hari. Karena itu, menjaga kesehatan jantung berarti menjaga hidupmu tetap berjalan dengan baik.
            </p>
            <p>
              Banyak orang baru sadar pentingnya jantung saat muncul gejala seperti cepat lelah, nyeri dada, atau tekanan darah tinggi. Padahal, sebagian besar penyakit jantung bisa dicegah dengan <span style={{ color: '#FFD700' }}>perubahan gaya hidup sederhana.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeartRiskCalculator;