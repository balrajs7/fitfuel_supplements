import { motion } from 'framer-motion';
import { FiCheckCircle, FiShield, FiTruck, FiLock, FiStar } from 'react-icons/fi';
import ProductCard from '../components/ProductCard';
import { Link } from 'react-router-dom';

const Home = () => {
    const products = [
        { id: 1, name: 'Optimum Nutrition Gold Standard 100% Whey Protein - 5 lbs', seoAlt: 'Fitfuel Supplements - Best Whey Protein Supplement', price: 6899, image: '/product_whey_1772941267798.png', category: 'Whey' },
        { id: 2, name: 'MuscleTech Mass Tech Extreme 2000 - 6 lbs', seoAlt: 'Fitfuel Supplements - High Quality Mass Gainer Supplement', price: 4499, image: '/product_mass_gainer_1772941284747.png', category: 'Gainer' },
        { id: 3, name: 'FITFUEL Pro Creatine Monohydrate - 500g', seoAlt: 'Fitfuel Supplements - Pure Creatine Monohydrate Powder', price: 1299, image: '/product_creatine_1772941339901.png', category: 'Creatine' },
        { id: 4, name: 'Cellucor C4 Explosive Pre-Workout - 60 Servings', seoAlt: 'Fitfuel Supplements - Explosive Pre-workout energy supplement', price: 2899, image: '/product_preworkout_1772941358774.png', category: 'Energy' }
    ];

    const categories = [
        { name: 'Whey Protein', seoAlt: 'Fitfuel Supplements - Best Whey Protein Supplement', image: '/product_whey_1772941267798.png' },
        { name: 'Mass Gainer', seoAlt: 'Fitfuel Supplements - High Quality Mass Gainer Supplement', image: '/product_mass_gainer_1772941284747.png' },
        { name: 'Creatine', seoAlt: 'Fitfuel Supplements - Pure Creatine Monohydrate Powder', image: '/product_creatine_1772941339901.png' },
        { name: 'Pre-workout', seoAlt: 'Fitfuel Supplements - Explosive Pre-workout energy supplement', image: '/product_preworkout_1772941358774.png' }
    ];

    const testimonials = [
        { name: 'Charan Kumar s', text: 'Recommended for best discount. Beginner kits suggested based on goals. Plz visit ♥️♥️', date: '2 weeks ago' },
        { name: 'Aditya Bhat', text: 'Good variety of whey and pre-workout. Staff helpful. Clean place. Definitely coming back!', date: '1 month ago' }
    ];

    return (
        <div className="home-page">

            {/* Hero Section */}
            <section style={{
                position: 'relative',
                height: '85vh',
                display: 'flex',
                alignItems: 'center',
                background: `linear-gradient(rgba(0,0,0,0.4), rgba(18,18,18,1)), url('/gym_hero_bg_1772941252798.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed'
            }}>
                <div className="container" style={{ zIndex: 2 }}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        style={{ maxWidth: '700px' }}
                    >
                        <h1 style={{
                            fontSize: 'clamp(3rem, 5vw, 4.5rem)',
                            marginBottom: '20px',
                            textShadow: '0 4px 20px rgba(0,0,0,0.8)'
                        }}>
                            100% AUTHENTIC SUPPLEMENTS.<br />
                            <span style={{ color: 'var(--accent-orange)' }}>FAST DELIVERY</span>
                        </h1>
                        <p style={{
                            fontSize: '1.2rem',
                            color: 'var(--text-primary)',
                            marginBottom: '30px',
                            opacity: 0.9,
                        }}>
                            Premium quality for elite performance.
                        </p>
                        <Link to="#bestsellers">
                            <button className="btn-primary" style={{ fontSize: '1.2rem', padding: '15px 35px' }}>
                                SHOP NOW
                            </button>
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Trust Badges */}
            <section style={{ backgroundColor: '#0a0a0a', padding: '30px 0', borderBottom: '1px solid var(--surface-color-light)' }}>
                <div className="container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', gap: '20px' }}>
                    {[
                        { icon: <FiCheckCircle size={24} color="var(--accent-green)" />, text: '100% Genuine Products' },
                        { icon: <FiShield size={24} color="var(--accent-green)" />, text: 'Importer Verified' },
                        { icon: <FiTruck size={24} color="var(--accent-orange)" />, text: 'Fast Delivery in Bengaluru' },
                        { icon: <FiLock size={24} color="var(--accent-orange)" />, text: 'Secure Checkout' }
                    ].map((badge, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-primary)', fontWeight: 600, fontSize: '0.9rem', textTransform: 'uppercase' }}
                        >
                            {badge.icon} {badge.text}
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Core Categories */}
            <section className="section container" id="categories">
                <h2 className="text-center mb-4" style={{ fontSize: '2.5rem' }}>SHOP BY <span style={{ color: 'var(--accent-green)' }}>CATEGORY</span></h2>
                <div className="grid grid-cols-2 lg:grid-cols-4" style={{ gap: '30px' }}>
                    {categories.map((cat, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ scale: 1.05 }}
                            style={{ textAlign: 'center', cursor: 'pointer' }}
                        >
                            <div style={{
                                width: '180px',
                                height: '180px',
                                borderRadius: '50%',
                                margin: '0 auto 15px',
                                backgroundColor: 'var(--surface-color)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                overflow: 'hidden',
                                border: '3px solid var(--surface-color-light)',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
                            }}>
                                <img src={cat.image} alt={cat.seoAlt || cat.name} style={{ height: '120px', objectFit: 'contain' }} />
                            </div>
                            <h3 style={{ fontSize: '1.1rem', color: 'var(--text-primary)', textTransform: 'uppercase' }}>{cat.name}</h3>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Best Sellers */}
            <section className="section" style={{ backgroundColor: 'var(--surface-color)', padding: '80px 0' }} id="bestsellers">
                <div className="container">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '40px' }}>
                        <h2 style={{ fontSize: '2.5rem', margin: 0 }}>BEST <span style={{ color: 'var(--accent-orange)' }}>SELLERS</span></h2>
                        <Link to="#" style={{ color: 'var(--text-secondary)', textDecoration: 'underline', fontWeight: 600 }}>View All</Link>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                        {products.map(product => (
                            <ProductCard key={product.id} {...product} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="section container">
                <h2 className="text-center mb-4" style={{ fontSize: '2.5rem' }}>WHAT OUR <span style={{ color: 'var(--accent-green)' }}>FAM SAYS</span></h2>
                <div className="grid md:grid-cols-2" style={{ gap: '30px', maxWidth: '900px', margin: '0 auto' }}>
                    {testimonials.map((test, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            style={{
                                backgroundColor: 'rgba(255,255,255,0.05)',
                                padding: '30px',
                                borderRadius: 'var(--border-radius-lg)',
                                border: '1px solid var(--surface-color-light)'
                            }}
                        >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
                                <div style={{
                                    width: '50px',
                                    height: '50px',
                                    borderRadius: '50%',
                                    backgroundColor: 'var(--accent-orange)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '1.5rem',
                                    fontWeight: 'bold',
                                    color: '#000'
                                }}>
                                    {test.name.charAt(0)}
                                </div>
                                <div>
                                    <h4 style={{ margin: 0, fontSize: '1.1rem' }}>{test.name}</h4>
                                    <div style={{ display: 'flex', color: '#FFD700', gap: '2px', marginTop: '5px' }}>
                                        <FiStar fill="currentColor" size={14} /><FiStar fill="currentColor" size={14} /><FiStar fill="currentColor" size={14} /><FiStar fill="currentColor" size={14} /><FiStar fill="currentColor" size={14} />
                                    </div>
                                </div>
                            </div>
                            <p style={{ color: 'var(--text-primary)', fontStyle: 'italic', fontSize: '1.05rem', lineHeight: '1.6' }}>
                                "{test.text}"
                            </p>
                            <div style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', marginTop: '15px' }}>
                                Posted on Google • {test.date}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

        </div>
    );
};

export default Home;
