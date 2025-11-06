// src/components/ChatCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const ChatCard = () => {
  return (
    <div className="bg-[#e6f0ff] rounded-xl shadow-lg p-6 max-w-md mx-auto text-center">
      <div className="flex items-center justify-center space-x-4 mb-4">
        {/* Ikon Dokter */}
        <img 
          src="/dokter.png" 
          alt="Dokter"
          className="w-24 h-24 object-contain"
        />
        <div className="text-left">
          <h3 className="text-xl font-bold text-[#003366]">Chat Dokter Sekarang</h3>
          <p className="text-gray-600 text-sm">MediLink Hospital</p>
        </div>
      </div>
      <hr className="my-4 border-gray-300" />
      <Link 
        to="/chat" 
        className="inline-block px-6 py-2 bg-[#003366] text-white font-bold rounded-lg hover:bg-[#002966] transition-colors"
      >
        Chat
      </Link>
    </div>
  );
};

export default ChatCard;