import { motion } from 'framer-motion';
import { FiShoppingBag } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductCard = ({ id, name, price, image, category }) => {
    const { addToCart } = useCart();

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            style={{
                backgroundColor: 'var(--surface-color)',
                borderRadius: 'var(--border-radius-lg)',
                overflow: 'hidden',
                border: '1px solid var(--surface-color-light)',
                display: 'flex',
                flexDirection: 'column',
                height: '100%'
            }}
        >
            <Link to={`/product/${id}`} style={{ position: 'relative', display: 'block', padding: '20px', backgroundColor: '#0a0a0a', textAlign: 'center' }}>
                <img
                    src={image}
                    alt={name}
                    style={{
                        height: '240px',
                        objectFit: 'contain',
                        filter: 'drop-shadow(0 10px 15px rgba(0,0,0,0.5))',
                        transition: 'transform 0.3s ease'
                    }}
                    onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
                    onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
                />
                <div style={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    backgroundColor: 'var(--accent-green)',
                    color: '#000',
                    padding: '4px 8px',
                    borderRadius: 'var(--border-radius-sm)',
                    fontSize: '0.7rem',
                    fontWeight: 800,
                    textTransform: 'uppercase'
                }}>
                    {category}
                </div>
            </Link>

            <div style={{ padding: '20px', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                    <Link to={`/product/${id}`}>
                        <h3 style={{
                            fontSize: '1.1rem',
                            color: 'var(--text-primary)',
                            marginBottom: '10px',
                            fontFamily: 'var(--font-heading)'
                        }}>
                            {name}
                        </h3>
                    </Link>
                    <p style={{
                        fontSize: '1.4rem',
                        fontWeight: 700,
                        color: 'var(--accent-orange)',
                        marginBottom: '20px'
                    }}>
                        ₹{price.toLocaleString('en-IN')}
                    </p>
                </div>

                <button
                    className="btn-primary"
                    style={{
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    fontSize: '0.9rem'
                }}
                onClick={(e) => {
                    e.preventDefault();
                    addToCart({ id, name, price, image, category });
                }}
            >
                <FiShoppingBag /> Add to Cart
            </button>
            </div>
        </motion.div>
    );
};

export default ProductCard;
