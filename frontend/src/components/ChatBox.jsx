// frontend/src/components/ChatBox.jsx
import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:5000');

const ChatBox = ({ currentUserId, recipientId }) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Join room
    socket.emit('join', currentUserId);

    // Load riwayat chat dari API
    const loadHistory = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/chats/history/${recipientId}`, {
          headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
        });
        const history = await res.json();
        setMessages(history);
      } catch (err) {
        console.error('Gagal load riwayat chat');
      }
    };

    loadHistory();

    // Terima pesan real-time
    socket.on('receiveMessage', (data) => {
      setMessages(prev => [...prev, data]);
    });

    return () => socket.off('receiveMessage');
  }, [currentUserId, recipientId]);

  const sendMessage = () => {
    if (!message.trim()) return;

    const data = {
      from: currentUserId,
      to: recipientId,
      message: message.trim()
    };

    socket.emit('sendMessage', data);
    setMessage('');

    // Tambahkan ke UI lokal
    setMessages(prev => [...prev, {
      ...data,
      timestamp: new Date().toISOString()
    }]);
  };

  return (
    <div className="flex flex-col h-full">
      {/* Area Pesan */}
      <div className="flex-grow overflow-y-auto p-4 bg-gray-50">
        {messages.map((msg, i) => (
          <div key={i} className={`mb-2 p-2 rounded ${msg.from === currentUserId ? 'bg-blue-100 ml-auto' : 'bg-gray-200 mr-auto'}`} style={{ maxWidth: '70%' }}>
            <p className="text-sm">{msg.message}</p>
            <span className="text-xs text-gray-500 block mt-1">
              {new Date(msg.created_at || msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </span>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="flex p-2 bg-white border-t">
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
          className="flex-1 border rounded-l p-2"
          placeholder="Ketik pesan..."
        />
        <button onClick={sendMessage} className="bg-[#003366] text-white px-4 rounded-r">
          Kirim
        </button>
      </div>
    </div>
  );
};

export default ChatBox;