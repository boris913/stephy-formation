import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HeroSection = ({ title, subtitle, ctaText, ctaLink }) => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gradient-to-b from-blue-600 to-blue-700 py-20 text-center"
    >
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          {title}
        </h1>
        <p className="text-xl md:text-2xl text-blue-100 mb-8">
          {subtitle}
        </p>
        <Link
          to={ctaLink}
          className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
        >
          {ctaText}
        </Link>
      </div>
    </motion.section>
  );
};

export default HeroSection;