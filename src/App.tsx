import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { EMRLayout } from './components/emr/EMRLayout';
import { AuthProvider } from './components/auth/AuthProvider';
import ScrollToTop from './components/ScrollToTop';
import { Preloader } from './components/layout/Preloader';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import HomeHealthcare from './pages/HomeHealthcare';
import SpecialistCare from './pages/SpecialistCare';
import Search from './pages/Search';
import Values from './pages/Values';
import Contact from './pages/Contact';
import Booking from './pages/Booking';
import FAQ from './pages/FAQ';
import Career from './pages/Career';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import EMRDashboard from './pages/emr/Dashboard';
import PatientDetail from './pages/emr/PatientDetail';
import EMRLogin from './pages/emr/Login';

export default function App() {
  return (
    <Router>
      <Preloader />
      <ScrollToTop />
      <AuthProvider>
        <Routes>
          {/* Public Website */}
          <Route path="/" element={<WebsiteLayout><Home /></WebsiteLayout>} />
          <Route path="/about" element={<WebsiteLayout><About /></WebsiteLayout>} />
          <Route path="/services" element={<WebsiteLayout><Services /></WebsiteLayout>} />
          <Route path="/home-healthcare" element={<WebsiteLayout><HomeHealthcare /></WebsiteLayout>} />
          <Route path="/specialist-care" element={<WebsiteLayout><SpecialistCare /></WebsiteLayout>} />
          <Route path="/search" element={<WebsiteLayout><Search /></WebsiteLayout>} />
          <Route path="/values" element={<WebsiteLayout><Values /></WebsiteLayout>} />
          <Route path="/contact" element={<WebsiteLayout><Contact /></WebsiteLayout>} />
          <Route path="/book" element={<WebsiteLayout><Booking /></WebsiteLayout>} />
          <Route path="/faq" element={<WebsiteLayout><FAQ /></WebsiteLayout>} />
          <Route path="/career" element={<WebsiteLayout><Career /></WebsiteLayout>} />
          <Route path="/terms" element={<WebsiteLayout><Terms /></WebsiteLayout>} />
          <Route path="/privacy" element={<WebsiteLayout><Privacy /></WebsiteLayout>} />

          {/* EMR Portal */}
          <Route path="/emr/login" element={<EMRLogin />} />
          <Route path="/emr/*" element={
            <EMRLayout>
              <Routes>
                <Route path="dashboard" element={<EMRDashboard />} />
                <Route path="patients" element={<EMRDashboard />} />
                <Route path="patients/:id" element={<PatientDetail />} />
                <Route path="consultations" element={<div>Consultations (Coming Soon)</div>} />
                <Route path="settings" element={<div>Portal Settings (Coming Soon)</div>} />
              </Routes>
            </EMRLayout>
          } />
        </Routes>
      </AuthProvider>
    </Router>
  );
}


function WebsiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-white font-sans text-slate-900 selection:bg-primary selection:text-white w-full overflow-x-hidden relative">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}



