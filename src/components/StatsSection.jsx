import React from 'react';

const StatsSection = () => {
  const stats = [
    { icon: "/users-icon.png", number: "600+", label: "Pengguna" },
    { icon: "/doctor-icon.png", number: "350+", label: "Dokter" },
    { icon: "/pharmacy-icon.png", number: "400+", label: "Mitra Apotek" }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container-medilink">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="text-gray-500">Medical Link</h2>
            <h3 className="text-[#003366] text-3xl font-bold mb-4">Solusi Kesehatan Dalam Satu Genggaman</h3>
          </div>
          <div className="md:w-1/2 grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <img 
                  src={stat.icon} 
                  alt={stat.label} 
                  className="mx-auto mb-2 w-16 h-16 object-contain"
                />
                <div className="text-[#FFD700] text-2xl font-bold">{stat.number}</div>
                <div className="text-[#003366]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;