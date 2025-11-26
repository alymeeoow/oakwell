import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Header2 from './components/Header';
import Hero2 from './components/Hero';
import Specialties2 from './components/Specialties';
import About2 from './components/About-us';
import Products2 from './components/Products';
import Testing2 from './components/Testing';
import Choose2 from './components/Choose';
import Shop2 from './components/Shop';
import Footer2 from './components/Footer';

function HomePage({  }) {
  return (
    <>
      <Header2/>
      <Hero2 />
      <Specialties2 />
      <About2/>
      <Products2 />
      <Testing2 />
      <Choose2 />
      <Footer2 />
    </>
  );
}

function App() {
  const [isQuoteFormOpen, setIsQuoteFormOpen] = useState(false);
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  const openQuoteForm = () => setIsQuoteFormOpen(true);
  
  const openContactForm = () => setIsContactFormOpen(true);
 

  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path="/" 
          element={
            <HomePage
              openQuoteForm={openQuoteForm} 
              openContactForm={openContactForm} 
            />
          } 
        />
        <Route path="/shop" element={<Shop2 />} />
     
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;