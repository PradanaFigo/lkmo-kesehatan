// src/pages/ChatRoom.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import io from 'socket.io-client';

const socket = io('http://localhost:5000', {
  auth: {
    token: localStorage.getItem('token')
  },
  autoConnect: false,
  transports: ['websocket', 'polling']
});

const ChatRoom = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));
  const [doctorId, setDoctorId] = useState(null);
  // Fetch chat history
  const fetchChatHistory = React.useCallback(async (userId, doctorId) => {
    try {
      const response = await fetch(`http://localhost:5000/api/chats/history/${userId}/${doctorId}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      if (response.ok) {
        const history = await response.json();
        setMessages(history.map(msg => ({
          from: msg.sender_id,
          message: msg.message,
          timestamp: new Date(msg.created_at)
        })));
      }
    } catch (error) {
      console.error('Error fetching chat history:', error);
    }
  }, []);

  // Fetch available doctor or use assigned doctor
  useEffect(() => {
    const fetchDoctor = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/auth/doctors', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        });
        if (response.ok) {
          const doctors = await response.json();
          if (doctors.length > 0) {
            const docId = doctors[0].id.toString();
            setDoctorId(docId);
            // Fetch chat history once we have both user and doctor IDs
            if (user?.id) {
              await fetchChatHistory(user.id, docId);
            }
          }
        }
      } catch (error) {
        console.error('Error fetching doctor:', error);
      }
    };
    if (user?.id) {
      fetchDoctor();
    }
  }, [user?.id, fetchChatHistory]);

  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);


  useEffect(() => {
    if (!user?.id) {
      console.error('No user ID available');
      return;
    }

    // Connect to socket
    socket.connect();

    // Socket event handlers
    socket.on('connect', () => {
      console.log('Socket connected');
      // Join room after successful connection
      socket.emit('join', user.id);
    });

    socket.on('connect_error', (error) => {
      console.error('Socket connection error:', error.message);
    });

    // Terima pesan
    socket.on('receiveMessage', (data) => {
      setMessages(prev => [...prev, {
        from: data.from,
        message: data.message,
        timestamp: new Date(data.timestamp)
      }]);
    });

    // Kirim pesan selamat datang otomatis jika ada doctorId
    if (doctorId && user?.full_name) {
      const welcomeMessage = {
        from: doctorId,
        to: user.id,
        message: `Halo! ${user.full_name}, saya disini untuk membantu anda, tolong jelaskan kondisi anda saat ini.`
      };

      setTimeout(() => {
        socket.emit('sendMessage', welcomeMessage);
        setMessages(prev => [...prev, {
          from: doctorId,
          message: welcomeMessage.message,
          timestamp: new Date()
        }]);
      }, 1000);
    }

    return () => {
      socket.off('receiveMessage');
      socket.disconnect();
    };
  }, [user?.id, user?.full_name, doctorId]);

  const sendMessage = () => {
    if (!message.trim()) return;

    const data = {
      from: user.id,
      to: doctorId,
      message: message.trim()
    };

    socket.emit('sendMessage', data);

    setMessages(prev => [...prev, {
      from: user.id,
      message: message.trim(),
      timestamp: new Date()
    }]);

    setMessage('');
  };

  // Fungsi untuk menyelesaikan konsultasi dan kembali ke dashboard
  const handleCompleteConsultation = () => {
    alert('Konsultasi selesai!');
    navigate('/dashboard'); // kembali ke dashboard
  };

  return (
    <div className="min-h-screen bg-[#e6f0ff] p-4">
      {/* Header */}
      <div className="bg-[#003366] text-white p-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
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
        <button
          onClick={handleCompleteConsultation}
          className="bg-white text-[#003366] px-3 py-1 rounded font-semibold"
        >
          Selesai
        </button>
      </div>

      {/* Area Chat */}
      <div className="mt-4">
        {messages.map((msg, index) => (
          <div key={index} className="mb-4">
            {msg.from === user.id ? (
              // Pesan dari pasien
              <div className="bg-[#f0f4f8] rounded-xl p-3 max-w-xs ml-auto mb-2">
                <p className="text-sm">{msg.message}</p>
                <span className="text-xs text-gray-500 block mt-1">
                  {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>
            ) : (
              // Pesan dari dokter
              <div className="bg-white rounded-xl p-3 max-w-xs mr-auto mb-2">
                <p className="text-sm">{msg.message}</p>
                <span className="text-xs text-gray-500 block mt-1">
                  {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Input Pesan */}
      <div className="fixed bottom-4 left-4 right-4 flex space-x-2">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
          className="flex-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#003366]"
          placeholder="Ketik pesan..."
        />
        <button
          onClick={sendMessage}
          disabled={!message.trim()}
          className="bg-[#003366] text-white px-4 py-2 rounded hover:bg-[#002966] disabled:opacity-50"
        >
          Kirim
        </button>
      </div>

    
    </div>
  );
};

export default ChatRoom;