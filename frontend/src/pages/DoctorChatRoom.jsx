import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import io from 'socket.io-client';

const socket = io('http://localhost:5000', {
  auth: {
    token: localStorage.getItem('token')
  },
  autoConnect: false,
  transports: ['websocket', 'polling']
});

const DoctorChatRoom = () => {
  const { patientId } = useParams();
  const navigate = useNavigate();
  const messagesEndRef = useRef(null);
  const user = JSON.parse(localStorage.getItem('user'));
  
  const [patient, setPatient] = useState(null);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch patient details and chat history
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch patient details
        const userResponse = await fetch(`http://localhost:5000/api/auth/users/${patientId}`, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        });
        
        if (!userResponse.ok) throw new Error('Failed to fetch patient details');
        
        const patientData = await userResponse.ok;
        setPatient(patientData);

        // Fetch chat history
        const chatResponse = await fetch(`http://localhost:5000/api/chats/history/${patientId}`, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        });

        if (!chatResponse.ok) throw new Error('Failed to fetch chat history');

        const history = await chatResponse.json();
        setMessages(history);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    if (patientId) {
      fetchData();
    }
  }, [patientId]);

  // Socket.IO setup
  useEffect(() => {
    if (!user?.id) {
      console.error('No user ID available');
      return;
    }

    socket.connect();

    socket.on('connect', () => {
      console.log('Socket connected');
      socket.emit('join', user.id);
    });

    socket.on('connect_error', (error) => {
      console.error('Socket connection error:', error.message);
    });

    socket.on('receiveMessage', (data) => {
      console.log('Received message:', data);
      setMessages(prev => [...prev, {
        from: data.from,
        message: data.message,
        timestamp: new Date(data.timestamp)
      }]);
    });

    return () => {
      socket.off('connect');
      socket.off('connect_error');
      socket.off('receiveMessage');
      socket.disconnect();
    };
  }, [user?.id]);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = () => {
    if (!message.trim() || !patientId) return;

    const data = {
      from: user.id,
      to: patientId,
      message: message.trim()
    };

    socket.emit('sendMessage', data);
    
    // Optimistic update
    setMessages(prev => [...prev, {
      from: user.id,
      message: data.message,
      timestamp: new Date()
    }]);

    setMessage('');
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#003366]" />
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-[#003366] text-white p-4">
        <div className="container mx-auto">
          <button 
            onClick={() => navigate('/dashboard')} 
            className="flex items-center text-white mb-4"
          >
            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Kembali ke Dashboard
          </button>
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#003366] font-bold">
              {patient?.full_name?.[0] || '?'}
            </div>
            <div className="ml-4">
              <h1 className="text-xl font-semibold">{patient?.full_name || 'Pasien'}</h1>
              <p className="text-sm text-blue-100">
                {patient?.gender}, {patient?.age} tahun
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4">
        <div className="container mx-auto max-w-4xl">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${msg.from === user.id ? 'justify-end' : 'justify-start'} mb-4`}
            >
              <div
                className={`max-w-[70%] rounded-lg p-3 ${
                  msg.from === user.id
                    ? 'bg-[#003366] text-white'
                    : 'bg-white text-gray-800'
                }`}
              >
                <p className="text-sm">{msg.message}</p>
                <p className={`text-xs mt-1 ${
                  msg.from === user.id ? 'text-blue-200' : 'text-gray-500'
                }`}>
                  {new Date(msg.timestamp).toLocaleTimeString()}
                </p>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Message Input */}
      <div className="bg-white border-t p-4">
        <div className="container mx-auto max-w-4xl">
          <div className="flex space-x-4">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
              placeholder="Ketik pesan..."
              className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003366]"
            />
            <button
              onClick={sendMessage}
              className="px-6 py-2 bg-[#003366] text-white rounded-lg hover:bg-[#002244] transition-colors"
            >
              Kirim
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorChatRoom;