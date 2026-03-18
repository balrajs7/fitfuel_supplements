import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Product from './pages/Product';
import Checkout from './pages/Checkout';
import TrackOrder from './pages/TrackOrder';
import WhatsAppButton from './components/WhatsAppButton';
import { CartProvider } from './context/CartContext';
import CartSidebar from './components/CartSidebar';

function App() {
  return (
    <Router>
      <CartProvider>
        <div className="app-container" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Header />
          <main style={{ flex: 1 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product/:id" element={<Product />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/track-order" element={<TrackOrder />} />
            </Routes>
          </main>
          <CartSidebar />
          <WhatsAppButton />
          <Footer />
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;
