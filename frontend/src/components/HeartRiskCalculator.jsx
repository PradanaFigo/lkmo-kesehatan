import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";

const pill =
  "px-6 py-2 rounded-full border-2 text-sm font-medium transition-all duration-200 " +
  "hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/40";
const inputBase =
  "w-full px-4 py-3 rounded-md outline-none transition-all placeholder-slate-400";
const inputLight =
  inputBase + " bg-white text-slate-900 border border-slate-200 focus:border-[#0F3D73]";

const HeartRiskCalculator = () => {
  const [formData, setFormData] = useState({
    gender: "",
    smoker: "",
    weight: "",
    height: "",
    age: "",
    bloodPressure: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const disabled = useMemo(() => {
    const { gender, smoker, weight, height, age, bloodPressure } = formData;
    return !gender || !smoker || !weight || !height || !age || !bloodPressure;
  }, [formData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (disabled) return;

    let riskScore = 0;

    if (formData.gender === "male") riskScore += 10;
    if (formData.smoker === "yes") riskScore += 20;

    const age = parseInt(formData.age);
    if (age > 50) riskScore += 15;

    if (formData.bloodPressure === "tinggi") riskScore += 25;
    if (formData.bloodPressure === "sangat_tinggi") riskScore += 40;

    const weight = parseFloat(formData.weight);
    const height = parseFloat(formData.height);
    const bmi = weight / (height / 100) ** 2;

    if (bmi > 25) riskScore += 10;
    if (bmi > 30) riskScore += 20;

    riskScore = Math.min(Math.max(riskScore, 0), 100);

    let riskCategory, riskDescription;
    if (riskScore < 30) {
      riskCategory = "Berisiko Rendah";
      riskDescription =
        "Risiko jantung Anda termasuk kategori Rendah. Pertahankan gaya hidup sehat dan rutin periksa!";
    } else if (riskScore < 70) {
      riskCategory = "Berisiko Sedang";
      riskDescription =
        "Risiko kategori Sedang. Dalam 5–10 tahun ke depan ada kemungkinan 5–19% mengalami sakit jantung. Mulai skrining dan jaga pola hidup!";
    } else {
      riskCategory = "Berisiko Tinggi";
      riskDescription =
        "Kategori Tinggi. Segera konsultasi dengan dokter dan lakukan pemeriksaan lanjutan.";
    }

    navigate("/hasil-risiko-jantung", {
      state: {
        riskPercentage: Math.round(riskScore),
        riskCategory,
        riskDescription,
        inputSummary: {
          gender: formData.gender === "male" ? "Laki-laki" : "Perempuan",
          smoker: formData.smoker === "yes" ? "Ya" : "Tidak",
          age: formData.age,
          bmi: bmi.toFixed(1),
        },
      },
    });
  };

  return (
    <div className="grid md:grid-cols-[40%_60%] min-h-screen">
      {/* KIRI: panel form biru */}
      <div className="bg-[#0F3D73] text-white p-8 lg:p-16 flex flex-col justify-center">
        <h2 className="text-[#FFD84D] text-3xl font-bold mb-2">
          Hitung Risiko Jantung
        </h2>
        <p className="text-white/80 mb-10 text-base">Medical Link</p>

        <div className="space-y-5">
          {/* Gender */}
          <div>
            <label className="block mb-2 text-white text-sm">Jenis Kelamin</label>
            <div className="flex gap-4">
              <button
                type="button"
                className={
                  pill +
                  " border-white " +
                  (formData.gender === "male"
                    ? " bg-white text-[#0F3D73]"
                    : " bg-transparent text-white")
                }
                onClick={() => setFormData({ ...formData, gender: "male" })}
              >
                Laki-Laki
              </button>
              <button
                type="button"
                className={
                  pill +
                  " border-white " +
                  (formData.gender === "female"
                    ? " bg-white text-[#0F3D73]"
                    : " bg-transparent text-white")
                }
                onClick={() => setFormData({ ...formData, gender: "female" })}
              >
                Perempuan
              </button>
            </div>
          </div>

          {/* Smoker */}
          <div>
            <label className="block mb-2 text-white text-sm">
              Apakah Anda Merokok?
            </label>
            <div className="flex gap-4">
              <button
                type="button"
                className={
                  pill +
                  " border-white " +
                  (formData.smoker === "yes"
                    ? " bg-white text-[#0F3D73]"
                    : " bg-transparent text-white")
                }
                onClick={() => setFormData({ ...formData, smoker: "yes" })}
              >
                Ya
              </button>
              <button
                type="button"
                className={
                  pill +
                  " border-white " +
                  (formData.smoker === "no"
                    ? " bg-white text-[#0F3D73]"
                    : " bg-transparent text-white")
                }
                onClick={() => setFormData({ ...formData, smoker: "no" })}
              >
                Tidak
              </button>
            </div>
          </div>

          {/* Inputs */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-2 text-white text-sm">Berat Badan</label>
              <input
                type="number"
                name="weight"
                value={formData.weight}
                onChange={handleChange}
                placeholder="Contoh: 65"
                min="1"
                className={inputLight}
              />
            </div>
            <div>
              <label className="block mb-2 text-white text-sm">Tinggi Badan</label>
              <input
                type="number"
                name="height"
                value={formData.height}
                onChange={handleChange}
                placeholder="Contoh: 170"
                min="1"
                className={inputLight}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-2 text-white text-sm">Umur</label>
              <select
                name="age"
                value={formData.age}
                onChange={handleChange}
                className={inputLight}
              >
                <option value="">Pilih Umur</option>
                {[...Array(100).keys()].map((i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block mb-2 text-white text-sm">
                Tekanan Darah
              </label>
              <select
                name="bloodPressure"
                value={formData.bloodPressure}
                onChange={handleChange}
                className={inputLight}
              >
                <option value="">Pilih Tekanan Darah</option>
                <option value="normal">Normal</option>
                <option value="tinggi">Tinggi</option>
                <option value="sangat_tinggi">Sangat Tinggi</option>
              </select>
            </div>
          </div>

          <button
            type="button"
            disabled={disabled}
            onClick={handleSubmit}
            className={
              "w-full py-3 rounded-md font-semibold text-base transition-all mt-6 " +
              (disabled
                ? "bg-slate-400 text-slate-600 cursor-not-allowed"
                : "bg-[#FFD84D] text-[#0F3D73] hover:bg-[#FFC800]")
            }
          >
            Lanjut
          </button>
        </div>
      </div>

      {/* KANAN: panel info */}
      <div className="bg-[#E8ECF3] p-8 lg:p-16 flex flex-col justify-center">
        <div>
          <h3 className="text-3xl lg:text-4xl font-bold text-[#0F3D73] leading-tight mb-6">
            Menjaga Kesehatan{" "}
            <span className="text-[#FFD84D]">Jantung</span>: Langkah Sederhana
            untuk Hidup Lebih Panjang
          </h3>
          <p className="text-slate-700 leading-relaxed mb-5 text-base">
            Jantung adalah organ yang bekerja tanpa henti—memompa darah ke
            seluruh tubuh selama 24 jam setiap hari. Karena itu, menjaga
            kesehatan jantung berarti menjaga hidupmu tetap berjalan dengan baik.
          </p>
          <p className="text-slate-700 leading-relaxed text-base">
            Banyak orang baru sadar pentingnya{" "}
            <span className="text-[#FFD84D] font-semibold">jantung</span> saat
            muncul gejala seperti cepat lelah, nyeri dada, atau tekanan darah
            tinggi. Padahal, sebagian besar penyakit jantung bisa dicegah dengan{" "}
            <span className="text-[#FFD84D] font-semibold">
              perubahan gaya hidup sederhana
            </span>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeartRiskCalculator;
