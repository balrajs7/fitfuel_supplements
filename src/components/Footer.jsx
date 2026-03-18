import { FiInstagram, FiFacebook, FiYoutube } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer style={{
            backgroundColor: 'var(--surface-color)',
            padding: '60px 0 20px 0',
            borderTop: '1px solid var(--surface-color-light)',
            marginTop: '60px'
        }}>
            <div className="container grid grid-cols-1 md:grid-cols-3" style={{ gap: '40px' }}>

                {/* Brand Info */}
                <div>
                    <h2 style={{ fontSize: '1.3rem', marginBottom: '15px' }}>
                        FITFUEL <span style={{ color: 'var(--accent-green)' }}>SUPPLEMENTS</span>
                    </h2>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '15px' }}>
                        100% Authentic Supplements. Fast Delivery in Bengaluru. Your trusted partner in fitness and premium sports nutrition.
                    </p>
                    <div style={{ backgroundColor: 'rgba(255, 94, 0, 0.1)', padding: '15px', borderRadius: 'var(--border-radius-md)', borderLeft: '4px solid var(--accent-orange)', marginBottom: '20px' }}>
                        <p style={{ color: 'var(--text-primary)', fontSize: '0.9rem', margin: 0 }}>
                            <strong style={{ color: 'var(--accent-orange)' }}>★ 5.0 Google Rating</strong><br />
                            The most trusted place for gym lovers in the JC Nagar and Kurubarahalli area to get genuine whey protein and pre-workouts.
                        </p>
                    </div>
                    <div style={{ display: 'flex', gap: '15px' }}>
                        <a href="#" style={{ color: 'var(--text-secondary)' }}><FiInstagram size={24} /></a>
                        <a href="#" style={{ color: 'var(--text-secondary)' }}><FiFacebook size={24} /></a>
                        <a href="#" style={{ color: 'var(--text-secondary)' }}><FiYoutube size={24} /></a>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 style={{ marginBottom: '20px', fontSize: '1.2rem', color: 'var(--text-primary)' }}>Quick Links</h3>
                    <ul style={{ listStyle: 'none', padding: 0, color: 'var(--text-secondary)' }}>
                        <li style={{ marginBottom: '10px' }}><Link to="/track-order" style={{ transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color = 'var(--accent-green)'} onMouseOut={e => e.target.style.color = 'inherit'}>Track Order</Link></li>
                        <li style={{ marginBottom: '10px' }}><a href="#">About Us</a></li>
                        <li style={{ marginBottom: '10px' }}><a href="#">Refund Policy</a></li>
                        <li style={{ marginBottom: '10px' }}><a href="#">Privacy Policy</a></li>
                        <li style={{ marginBottom: '10px' }}><a href="#">Terms of Service</a></li>
                        <li><a href="#">Contact Support</a></li>
                    </ul>
                </div>

                {/* Map & Contact */}
                <div>
                    <h3 style={{ marginBottom: '20px', fontSize: '1.2rem', color: 'var(--text-primary)' }}>Visit Our Store</h3>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '5px', fontSize: '0.9rem', lineHeight: '1.4' }}>
                        <strong>Fitnfuel supplement shop</strong><br />
                        23, Pipeline Rd, Mahalakshmi Puram, JC Nagar, Kurubarahalli, Bengaluru - 560086
                    </p>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '15px', fontSize: '0.9rem' }}>
                        📞 <strong>063629 02121</strong>
                    </p>
                    <div style={{ borderRadius: 'var(--border-radius-md)', overflow: 'hidden', height: '150px' }}>
                        <iframe
                            src="https://maps.google.com/maps?q=Fitnfuel%20supplement%20shop,%2023,%20Pipeline%20Rd,%20Mahalakshmi%20Puram,%20JC%20Nagar,%20Kurubarahalli,%20Bengaluru%20-%20560086&t=m&z=15&output=embed&iwloc=near"
                            width="100%"
                            height="100%"
                            style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) grayscale(80%)' }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Store Location"
                        ></iframe>
                    </div>
                </div>
            </div>

            <div className="container" style={{
                marginTop: '40px',
                paddingTop: '20px',
                borderTop: '1px solid var(--surface-color-light)',
                textAlign: 'center',
                color: 'var(--text-secondary)',
                fontSize: '0.8rem'
            }}>
                &copy; {new Date().getFullYear()} Fitfuel Supplements. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
