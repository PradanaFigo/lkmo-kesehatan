// frontend/src/components/DoctorChatList.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const DoctorChatList = ({ doctorId }) => {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/chats/patients', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        });

        if (!response.ok) {
          throw new Error('Gagal mengambil data pasien');
        }

        const data = await response.json();
        setPatients(data);
      } catch (err) {
        console.error('Error fetching patients:', err);
        alert('Gagal memuat daftar pasien. Pastikan backend berjalan dan Anda login sebagai dokter.');
      } finally {
        setLoading(false);
      }
    };

    fetchPatients();
  }, [doctorId]);

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h3 className="text-2xl font-bold text-[#003366] mb-6">Daftar Pasien Menunggu</h3>

      {loading ? (
        <p className="text-gray-500">Memuat daftar pasien...</p>
      ) : patients.length === 0 ? (
        <p className="text-gray-500">Belum ada pasien yang menghubungi Anda.</p>
      ) : (
        <div className="space-y-5">
          {patients.map((patient) => (
            <div
              key={patient.patient_id}
              className="flex justify-between items-center p-4 bg-[#f8fafc] border border-gray-200 rounded-xl hover:shadow-md transition-shadow"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-[#e6f0ff] flex items-center justify-center">
                  <span className="text-[#003366] font-bold">
                    {patient.patient_name?.charAt(0) || '?'}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-[#003366]">{patient.patient_name || 'Pasien'}</div>
                  <div className="text-sm text-gray-600">
                    {patient.patient_gender}, {patient.patient_age} tahun
                  </div>
                </div>
              </div>

              <div className="flex space-x-3">
                <Link
                  to={`/chat-room/${patient.patient_id}`}
                  className="bg-[#003366] text-white px-4 py-2 rounded-lg hover:bg-[#002966] transition-colors"
                >
                  Buka Chat
                </Link>
                <button
                  className="bg-gray-200 text-[#003366] px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors"
                  disabled
                >
                  Tunda
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DoctorChatList;