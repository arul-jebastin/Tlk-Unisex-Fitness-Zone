import React, { useState, useEffect } from 'react';
import Navbar from './components/novbar.jsx';
import Hero from './components/hero.jsx';
import EventsAndHighlights from './components/gymview.jsx';
import Membership from './components/memberships.jsx';
import Schedule from './components/reviews.jsx';
import Contact from './components/contact.jsx';
import FloatingSocials from './components/FloatingSocials.jsx';
import Footer from './components/footer.jsx';
import WelcomePopup from './components/WelcomePopup.jsx';
import LocalBusinessSchema from './LocalBusinessSchema.jsx';
import AdminPortal from './components/AdminPortal.jsx';

export default function App() {
  const [isAdmin, setIsAdmin] = useState(window.location.hash === '#admin');

  useEffect(() => {
    const handleHashChange = () => {
      setIsAdmin(window.location.hash === '#admin');
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  if (isAdmin) {
    return (
      <AdminPortal
        onExit={() => {
          window.location.hash = '';
          setIsAdmin(false);
        }}
      />
    );
  }

  return (
    <div>
      <LocalBusinessSchema />
      <WelcomePopup />
      <Navbar />
      <Hero />
      <EventsAndHighlights />
      <Membership />
      <Schedule />
      <Contact />
      <FloatingSocials />
      <Footer />
    </div>
  );
}