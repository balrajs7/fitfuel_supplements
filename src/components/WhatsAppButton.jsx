import { useLocation } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const products = {
    '1': 'Optimum Nutrition Gold Standard 100% Whey Protein',
    '2': 'MuscleTech Mass Tech Extreme 2000',
    '3': 'FITFUEL Pro Creatine Monohydrate',
    '4': 'Cellucor C4 Explosive Pre-Workout'
};

const WhatsAppButton = () => {
    const location = useLocation();

    // Default text if they are not on a product page
    let productName = 'your supplements';

    // Check if current route is a product page
    if (location.pathname.startsWith('/product/')) {
        const id = location.pathname.split('/')[2];
        if (products[id]) {
            productName = products[id];
        }
    }

    const message = `Hello Fitfuel Supplements, I'm interested in the ${productName} and have some questions.`;
    // Using 91 prefix for the Indian number requested.
    const whatsappUrl = `https://wa.me/916362902121?text=${encodeURIComponent(message)}`;

    return (
        <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{
                position: 'fixed',
                bottom: '30px',
                right: '30px',
                backgroundColor: '#25D366',
                color: '#FFF',
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '32px',
                boxShadow: '0 4px 15px rgba(37, 211, 102, 0.4)',
                zIndex: 9999,
                cursor: 'pointer'
            }}
            aria-label="Chat on WhatsApp"
        >
            <FaWhatsapp />
        </motion.a>
    );
};

export default WhatsAppButton;
