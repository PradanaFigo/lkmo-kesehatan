import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import io from 'socket.io-client'

function DoctorChatList({ doctorId }) {
  const [patients, setPatients] = useState([])
  const [queue, setQueue] = useState([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    async function fetchData() {
      try {
        const token = localStorage.getItem('token')
        if (!token) {
          throw new Error('Token tidak ditemukan')
        }

        const [patientsRes, queueRes] = await Promise.all([
          fetch('http://localhost:5000/api/chats/patients', {
            headers: { Authorization: `Bearer ${token}` }
          }),
          fetch('http://localhost:5000/api/queue/doctor', {
            headers: { Authorization: `Bearer ${token}` }
          })
        ])

        if (!patientsRes.ok || !queueRes.ok) {
          throw new Error('Gagal mengambil data')
        }

        const [patientsData, queueData] = await Promise.all([
          patientsRes.json(),
          queueRes.json()
        ])

        setPatients(patientsData)
        setQueue(queueData)
      } catch (err) {
        console.error(err)
        alert('Gagal memuat data')
      } finally {
        setLoading(false)
      }
    }

    fetchData()

    const socket = io('http://localhost:5000', {
      auth: { token: localStorage.getItem('token') }
    })

    socket.on('connect', fetchData)
    socket.on('chatListUpdate', fetchData)
    socket.on('queueUpdate', fetchData)

    return () => {
      socket.disconnect()
    }
  }, [doctorId])

  const filteredPatients = patients.filter(p => 
    p.patient_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.patient_id?.toString().includes(searchTerm)
  )

  const waitingPatients = queue.filter(q => q.status === 'waiting')
  const activePatients = queue.filter(q => q.status === 'active')

  if (loading) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex justify-center items-center h-40">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#003366]" />
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-2xl font-bold text-[#003366]">Dashboard Dokter</h3>
          <p className="text-gray-600">Manajemen Konsultasi Pasien</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="bg-blue-100 px-4 py-2 rounded-lg">
            <span className="font-semibold text-[#003366]">{patients.length}</span>
            <span className="text-gray-600 ml-2">Total Pasien</span>
          </div>
          <div className="bg-yellow-100 px-4 py-2 rounded-lg">
            <span className="font-semibold text-yellow-600">{waitingPatients.length}</span>
            <span className="text-gray-600 ml-2">Dalam Antrian</span>
          </div>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="flex justify-between items-center mb-6">
        <div className="relative flex-1 max-w-xl">
          <input
            type="text"
            placeholder="Cari nama pasien atau ID..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003366]"
          />
          <svg 
            className="w-5 h-5 text-gray-500 absolute left-3 top-3" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
            />
          </svg>
        </div>
        <div className="flex space-x-2 ml-4">
          {['all', 'waiting', 'ongoing'].map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-lg ${
                filter === f ? 'bg-[#003366] text-white' : 'bg-gray-100 text-gray-700'
              }`}
            >
              {f === 'all' ? 'Semua' : f === 'waiting' ? 'Menunggu' : 'Berlangsung'}
            </button>
          ))}
        </div>
      </div>

      {/* Active and Waiting List */}
      <div className="mb-8">
        <h4 className="text-lg font-semibold text-[#003366] mb-4">Antrian Saat Ini</h4>
        
        {/* Active Patient */}
        {activePatients.length > 0 && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-green-700">Sedang Konsultasi</p>
                <p className="text-sm text-green-600">{activePatients[0].patient_name}</p>
              </div>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                Aktif
              </span>
            </div>
          </div>
        )}
        
        {/* Waiting Patients */}
        {waitingPatients.length > 0 ? (
          <div className="space-y-2">
            {waitingPatients.map((patient, index) => (
              <div key={patient.id} className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-yellow-700">Antrian #{index + 1}</p>
                    <p className="text-sm text-yellow-600">{patient.patient_name}</p>
                  </div>
                  <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">
                    Menunggu
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-6 bg-gray-50 rounded-lg">
            <p className="text-gray-500">Tidak ada antrian saat ini</p>
          </div>
        )}
      </div>

      {/* Patient List */}
      <div>
        <h4 className="text-lg font-semibold text-[#003366] mb-4">Daftar Pasien</h4>
        {filteredPatients.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-gray-400 text-5xl mb-4">👨‍⚕️</div>
            <p className="text-gray-500 text-lg">Belum ada pasien yang menghubungi Anda</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredPatients.map(patient => (
              <div
                key={patient.patient_id}
                className="bg-[#f8fafc] border border-gray-200 rounded-xl p-4 hover:shadow-md transition-all"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-[#e6f0ff] flex items-center justify-center">
                      <span className="text-[#003366] font-bold">
                        {patient.patient_name?.charAt(0) || '?'}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-[#003366]">
                        {patient.patient_name || 'Pasien'}
                      </div>
                      <div className="text-sm text-gray-600 mt-1">
                        {patient.patient_gender}, {patient.patient_age} tahun
                      </div>
                    </div>
                  </div>
                  <Link
                    to={`/chat-room/${patient.patient_id}`}
                    className="px-4 py-2 bg-[#003366] text-white rounded-lg hover:bg-[#002244] transition-colors"
                  >
                    Chat
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default DoctorChatList