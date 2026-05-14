import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Chatbot } from './components/Chatbot';
import { EMRLayout } from './components/emr/EMRLayout';
import { AuthProvider } from './components/auth/AuthProvider';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Values from './pages/Values';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import EMRDashboard from './pages/emr/Dashboard';
import PatientDetail from './pages/emr/PatientDetail';
import EMRLogin from './pages/emr/Login';

export default function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          {/* Public Website */}
          <Route path="/" element={<WebsiteLayout><Home /></WebsiteLayout>} />
          <Route path="/about" element={<WebsiteLayout><About /></WebsiteLayout>} />
          <Route path="/services" element={<WebsiteLayout><Services /></WebsiteLayout>} />
          <Route path="/values" element={<WebsiteLayout><Values /></WebsiteLayout>} />
          <Route path="/contact" element={<WebsiteLayout><Contact /></WebsiteLayout>} />
          <Route path="/faq" element={<WebsiteLayout><FAQ /></WebsiteLayout>} />

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
    <div className="flex min-h-screen flex-col bg-white font-sans text-slate-900 selection:bg-primary selection:text-white">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Chatbot />
      <Footer />
    </div>
  );
}



