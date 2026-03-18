import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiShield, FiMinus, FiPlus, FiShoppingBag } from 'react-icons/fi';
import { useCart } from '../context/CartContext';

const Product = () => {
    const { id } = useParams();
    const [quantity, setQuantity] = useState(1);
    const { addToCart } = useCart();

    // Mock product data based on ID
    const products = {
        '1': { name: 'Optimum Nutrition Gold Standard 100% Whey Protein', seoAlt: 'Fitfuel Supplements - Best Whey Protein Supplement', price: 6899, image: '/product_whey_1772941267798.png', category: 'Whey Isolate', weight: '5 lbs (2.27 kg)', servings: 74, description: 'The worlds best-selling whey protein powder. 24g of protein per serving to help build and maintain muscle.' },
        '2': { name: 'MuscleTech Mass Tech Extreme 2000', seoAlt: 'Fitfuel Supplements - High Quality Mass Gainer Supplement', price: 4499, image: '/product_mass_gainer_1772941284747.png', category: 'Mass Gainer', weight: '6 lbs', servings: 10, description: 'Advanced muscle mass gainer for individuals looking to gain size and strength.' },
        '3': { name: 'FITFUEL Pro Creatine Monohydrate', seoAlt: 'Fitfuel Supplements - Pure Creatine Monohydrate Powder', price: 1299, image: '/product_creatine_1772941339901.png', category: 'Creatine', weight: '500g', servings: 100, description: 'Ultra-pure micronized creatine monohydrate to fuel your intense workouts and support muscle recovery.' },
        '4': { name: 'Cellucor C4 Explosive Pre-Workout', seoAlt: 'Fitfuel Supplements - Explosive Pre-workout energy supplement', price: 2899, image: '/product_preworkout_1772941358774.png', category: 'Pre-workout', weight: '60 Servings', servings: 60, description: 'Explosive energy and intense focus to help you conquer your most grueling workouts.' }
    };

    const product = products[id] || products['1'];

    return (
        <div className="container" style={{ paddingTop: '40px', paddingBottom: '80px' }}>
            <div className="grid md:grid-cols-2" style={{ gap: '50px' }}>

                {/* Product Image Side */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    style={{
                        backgroundColor: '#0a0a0a',
                        borderRadius: 'var(--border-radius-lg)',
                        padding: '40px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        border: '1px solid var(--surface-color-light)',
                        position: 'relative'
                    }}
                >
                    <img src={product.image} alt={product.seoAlt || product.name} style={{ width: '100%', maxWidth: '450px', objectFit: 'contain', filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.6))' }} />

                    <div style={{ marginTop: '30px', width: '100%', borderTop: '1px solid var(--surface-color-light)', paddingTop: '20px' }}>
                        <h4 style={{ color: 'var(--text-secondary)', marginBottom: '10px' }}>Supplement Facts</h4>
                        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', backgroundColor: 'var(--surface-color)', borderRadius: 'var(--border-radius-sm)' }}>
                            <span>Serving Size: 1 Scoop</span>
                            <span>Servings Per Container: {product.servings}</span>
                        </div>
                        {/* Mocked nutrition table feel */}
                        <div style={{ padding: '10px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #333', paddingBottom: '5px', marginBottom: '5px' }}><span>Calories</span><span>120</span></div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #333', paddingBottom: '5px', marginBottom: '5px' }}><span>Protein</span><span>24g</span></div>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>Total Fat</span><span>1.5g</span></div>
                        </div>
                    </div>
                </motion.div>

                {/* Product Details Side */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
                >
                    <div style={{ color: 'var(--accent-green)', fontWeight: 800, textTransform: 'uppercase', fontSize: '0.9rem', marginBottom: '10px', letterSpacing: '1px' }}>
                        {product.category}
                    </div>
                    <h1 style={{ fontSize: '2.5rem', marginBottom: '15px' }}>{product.name}</h1>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '25px' }}>
                        <p style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--accent-orange)', margin: 0 }}>
                            ₹{product.price.toLocaleString('en-IN')}
                        </p>
                        <span style={{ textDecoration: 'line-through', color: 'var(--text-secondary)', fontSize: '1.2rem' }}>
                            ₹{(product.price * 1.3).toLocaleString('en-IN')}
                        </span>
                        <span style={{ backgroundColor: 'rgba(57, 255, 20, 0.1)', color: 'var(--accent-green)', padding: '4px 8px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 'bold' }}>
                            Save 30%
                        </span>
                    </div>

                    <p style={{ color: 'var(--text-primary)', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '30px' }}>
                        {product.description}
                    </p>

                    <div style={{ marginBottom: '30px' }}>
                        <h4 style={{ marginBottom: '10px' }}>Size: <span style={{ color: 'var(--text-secondary)', fontWeight: 'normal' }}>{product.weight}</span></h4>
                        <div style={{ display: 'inline-block', padding: '10px 20px', border: '2px solid var(--accent-green)', borderRadius: 'var(--border-radius-md)', backgroundColor: 'rgba(57,255,20,0.05)', fontWeight: 'bold' }}>
                            {product.weight}
                        </div>
                    </div>

                    <div style={{ display: 'flex', gap: '20px', marginBottom: '30px' }}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            backgroundColor: 'var(--surface-color)',
                            borderRadius: 'var(--border-radius-md)',
                            border: '1px solid var(--surface-color-light)',
                            overflow: 'hidden'
                        }}>
                            <button
                                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                style={{ padding: '15px', background: 'none', color: 'white', borderRadius: 0 }}
                            >
                                <FiMinus />
                            </button>
                            <span style={{ width: '40px', textAlign: 'center', fontWeight: 'bold', fontSize: '1.2rem' }}>{quantity}</span>
                            <button
                                onClick={() => setQuantity(quantity + 1)}
                                style={{ padding: '15px', background: 'none', color: 'white', borderRadius: 0 }}
                            >
                                <FiPlus />
                            </button>
                        </div>
                        <div style={{ flexGrow: 1, display: 'flex', gap: '10px' }}>
                            <button 
                                className="btn-primary" 
                                style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', fontSize: '1.1rem', backgroundColor: 'var(--surface-color)', color: '#fff' }}
                                onClick={() => addToCart({ id: id || '1', name: product.name, price: product.price, image: product.image, category: product.category }, quantity)}
                            >
                                <FiShoppingBag size={20} /> Add to Cart
                            </button>
                            <Link to="/checkout" style={{ flex: 1 }} onClick={() => addToCart({ id: id || '1', name: product.name, price: product.price, image: product.image, category: product.category }, quantity)}>
                                <button className="btn-primary" style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', fontSize: '1.1rem' }}>
                                    Buy Now
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* Trust section per instructions */}
                    <div style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.03)',
                        padding: '20px',
                        borderRadius: 'var(--border-radius-md)',
                        border: '1px dashed rgba(255, 255, 255, 0.2)'
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-primary)', fontWeight: 'bold', marginBottom: '10px' }}>
                            <FiShield size={20} color="var(--accent-green)" /> Authenticity Guaranteed
                        </div>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '15px', lineHeight: '1.5' }}>
                            Every product sold on Fitfuel Supplements comes with a verifiable scratch code. We source directly from authorized importers.
                        </p>
                        <a href="https://musclehouse.in/verify" target="_blank" rel="noreferrer" style={{
                            color: '#fff',
                            textDecoration: 'underline',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '5px',
                            fontSize: '0.9rem',
                            fontWeight: 600,
                            transition: 'color 0.2s'
                        }} onMouseOver={e => e.target.style.color = 'var(--accent-green)'} onMouseOut={e => e.target.style.color = '#fff'}>
                            Verify Product Authenticity <FiCheckCircle />
                        </a>
                    </div>

                </motion.div>
            </div>
        </div>
    );
};

export default Product;
