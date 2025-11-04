import React from 'react';

const HeroSection = () => {
  return (
    <section 
      className="hero-section"
      style={{ backgroundImage: "url('/hero-image.png')" }}
    >
      <div className="absolute inset-0 bg-[#003366] bg-opacity-60"></div>
      <div className="relative z-10 container-medilink pt-20 text-white">
        <h1 className="text-6xl font-bold mb-4" style={{ color: '#FFD700' }}>MEDILINK</h1>
        <p className="text-2xl" style={{ color: '' }}>Satu Klik Menuju Hidup Lebih Sehat</p>
      </div>
    </section>
  );
};

export default HeroSection;