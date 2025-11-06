import React from 'react';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container-medilink">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <img src="/medical-link-logo.png" alt="Medilink Logo" className="h-12" />
          </div>
          
          <div className="flex space-x-8 mb-4 md:mb-0">
            <div className="flex items-center space-x-2">
              <img src="/instagram.png" alt="Instagram" className="w-6 h-6" />
              <span>MediLink_Solution</span>
            </div>
            <div className="flex items-center space-x-2">
              <img src="/tiktok.png" alt="TikTok" className="w-6 h-6" />
              <span>MediLink_Solution</span>
            </div>
            <div className="flex items-center space-x-2">
              <img src="/facebook.png" alt="Facebook" className="w-6 h-6" />
              <span>MediLink_Solution</span>
            </div>
            <div className="flex items-center space-x-2">
              <img src="/youtube.png" alt="YouTube" className="w-6 h-6" />
              <span>MediLink_Solution</span>
            </div>
          </div>
          
          <div className="text-center md:text-right">
            <h2 className="text-[#FFD700] text-2xl font-bold mb-2">MEDILINK</h2>
            <p className="text-sm mb-2">Satu Klik Menuju Hidup Lebih Sehat</p>
            <p className="text-xs">© Copyright 2025. Medilink Indonesia</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;