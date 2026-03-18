import { Link } from 'react-router-dom';
import { FiShoppingCart, FiMenu } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <header style={{
            position: 'sticky',
            top: 0,
            backgroundColor: 'rgba(18, 18, 18, 0.95)',
            backdropFilter: 'blur(10px)',
            borderBottom: '1px solid var(--surface-color-light)',
            zIndex: 1000,
            padding: '15px 0'
        }}>
            <div className="container flex items-center justify-between">

                {/* Logo */}
                <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 style={{
                            fontSize: '1.4rem',
                            color: 'var(--text-primary)',
                            letterSpacing: '-1px',
                            fontStyle: 'italic'
                        }}>
                            FITFUEL <span style={{ color: 'var(--accent-green)' }}>SUPPLEMENTS</span>
                        </h1>
                    </motion.div>
                </Link>

                {/* Desktop Navigation */}
                <nav className="desktop-nav" style={{ display: 'none' }}>
                    <ul style={{
                        display: 'flex',
                        listStyle: 'none',
                        gap: '24px',
                        fontFamily: 'var(--font-heading)',
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        fontSize: '0.9rem',
                        letterSpacing: '1px'
                    }}>
                        <li><Link to="/" style={{ transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color = 'var(--accent-green)'} onMouseOut={e => e.target.style.color = 'inherit'}>Shop All</Link></li>
                        <li><a href="#categories" style={{ transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color = 'var(--accent-green)'} onMouseOut={e => e.target.style.color = 'inherit'}>Categories</a></li>
                        <li><Link to="/track-order" style={{ transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color = 'var(--accent-orange)'} onMouseOut={e => e.target.style.color = 'inherit'}>Track Order</Link></li>
                        <li><a href="#" style={{ transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color = 'var(--accent-green)'} onMouseOut={e => e.target.style.color = 'inherit'}>Contact</a></li>
                    </ul>
                </nav>

                {/* Mobile Nav Toggle */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                    <Link to="/checkout" style={{ position: 'relative' }}>
                        <FiShoppingCart size={24} color="var(--text-primary)" />
                        <span style={{
                            position: 'absolute',
                            top: '-8px',
                            right: '-8px',
                            backgroundColor: 'var(--accent-orange)',
                            color: '#000',
                            fontWeight: 800,
                            fontSize: '0.7rem',
                            width: '18px',
                            height: '18px',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>2</span>
                    </Link>
                    <button
                        className="mobile-menu-btn"
                        style={{ background: 'none', color: 'var(--text-primary)', padding: 0 }}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <FiMenu size={28} />
                    </button>
                </div>

            </div>

            {/* Added simple global CSS for desktop nav visibility */}
            <style>{`
        @media(min-width: 768px) {
          .desktop-nav { display: block !important; }
          .mobile-menu-btn { display: none !important; }
        }
      `}</style>
        </header>
    );
};

export default Header;
