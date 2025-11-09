import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { ServiceDetail } from './pages/ServiceDetail';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/services/:slug"
          element={
            <div className="min-h-screen bg-white flex flex-col">
              <Header />
              <div className="flex-1">
                <ServiceDetail />
              </div>
              <Footer />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
