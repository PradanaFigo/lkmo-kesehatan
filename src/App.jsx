import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import StatsSection from './components/StatsSection';
import HeartRiskCalculator from './components/HeartRiskCalculator';
import HealthyLifestyle from './components/HealthyLifestyle';
import StorySection from './components/StorySection';
import Footer from './components/Footer';
import LaboratoryPage from './pages/LaboratoryPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HeartRiskResultPage from './pages/HeartRiskResultPage';
import LaboratoryBayiPage from './pages/LaboratoryBayiPage';
import LaboratoryDarahPage from './pages/LaboratoryDarahPage';
import LaboratoryGinjalPage from './pages/LaboratoryGinjalPage';
import LaboratoryKehamilanPage from './pages/LaboratoryKehamilanPage';
import LaboratoryParuPage from './pages/LaboratoryParuPage';
import LaboratoryUrinePage from './pages/LaboratoryUrinePage';
import LaboratoryHatiPage from './pages/LaboratoryHatiPage';
import ChatDokterPage from './pages/ChatDokterPage';

function App() {
  const location = useLocation();
  const hideHeader = ['/masuk', '/daftar', '/hasil-risiko-jantung'].includes(location.pathname)

  return (
    <div className="App">
      {!hideHeader && <Header />}
      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <HeroSection />
              <StatsSection />
              <div id="kalkulator-kesehtan" className="py-16 bg-[#003366] text-white">
              <HeartRiskCalculator />
              </div>
              <HealthyLifestyle />
              <StorySection />
              <Footer />
            </>
          } 
        />
        <Route path="/laboratorium" element={<LaboratoryPage />} />
        <Route path="/masuk" element={<LoginPage />} />
        <Route path="/daftar" element={<RegisterPage />} />
        <Route path="/hasil-risiko-jantung" element={<HeartRiskResultPage />} />
        <Route path="/laboratorium/bayi" element={<LaboratoryBayiPage />} />
        <Route path="/laboratorium/darah" element={<LaboratoryDarahPage />} />
        <Route path="/laboratorium/ginjal" element={<LaboratoryGinjalPage />} />
        <Route path="/laboratorium/kehamilan" element={<LaboratoryKehamilanPage />} />
        <Route path="/laboratorium/paru" element={<LaboratoryParuPage />} />
        <Route path="/laboratorium/urine" element={<LaboratoryUrinePage />} />
        <Route path="/laboratorium/hati" element={<LaboratoryHatiPage />} />
        <Route path="/ChatDokterPage" element={<ChatDokterPage />} />
      </Routes>
    </div>
  );
}

export default App;