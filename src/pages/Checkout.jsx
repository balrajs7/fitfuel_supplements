import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiLock, FiCheck, FiTruck, FiCreditCard } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Checkout = () => {
    const [complete, setComplete] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState('upi');

    const handleSubmit = (e) => {
        e.preventDefault();
        setComplete(true);
    };

    if (complete) {
        return (
            <div className="container" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    style={{ textAlign: 'center', backgroundColor: 'var(--surface-color)', padding: '50px', borderRadius: 'var(--border-radius-lg)', border: '1px solid var(--accent-green)' }}
                >
                    <div style={{
                        width: '80px', height: '80px', borderRadius: '50%', backgroundColor: 'rgba(57, 255, 20, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', color: 'var(--accent-green)'
                    }}>
                        <FiCheck size={40} />
                    </div>
                    <h1 style={{ marginBottom: '15px' }}>Order Placed Successfully!</h1>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '30px', fontSize: '1.1rem' }}>
                        Thank you for trusting Fitfuel Supplements. Your supplements are being packed.
                    </p>
                    <Link to="/">
                        <button className="btn-primary">Return to Store</button>
                    </Link>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="container" style={{ paddingTop: '40px', paddingBottom: '80px' }}>
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                <h1 style={{ fontSize: '2.5rem' }}>SECURE <span style={{ color: 'var(--accent-orange)' }}>CHECKOUT</span></h1>
                <p style={{ color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                    <FiLock /> 256-bit SSL encryption. Safe and secure.
                </p>
            </div>

            <div className="grid md:grid-cols-[2fr_1fr]" style={{ gap: '40px' }}>

                {/* Checkout Form */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <form id="checkout-form" onSubmit={handleSubmit} style={{
                        backgroundColor: 'var(--surface-color)',
                        padding: '40px',
                        borderRadius: 'var(--border-radius-lg)',
                        border: '1px solid var(--surface-color-light)'
                    }}>

                        <h3 style={{ marginBottom: '25px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <FiTruck color="var(--accent-green)" /> Delivery Information
                        </h3>

                        <div className="grid sm:grid-cols-2" style={{ gap: '20px', marginBottom: '20px' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                <label style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Full Name</label>
                                <input required type="text" placeholder="John Doe" style={inputStyle} />
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                <label style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Phone Number</label>
                                <input required type="tel" placeholder="+91 98765 43210" style={inputStyle} />
                            </div>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px' }}>
                            <label style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Email Address</label>
                            <input required type="email" placeholder="john@example.com" style={inputStyle} />
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px' }}>
                            <label style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Bengaluru Delivery Address</label>
                            <textarea required rows="3" placeholder="House No, Street, Landmark..." style={inputStyle}></textarea>
                        </div>

                        <div className="grid sm:grid-cols-2" style={{ gap: '20px', marginBottom: '40px' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                <label style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>City</label>
                                <input required type="text" value="Bengaluru" readOnly style={{ ...inputStyle, backgroundColor: '#222', color: '#888' }} />
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                <label style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>PIN Code</label>
                                <input required type="text" placeholder="5600XX" style={inputStyle} />
                            </div>
                        </div>

                        <h3 style={{ marginBottom: '25px', display: 'flex', alignItems: 'center', gap: '10px', borderTop: '1px solid var(--surface-color-light)', paddingTop: '40px' }}>
                            <FiCreditCard color="var(--accent-orange)" /> Payment Method
                        </h3>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                            {[
                                { id: 'upi', label: 'UPI (Google Pay, PhonePe, Paytm)', icon: '📱' },
                                { id: 'card', label: 'Credit / Debit Card', icon: '💳' },
                                { id: 'netbanking', label: 'NetBanking', icon: '🏦' },
                                { id: 'cod', label: 'Cash on Delivery (COD)', icon: '💵' }
                            ].map(method => (
                                <div
                                    key={method.id}
                                    onClick={() => setPaymentMethod(method.id)}
                                    style={{
                                        padding: '20px',
                                        border: `1px solid ${paymentMethod === method.id ? 'var(--accent-orange)' : 'var(--surface-color-light)'}`,
                                        borderRadius: 'var(--border-radius-md)',
                                        backgroundColor: paymentMethod === method.id ? 'rgba(255, 94, 0, 0.05)' : 'transparent',
                                        cursor: 'pointer',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '15px',
                                        transition: 'all 0.2s'
                                    }}
                                >
                                    <div style={{
                                        width: '20px', height: '20px', borderRadius: '50%',
                                        border: `6px solid ${paymentMethod === method.id ? 'var(--accent-orange)' : '#444'}`,
                                        backgroundColor: paymentMethod === method.id ? '#000' : 'transparent'
                                    }}></div>
                                    <span style={{ fontSize: '1.2rem' }}>{method.icon}</span>
                                    <span style={{ fontWeight: 600, color: paymentMethod === method.id ? '#fff' : 'var(--text-secondary)' }}>{method.label}</span>
                                </div>
                            ))}
                        </div>

                    </form>
                </motion.div>

                {/* Order Summary */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                >
                    <div style={{
                        backgroundColor: 'var(--surface-color)',
                        padding: '30px',
                        borderRadius: 'var(--border-radius-lg)',
                        border: '1px solid var(--surface-color-light)',
                        position: 'sticky',
                        top: '100px'
                    }}>
                        <h3 style={{ marginBottom: '20px', paddingBottom: '15px', borderBottom: '1px solid var(--surface-color-light)' }}>Order Summary</h3>

                        {/* Mock Item */}
                        <div style={{ display: 'flex', gap: '15px', marginBottom: '20px' }}>
                            <div style={{ width: '60px', height: '60px', backgroundColor: '#000', borderRadius: 'var(--border-radius-sm)', padding: '5px' }}>
                                <img src="/product_whey_1772941267798.png" alt="Whey" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                            </div>
                            <div style={{ flexGrow: 1 }}>
                                <h5 style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-primary)' }}>Optimum Nutrition Whey...</h5>
                                <p style={{ margin: '5px 0 0 0', color: 'var(--text-secondary)', fontSize: '0.8rem' }}>Qty: 1</p>
                            </div>
                            <div style={{ fontWeight: 'bold' }}>₹6,899</div>
                        </div>

                        {/* Price Calculations */}
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', color: 'var(--text-secondary)' }}>
                            <span>Subtotal</span>
                            <span>₹6,899</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', color: 'var(--text-secondary)' }}>
                            <span>Shipping</span>
                            <span style={{ color: 'var(--accent-green)' }}>FREE</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', margin: '20px 0', paddingTop: '15px', borderTop: '1px solid var(--surface-color-light)', fontSize: '1.3rem', fontWeight: 800 }}>
                            <span>Total</span>
                            <span style={{ color: 'var(--accent-orange)' }}>₹6,899</span>
                        </div>

                        <button type="submit" form="checkout-form" className="btn-primary" style={{ width: '100%', height: '50px', fontSize: '1.1rem' }}>
                            Complete Purchase
                        </button>

                        <p style={{ textAlign: 'center', color: 'var(--text-secondary)', fontSize: '0.8rem', marginTop: '15px' }}>
                            By completing your purchase you agree to our Terms of Service.
                        </p>
                    </div>
                </motion.div>

            </div>
        </div>
    );
};

const inputStyle = {
    width: '100%',
    padding: '12px 15px',
    backgroundColor: '#111',
    border: '1px solid #333',
    borderRadius: 'var(--border-radius-md)',
    color: 'var(--text-primary)',
    fontFamily: 'var(--font-body)',
    fontSize: '1rem',
    outline: 'none',
    transition: 'border-color 0.2s'
};

export default Checkout;
