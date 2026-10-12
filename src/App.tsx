import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { UtilityBar } from './components/layout/UtilityBar';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { WhatsAppFloating } from './components/ui/WhatsAppFloating';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { RoomsPage } from './pages/RoomsPage';
import { RoomDetailPage } from './pages/RoomDetailPage';
import { RestaurantPage } from './pages/RestaurantPage';
import { VenuesPage } from './pages/VenuesPage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';

export function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-[#F7F4EE] text-[#252525]">
        {/* Top utility contact bar */}
        <UtilityBar />

        {/* Dynamic header / transparent-to-dark navbar */}
        <Navbar />

        {/* Main application routes */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/rooms" element={<RoomsPage />} />
            <Route path="/rooms/:slug" element={<RoomDetailPage />} />
            <Route path="/restaurant" element={<RestaurantPage />} />
            <Route path="/venues" element={<VenuesPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        {/* Palace Footer */}
        <Footer />

        {/* Floating WhatsApp Action CTA */}
        <WhatsAppFloating />
      </div>
    </Router>
  );
}

export default App;
