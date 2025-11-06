import React from 'react';

const HeroSection = () => {
  return (
    <section 
      className="hero-section"
      style={{
        background: "linear-gradient(to right, rgba(0, 51, 102, 0.8), rgba(0, 51, 102, 0)), url('/hero-image.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="relative z-10 container-medilink pt-20 text-white">
        <h1 className="text-6xl font-bold mb-4" style={{ color: '#FFD700' }}>MEDILINK</h1>
        <p className="text-2xl">Satu Klik Menuju Hidup Lebih Sehat</p>
      </div>
    </section>
  );
};

export default HeroSection;
