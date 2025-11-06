// src/pages/ChatPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import ChatCard from './ChatCard';

const ChatPage = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  const startChat = () => {
    navigate('/chat-room'); // atau ke halaman real-time chat
  };

  return (
    <div className="min-h-screen bg-[#e6f0ff] p-4">
      {/* Header */}
      <div className="bg-[#003366] text-white p-4 flex items-center space-x-3">
        <button onClick={() => navigate(-1)} className="text-white">
          ←
        </button>
        <img 
          src="/doctor-icon.png" 
          alt="Dokter"
          className="w-10 h-10 rounded-full"
        />
        <div>
          <div className="font-bold">Dokter</div>
          <div className="text-sm">MediLink Hospital</div>
        </div>
      </div>

      {/* Area Chat */}
      <div className="mt-4">
        <div className="bg-white rounded-xl p-6 mb-4">
          <h3 className="text-lg font-bold text-[#003366] mb-2">Welcome to Medilink!</h3>
          <p className="text-sm">
            Halo! {user.full_name}, saya disini untuk membantu anda, tolong jelaskan kondisi anda saat ini.
          </p>
        </div>

        <div className="bg-[#f0f4f8] rounded-xl p-6 mb-4">
          <p className="text-sm">Baik, terimakasih dok</p>
        </div>

        {/* Footer */}
        <div className="fixed bottom-4 left-4 right-4 bg-white p-4 rounded-xl shadow-lg">
          <div className="text-center mb-2">
            <button
              onClick={startChat}
              className="bg-[#003366] text-white px-6 py-2 rounded-lg hover:bg-[#002966]"
            >
              Completed consultation
            </button>
          </div>
          <div className="text-center">
            <h4 className="text-lg font-bold text-[#003366] mb-2">Rate Your Experience</h4>
            <div className="flex justify-center space-x-2">
              {[1,2,3,4,5].map(star => (
                <svg key={star} xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" className="cursor-pointer">
                  <path stroke="#003366" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2l3.09 6.26L22 9.27l-5 4.87-1.44 6.89L12 21l-3.66-6.59L3 12.5l6-5.73L12 2z" />
                </svg>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;