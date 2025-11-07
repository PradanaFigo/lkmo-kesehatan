import React from 'react';

const HealthyLifestyle = () => {
  const lifestyleTips = [
    {
      icon: "/food.png",
      title: "Konsumsi Makanan Sehat & Bergizi",
      bgColor: "bg-[#e6f0ff]"
    },
    {
      icon: "/exercise.png",
      title: "Tetap Aktif & Berolahraga Teratur",
      bgColor: "bg-[#e6f0ff]"
    },
    {
      icon: "/no-smocking.png",
      title: "Menghindari Merokok",
      bgColor: "bg-[#e6f0ff]"
    },
    {
      icon: "/consultacy.png",
      title: "Rutin Konsultasi dengan Dokter",
      bgColor: "bg-[#003366]"
    }
  ];

  return (
    <section className="py-16 bg-[#e6f0ff]">
      <div className="container-medilink">
        <h2 className="text-[#003366] text-2xl font-bold text-center mb-8">
          Pola Hidup Sehat: <span style={{ color: '#FFD700' }}>Versi Medical Link</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {lifestyleTips.map((tip, index) => (
            <div key={index} className={`${tip.bgColor} p-6 rounded-full text-center`}>
              <div className={`mx-auto mb-4 w-20 h-20 rounded-full flex items-center justify-center ${index === 3 ? 'bg-[#003366]' : 'bg-white'} ${index === 3 ? '' : 'text-[#003366]'}`}>
                <img 
                  src={tip.icon} 
                  alt={tip.title} 
                  className="w-12 h-12 object-contain"
                  style={index === 3 ? { filter: 'brightness(0) invert(1)' } : {}}
                />
              </div>
              <div className={`font-medium ${index === 3 ? 'text-[#FFD700]' : 'text-[#003366]'}`}>{tip.title}</div>
              {index === 3 && (
                <div className="mt-4 text-sm text-[#f3f3f4] cursor-pointer hover:underline">
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HealthyLifestyle;