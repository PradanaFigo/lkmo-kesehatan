import React, { useState, useEffect } from 'react';
import DoctorHeader from '../components/DoctorHeader';
import DoctorChatList from '../components/DoctorChatList';

const DokterDashboard = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const [stats, setStats] = useState({
    waiting: 0,
    ongoing: 0,
    total: 0
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/chats/stats', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        });
        if (response.ok) {
          const data = await response.json();
          setStats(data);
        }
      } catch (error) {
        console.error('Error fetching stats:', error);
      }
    };
    
    fetchStats();
  }, []);

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <DoctorHeader />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500">Menunggu Konsultasi</p>
                <h3 className="text-2xl font-bold text-[#003366]">{stats.waiting}</h3>
              </div>
              <div className="bg-blue-100 p-3 rounded-full">
                🕒
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500">Konsultasi Aktif</p>
                <h3 className="text-2xl font-bold text-[#003366]">{stats.ongoing}</h3>
              </div>
              <div className="bg-green-100 p-3 rounded-full">
                💬
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500">Total Pasien</p>
                <h3 className="text-2xl font-bold text-[#003366]">{stats.total}</h3>
              </div>
              <div className="bg-purple-100 p-3 rounded-full">
                👥
              </div>
            </div>
          </div>
        </div>

        {/* Chat List */}
        <DoctorChatList doctorId={user.id} />
      </main>
    </div>
  );
};

export default DokterDashboard;