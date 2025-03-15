import { motion } from 'framer-motion';

const Card = ({ children, className }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default Card;